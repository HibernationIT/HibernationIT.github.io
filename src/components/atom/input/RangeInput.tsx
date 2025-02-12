import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import $COLOR from "assets/styles/colors.scss";

interface IProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  label?: string;
  defaultLabel?: boolean;
  slotProps?: string | React.ReactNode;
  color?: string;
  onChange?: (value: number) => void;
}

export default function RangeInput({
  label,
  slotProps,
  color,
  value,
  min = 0,
  max = 100,
  onChange,
  disabled,
  ...props
}: IProps) {
  const [data, setData] = useState<string | number | readonly string[] | undefined>(50);

  useEffect(() => {
    setData(value ?? 50);
  }, [value]);

  return (
    <s.RangeInput>
      {label && <label>{label}</label>}
      <s.Input
        value={data}
        min={min}
        max={max}
        type="range"
        $color={color ?? $COLOR["--primary"]}
        onChange={(e) => {
          if (value !== undefined) {
            onChange && onChange(Number(e.currentTarget.value));
          } else {
            setData(e.currentTarget.value);
          }
        }}
        disabled={disabled}
        {...props}
      />
      <s.RangeBox>
        <s.RangeActive
          $color={color ?? $COLOR["--primary"]}
          $disabled={disabled}
          $percent={((Number(data) - Number(min)) / (Number(max) - Number(min))) * 100}
        />
      </s.RangeBox>
    </s.RangeInput>
  );
}

const s = {
  RangeInput: styled.div`
    position: relative;
    padding-top: 32px;

    box-sizing: border-box;

    height: 50px;
    display: inline-block;

    label {
      position: absolute;
      top: 2px;

      padding: 1px 4px;

      font-size: 12px;
    }
  `,
  RangeBox: styled.div`
    position: absolute;
    bottom: 6px;
    z-index: 1;

    height: 8px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;

    background: var(--bg-500);
  `,
  RangeActive: styled.div<{ $percent: number; $color: string; $disabled?: boolean }>`
    width: ${({ $percent }) => $percent}%;
    height: 100%;

    background: ${({ $color, $disabled }) => ($disabled ? "var(--bg-300)" : $color)};
  `,
  Input: styled.input<{ $color: string }>`
    display: block;
    position: relative;
    z-index: 10;

    margin: 0;

    height: 16px;
    width: 100%;
    background: none;

    -webkit-appearance: none;

    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      height: 16px;
      width: 16px;
      border-radius: 8px;
      background: ${({ $color }) => $color};
      cursor: pointer;
      -webkit-appearance: none;
      box-shadow: 0 0 8px 0 ${({ $color }) => $color};
      transition: box-shadow 500ms;

      &:hover {
        box-shadow: 0 0 8px 4px ${({ $color }) => $color};
      }
    }
    &:disabled&::-webkit-slider-thumb {
      background: var(--bg-300);
      box-shadow: 0 0 8px 0 var(--bg-300);
      cursor: no-drop;

      &:hover {
        box-shadow: 0 0 8px 4px var(--bg-300);
      }
    }
  `,
};
