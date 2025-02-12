import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "components/atom/Input";
import $COLOR from "assets/styles/colors.scss";
import Chip from "components/atom/Chip";

import { ReactComponent as TriangleLeftIcon } from "assets/icon/triangle_left-fill.svg";

interface IProps<T>
  extends Omit<
    Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange">,
    "value"
  > {
  value?: string[];
  label?: string;
  defaultLabel?: boolean;
  slotProps?: string | React.ReactNode;
  color?: string;
  mode?: "outline" | "text" | "fill";
  options: T[] | string[];
  valueKey?: keyof T;
  showChip?: boolean;
  onChange?: (value: string[]) => void;
}

export default function Select<T>({
  options,
  valueKey,
  color,
  multiple,
  showChip,
  onChange,
  value,
  mode,
  ...props
}: IProps<T>) {
  // REF
  const selectBox = useRef<HTMLDivElement | null>(null);

  // STATE
  const [showList, setShowList] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string[]>([]);

  // FUNCTION
  const filterFunc = (v: T | string) => {
    return multiple
      ? true
      : searchText === ""
        ? true
        : (typeof v === "string" ? v : valueKey === undefined ? String(v) : String(v[valueKey])).includes(searchText);
  };
  const getValue = (v: T | string) => {
    return typeof v === "string" ? v : valueKey === undefined ? String(v) : String(v[valueKey]);
  };

  // CALLBACK
  const clickHandler = useCallback(
    (v: T | string) => {
      const value = typeof v === "string" ? v : valueKey === undefined ? String(v) : String(v[valueKey]);

      let result;
      if (multiple)
        result = selectValue.includes(value) ? selectValue.filter((v) => v !== value) : [...selectValue, value];
      else result = [value];

      setSelectValue(result);
      setSearchText(value);
      !multiple && setShowList(false);
      onChange && onChange(result);
    },
    [selectValue, multiple, valueKey, onChange],
  );

  // EFFECT
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      // @ts-ignore
      if (showList && selectBox.current && !selectBox.current.contains(e.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClose);

    return () => document.removeEventListener("mousedown", handleOutsideClose);
  }, [showList, setShowList]);

  useEffect(() => {
    if (!showList) setSearchText(selectValue[0]);
  }, [showList]);

  useEffect(() => {
    setSelectValue(value ?? []);
  }, [value]);

  return (
    <s.Select ref={selectBox} $open={showList} $color={color ?? $COLOR["--primary"]}>
      <Input
        mode="outline"
        value={(!multiple ? searchText : showChip && selectValue.length ? " " : selectValue.join(", ")) ?? ""}
        onFocus={() => {
          setShowList(true);
          !multiple && setSearchText("");
        }}
        onChange={(value) => setSearchText(value as string)}
        color={color}
        {...props}
      />
      {multiple && (
        <s.ChipBox
          onClick={() => {
            setShowList(true);
            !multiple && setSearchText("");
          }}
        >
          {showChip &&
            selectValue.map((v, i) => (
              <Chip key={i} size="small">
                {v}
              </Chip>
            ))}
        </s.ChipBox>
      )}
      <s.IconBox $showList={showList}>
        <TriangleLeftIcon />
      </s.IconBox>

      {showList && (
        <s.ListBox>
          <s.OptionsBox>
            {options.filter(filterFunc).map((v: T | string, key: number) => (
              <s.Option
                key={key}
                onClick={() => clickHandler(v)}
                $active={multiple && selectValue.includes(getValue(v))}
              >
                {getValue(v)}
              </s.Option>
            ))}
          </s.OptionsBox>
        </s.ListBox>
      )}
    </s.Select>
  );
}

const s = {
  Select: styled.div<{ $open?: boolean; $color: string }>`
    display: inline-block;

    position: relative;

    & > div:first-child {
      width: 100%;

      & > div {
        border-radius: 6px 6px ${({ $open }) => ($open ? "0px 0px" : "6px 6px")};
        border-color: ${({ $open, $color }) => ($open ? $color : "var(--bg-600)")};
      }
    }
  `,

  ChipBox: styled.div`
    display: flex;
    gap: 4px;

    position: absolute;
    top: 20px;
    left: 12px;

    box-sizing: border-box;

    width: calc(100% - 24px);
    height: calc(100% - 28px);

    &:hover {
      cursor: pointer;
    }
  `,

  IconBox: styled.div<{ $showList?: boolean }>`
    position: absolute;
    right: 8px;
    top: 22px;

    fill: var(--text);

    transition: transform 200ms ease-in-out;
    transform: rotateZ(${({ $showList }) => ($showList ? "-90deg" : "0")});

    svg {
      display: block;

      width: 20px;
      height: 20px;
    }
  `,

  ListBox: styled.div`
    position: absolute;
    z-index: 2;

    padding-bottom: 8px;

    width: 100%;
    max-height: 350px;

    border-radius: 0 0 8px 8px;
    overflow: hidden;

    box-shadow: 0 4px 8px var(--background-blur);

    background: var(--bg-900);
  `,

  OptionsBox: styled.div<{ $open?: boolean }>`
    overflow: auto;
    max-height: 350px;
  `,

  Option: styled.div<{ $active?: boolean }>`
    padding: 8px 12px;

    box-sizing: border-box;

    width: 100%;

    background: ${({ $active }) => ($active ? "var(--background-blur)" : "none")};

    &:hover {
      background: var(--background-blur);
      cursor: pointer;
    }
  `,
};
