import React from "react";
import styled from "styled-components";
import $COLORS from "assets/styles/colors.scss";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "large" | "small";
  fill?: boolean;
  color?: string;
  borderColor?: string;
  hoverColor?: string;
}

export default function Chip({ children, size, fill = true, color, borderColor, hoverColor, ...props }: IProps) {
  return (
    <s.Chip
      $size={size}
      $fill={fill}
      $color={color ?? $COLORS["--primary"]}
      $hoverColor={hoverColor ?? $COLORS["--primary-600"]}
      {...props}
    >
      {children}
    </s.Chip>
  );
}

const s = {
  Chip: styled.div<{
    $size?: "large" | "small";
    $fill: boolean;
    $color: string;
    $hoverColor: string;
  }>`
    display: inline-block;
    border-radius: 999px;

    padding: ${({ $size }) => ($size === "large" ? "6px 16px" : $size === "small" ? "2px 8px" : "4px 12px")};
    font-size: ${({ $size }) => ($size === "large" ? "16px" : $size === "small" ? "12px" : "14px")};
    line-height: ${({ $size }) => ($size === "large" ? "20px" : $size === "small" ? "14px" : "16px")};

    border: ${({ $color }) => `1px solid ${$color}`};
    background: ${({ $fill, $color }) => ($fill ? `${$color}65` : "var(--bg)")};
    color: ${({ $fill }) => ($fill ? "var(--white)" : "var(--text)")};
  `,
};
