import React, { useRef, useState } from "react";
import $COLOR from "assets/styles/colors.scss";
import styled from "styled-components";

interface IProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  label?: string;
  defaultLabel?: boolean;
  slotProps?: string | React.ReactNode;
  color?: string;
  mode: "outline" | "text" | "fill";
  onChange?: (value: string) => void;
}

export default function TextInput({
  children,
  placeholder,
  value,
  disabled,
  type,
  label,
  defaultLabel = false,
  slotProps,
  color,
  mode,
  onChange,
  onFocus,
  onBlur,
  ...props
}: IProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [focus, setFocus] = useState<boolean>(false);

  return (
    <s.TextBox $mode={mode}>
      {label && (
        <s.Label
          $mode={mode}
          $defaultShow={placeholder === undefined}
          $active={
            defaultLabel ||
            (!value && inputRef.current?.value && inputRef.current?.value !== "") ||
            (value && value !== "") ||
            focus
          }
          $disabled={disabled}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
        </s.Label>
      )}
      <s.InputBox $mode={mode} $focus={focus} $color={color ?? $COLOR["--primary"]} $disabled={disabled}>
        <s.Input
          ref={inputRef}
          type={type}
          placeholder={focus ? undefined : placeholder}
          disabled={disabled}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setFocus(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setFocus(false);
          }}
          value={value}
          onChange={(e) => onChange && onChange(e.currentTarget.value)}
          {...props}
        />
        {slotProps && <s.Unit>{slotProps}</s.Unit>}
      </s.InputBox>
    </s.TextBox>
  );
}

const s = {
  TextBox: styled.div<{ $mode: string }>`
    position: relative;
    display: inline-block;

    padding-top: ${({ $mode }) => ($mode !== "fill" ? "12px" : "0")};
    padding-left: ${({ $mode }) => ($mode === "text" ? "11px" : "0")};
    padding-right: ${({ $mode }) => ($mode === "text" ? "11px" : "0")};
  `,

  InputBox: styled.div<{ $mode: string; $focus: boolean; $color: string; $disabled?: boolean }>`
    display: flex;

    padding: ${({ $mode }) =>
      $mode === "outline" ? "7px 11px 7px 11px" : $mode === "text" ? "8px 0 7px 0" : "18px 11px 9px 11px"};

    transition: border 240ms;

    box-sizing: border-box;

    border-bottom: 1px solid;
    border-top: ${({ $mode }) => ($mode === "outline" ? "1px solid" : "none")};
    border-left: ${({ $mode }) => ($mode === "outline" ? "1px solid" : "none")};
    border-right: ${({ $mode }) => ($mode === "outline" ? "1px solid" : "none")};

    border-color: ${({ $focus, $color, $disabled }) =>
      $focus ? $color : $disabled ? "var(--bg-800)" : "var(--bg-600)"};
    border-radius: ${({ $mode }) => ($mode === "outline" ? "6px" : "6px 6px 0 0")};
    background-color: ${({ $mode }) => ($mode === "fill" ? "var(--bg-500)" : "var(--bg)")};
  `,

  Input: styled.input`
    display: inline-block;

    width: 100%;
    margin: 0;

    outline: none;
    border: none;
    background: none;

    &:disabled:hover {
      cursor: no-drop;
    }

    &::placeholder {
      &:disabled {
        color: var(--bg-800);
      }
      color: var(--light-text);
    }
  `,

  Label: styled.label<{ $mode: string; $defaultShow: boolean; $active: boolean; $disabled?: boolean }>`
    position: absolute;

    top: ${({ $active }) => ($active ? "0" : "40%")};
    left: 10px;

    transition:
      top 240ms,
      font-size 240ms,
      opacity 240ms;
    padding: 1px 4px;

    opacity: ${({ $defaultShow, $active }) => ($defaultShow || (!$defaultShow && $active) ? "1" : "0")};
    font-size: ${({ $active }) => ($active ? "12px" : "16px")};
    color: ${({ $active, $disabled }) => ($active ? "var(--text)" : $disabled ? "var(--bg-800)" : "var(--light-text)")};
    background-color: ${({ $mode }) => ($mode === "fill" ? "var(--bg-500)" : "var(--bg)")};

    &:hover {
      cursor: ${({ $disabled }) => ($disabled ? "no-drop" : "text")};
    }
  `,

  Unit: styled.span`
    top: 16px;
    right: 16px;
  `,
};
