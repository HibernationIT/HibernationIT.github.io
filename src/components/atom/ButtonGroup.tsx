import React, { Children } from "react";
import styled from "styled-components";
import Button from "components/atom/Button";

interface IProps {
  children: React.JSX.Element | React.JSX.Element[];
}

export default function ButtonGroup({ children }: IProps) {
  Children.forEach(children, (child) => {
    if (child.type !== Button) {
      throw new Error("ButtonGroup can only have Button children.");
    }
  });

  return <s.ButtonGroup>{children}</s.ButtonGroup>;
}

const s = {
  ButtonGroup: styled.div`
    display: inline-flex;

    & > button {
      border-top: 1px solid var(--bg-700) !important;
      border-bottom: 1px solid var(--bg-700) !important;
      border-left: 1px solid var(--bg-700) !important;
      border-right: none !important;
    }
    & > button:last-child {
      border-right: 1px solid var(--bg-700) !important;
    }

    & > button:not(:first-child):not(:last-child) {
      border-radius: 0 0 0 0;
    }
    & > button:not(:last-child) {
      border-radius: 6px 0 0 6px;
    }
    & > button:not(:first-child) {
      border-radius: 0 6px 6px 0;
    }
  `,
};
