import React, { useEffect, useState } from "react";
import Button from "components/atom/Button";
import TextInput from "components/atom/input/TextInput";
import FileInput from "components/atom/input/FileInput";
import RangeInput from "components/atom/input/RangeInput";
import CheckBoxInput from "components/atom/input/CheckBoxInput";

interface IProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  label?: string;
  defaultLabel?: boolean;
  slotProps?: string | React.ReactNode;
  color?: string;
  mode?: "outline" | "text" | "fill";
  onFileChange?: (fileList: FileList | undefined) => void;
  onChange?: (value: string | number | boolean) => void;
}

export default function Input({ children, type = "text", mode = "outline", onFileChange, ...props }: IProps) {
  if (type === "button") return <Button mode={mode}>{children}</Button>;
  if (type === "text" || type === "password" || type === "number")
    return (
      <TextInput type={type} mode={mode} {...props}>
        {children}
      </TextInput>
    );
  if (type === "file") return <FileInput onFileChange={onFileChange} {...props} />;
  if (type === "range") return <RangeInput {...props} />;
  if (type === "checkbox") return <CheckBoxInput {...props} />;
}
