import React, { createElement, MouseEventHandler, useCallback, useRef } from "react";

import styled from "styled-components";
import $COLORS from "assets/styles/colors.scss";

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: "large" | "small";
  mode?: "outline" | "text" | "fill";
  color?: string;
  textColor?: string;
  hoverTextColor?: string;
  activeColor?: string;
  hoverColor?: string;
}

export default function Button({
  size,
  mode = "fill",
  color,
  textColor,
  hoverTextColor,
  activeColor,
  hoverColor,
  ...props
}: IProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const clickAnimation = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const elementX = window.scrollX + rect.left;
      const elementY = window.scrollY + rect.top;

      const activeDiv = document.createElement("div");
      activeDiv.style.position = "absolute";
      activeDiv.style.left = `${e.pageX - elementX}px`;
      activeDiv.style.top = `${e.pageY - elementY}px`;
      activeDiv.style.background = activeColor ?? $COLORS["--primary-100"];
      activeDiv.style.animation = "buttonActive 600ms";
      activeDiv.style.translate = "-50% -50%";
      activeDiv.style.width = `${e.currentTarget.offsetWidth * 2}px`;
      activeDiv.style.height = `${e.currentTarget.offsetWidth * 2}px`;
      activeDiv.style.borderRadius = "50%";
      activeDiv.style.opacity = "50%";
      setTimeout(() => {
        activeDiv.remove();
      }, 600);
      buttonRef.current?.appendChild(activeDiv);
    },
    [buttonRef, activeColor],
  );

  return (
    <s.Button
      ref={buttonRef}
      onMouseDown={(e) => {
        clickAnimation(e);
        props.onMouseDown && props.onMouseDown(e);
      }}
      $size={size}
      $mode={mode}
      $color={color ?? $COLORS["--primary"]}
      $textColor={textColor}
      $hoverTextColor={hoverTextColor}
      $hoverColor={hoverColor ?? $COLORS["--primary-600"]}
      {...props}
    />
  );
}

const s = {
  Button: styled.button<{
    $size?: "large" | "small";
    $color: string;
    $textColor?: string;
    $hoverTextColor?: string;
    $hoverColor: string;
    $mode?: "outline" | "text" | "fill";
  }>`
    position: relative;
    display: block;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;

    outline: none;
    border: ${({ $mode, $color }) => ($mode === "outline" ? `1px solid ${$color}` : "none")};
    background: ${({ $mode, $color }) => ($mode === "fill" ? $color : "none")};
    color: ${({ $mode, $color, $textColor }) => ($mode !== "fill" ? $color : $textColor ? $textColor : "var(--white)")};

    padding: ${({ $mode, $size }) =>
      $size === "large"
        ? $mode === "outline"
          ? "11px 19px"
          : "12px 20px"
        : $size === "small"
          ? $mode === "outline"
            ? "7px 15px"
            : "8px 16px"
          : $mode === "outline"
            ? "9px 17px"
            : "10px 18px"};
    font-size: ${({ $size }) => ($size === "large" ? "16px" : $size === "small" ? "12px" : "14px")};
    line-height: ${({ $size }) => ($size === "large" ? "20px" : $size === "small" ? "14px" : "16px")};

    &:disabled {
      border: ${({ $mode }) => ($mode === "outline" ? `1px solid var(--white-100)` : "none")};
      background: ${({ $mode }) => ($mode === "fill" ? "var(--white-100)" : "var(--bg)")};
      color: var(--black-100);
    }
    &:hover {
      cursor: pointer;
      border: ${({ $mode, $hoverColor }) => ($mode === "outline" ? `1px solid ${$hoverColor}` : "none")};
      background: ${({ $mode, $hoverColor }) => ($mode === "fill" ? $hoverColor : "var(--bg-800)")};
      color: ${({ $mode, $hoverColor, $hoverTextColor }) =>
        $mode !== "fill" ? $hoverColor : $hoverTextColor ? $hoverTextColor : "var(--white-500)"};

      &:disabled {
        cursor: no-drop;
        border: ${({ $mode }) => ($mode === "outline" ? `1px solid var(--black-100)` : "none")};
        background: ${({ $mode }) => ($mode === "fill" ? "var(--black-100)" : "var(--bg-800)")};
        color: var(--black-400);
      }
    }

    @keyframes buttonActive {
      from {
        transform: scale(0);
        opacity: 0.5;
      }
      to {
        transform: scale(1);
        opacity: 0;
      }
    }
  `,
};
