import React from "react";
import styled from "styled-components";
import { ReactComponent as Checked } from "assets/icon/checked-fill.svg";
import { ReactComponent as Unchecked } from "assets/icon/unchecked-line.svg";
import $COLOR from "assets/styles/colors.scss";

interface IProps
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  label?: string;
  defaultLabel?: boolean;
  slotProps?: string | React.ReactNode;
  color?: string;
  onChange?: (value: boolean) => void;
}

export default function CheckBoxInput({ label, defaultLabel, slotProps, color, onChange, ...props }: IProps) {
  return (
    <s.CheckBox>
      <s.Label $color={color ?? $COLOR["--primary"]}>
        <s.Input type="checkbox" onChange={(e) => onChange && onChange(e.target.checked)} {...props} />
        <Checked />
        <Unchecked />
        {label && <p>{label}</p>}
      </s.Label>
    </s.CheckBox>
  );
}

const s = {
  CheckBox: styled.div`
    display: inline-block;

    height: 20px;
  `,

  Input: styled.input`
    display: none;

    &:checked ~ svg:nth-child(3) {
      display: none;
    }
    &:not(:checked) + svg:nth-child(2) {
      display: none;
    }
  `,

  Label: styled.label<{ $color: string }>`
    display: flex;
    gap: 8px;

    p {
      display: inline-block;
      line-height: 20px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
    svg:nth-child(2) {
      fill: ${({ $color }) => $color};
    }
    svg:nth-child(3) {
      stroke: ${({ $color }) => $color};
    }
  `,
};
