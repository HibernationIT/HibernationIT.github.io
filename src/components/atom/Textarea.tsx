import React, { useEffect } from "react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import styled from "styled-components";
import { Block, locales } from "@blocknote/core";

interface IProps {
  initialContent?: Block[];
  editable?: boolean;
  onChange?: (value: Block[]) => void;
  uploadFile?: (file: File) => Promise<string>;
}

export default function Textarea({ initialContent, editable, onChange, uploadFile }: IProps) {
  const editor = useCreateBlockNote(
    {
      dictionary: locales.ko,
      initialContent: initialContent,
      uploadFile,
    },
    [initialContent],
  );

  return (
    <s.Textarea>
      <BlockNoteView editor={editor} editable={editable} onChange={() => onChange && onChange(editor.document)} />
    </s.Textarea>
  );
}

const s = {
  Textarea: styled.div`
    .bn-editor {
      background: none;
    }

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }
  `,
};
