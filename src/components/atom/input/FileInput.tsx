import React, { ChangeEvent, DragEvent, DragEventHandler, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import $COLOR from "assets/styles/colors.scss";
import { ReactComponent as ImageClickIcon } from "assets/icon/image-click-line.svg";

interface IProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  label?: string;
  defaultLabel?: boolean;
  slotProps?: string | React.ReactNode;
  color?: string;
  onFileChange?: (fileList: FileList | undefined) => void;
}

export default function FileInput({ color, disabled, placeholder, onFileChange, multiple }: IProps) {
  const [files, setFiles] = useState<FileList | undefined>();
  const [fileInfos, setFileInfos] = useState<{ name: string; size: string; imageUrl?: string }[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    for (let i = 0; i < (multiple ? (files?.length ?? 0) : 1); i++) {
      let file: File | null = null;
      if (files) file = files.item(i);
      if (!file) return;

      const { name, type } = file;
      const isImage = type.startsWith("image");
      const size = (file.size / (1024 * 1024)).toFixed(2) + "MB";

      if (!isImage) {
        setFileInfos((state) => {
          if (state.length < i) {
            return [...state, { name, size, type }];
          }
          const result = [...state];
          result[i] = { name, size };
          return result;
        });
        continue;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setFileInfos((state) => {
          if (state.length < i) {
            return [...state, { name, size, type, imageUrl: String(reader.result) }];
          }
          const result = [...state];
          result[i] = { name, size, imageUrl: String(reader.result) };
          return result;
        });
      };
      reader.readAsDataURL(file);
    }
  }, [files, setFileInfos]);

  const onDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };
  const onDragEnd = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };
  const onDragFileUpload = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files ?? undefined;
    setFileInfos([]);
    setFiles(files);
    setIsDragOver(false);
    onFileChange && onFileChange(files);
  };
  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? undefined;
    setFileInfos([]);
    setFiles(files);
    onFileChange && onFileChange(files);
  };

  return (
    <s.FileBox
      $color={color ?? $COLOR["--primary"]}
      $disabled={disabled}
      $overFile={isDragOver}
      onDragOver={onDragOver}
      onDragEnter={onDragOver}
      onDragLeave={onDragEnd}
      onDrop={onDragFileUpload}
    >
      <input type="file" onChange={onFileUpload} />
      {files?.length ? (
        <s.Files>
          {fileInfos.map((info, key) =>
            info.imageUrl ? (
              <img key={key} src={info.imageUrl} alt={info.name} />
            ) : (
              // <s.Image key={key} $src={info.imageUrl} />
              <s.Info key={key}>
                <div>
                  <p>파일명</p>
                  <p>{info.name}</p>
                </div>
                <div>
                  <p>크기</p>
                  <p>{info.size}</p>
                </div>
              </s.Info>
            ),
          )}
        </s.Files>
      ) : (
        <>
          <ImageClickIcon />
          <p>클릭 혹은 파일을 이곳에 드롭하세요.</p>
          {placeholder && <span>{placeholder}</span>}
        </>
      )}
    </s.FileBox>
  );
}

const s = {
  FileBox: styled.label<{ $color: string; $disabled?: boolean; $overFile: boolean }>`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;

    min-width: 224px;
    min-height: 196px;

    border: 1.4px dashed
      ${({ $disabled, $color, $overFile }) => ($disabled ? "var(--bg-800)" : $overFile ? $color : "var(--bg-600)")};
    border-radius: 6px;
    ${({ $overFile }) => ($overFile ? "background-color: var(--bg-800)" : "")};

    &:hover {
      cursor: pointer;
    }

    & > span {
      font-size: 14px;
      color: var(--light-text);
    }
    & > input {
      display: none;
    }
    svg {
      stroke: ${({ $color }) => $color};
      width: 48px;
      height: 48px;
    }
  `,

  Files: styled.div`
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 16px;
    width: 100%;
    height: 100%;

    &::-webkit-scrollbar {
      height: 10px;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-track-piece {
      background: var(--bg-800);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--bg-200);
      transition: background-color 200ms;

      border-radius: 5px;
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: var(--bg-100);
    }

    & > * {
      position: relative;
    }
  `,

  Image: styled.div<{ $src: string }>`
    flex-shrink: 0;

    background-image: url("${({ $src }) => $src}");
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    min-width: 196px;
    min-height: 196px;
  `,

  Info: styled.div`
    flex-shrink: 0;

    width: 100%;
    height: 100%;
    min-width: 196px;
    min-height: 196px;

    padding: 8px;

    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid var(--bg-800);

    display: flex;
    flex-direction: column;
    gap: 8px;

    & > div {
      & > p:first-child {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }

      & > p:last-child {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  `,
};
