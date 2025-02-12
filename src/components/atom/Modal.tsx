import React, { MouseEvent, useCallback } from "react";
import styled from "styled-components";
import Card from "components/atom/Card";

interface IProps {
  onClickBackground: () => void;
  modal: boolean;
  width?: number;
  children?: React.JSX.Element[] | React.JSX.Element;
}

export default function Modal({ onClickBackground, width, modal, children }: IProps) {
  const onClickBg = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClickBackground();
    },
    [onClickBackground],
  );

  return (
    <s.Layout $modal={modal}>
      <s.Bg onClick={onClickBg} />
      <Card style={{ width: `${width}px` }}>{children}</Card>
    </s.Layout>
  );
}

const s = {
  Layout: styled.div<{ $modal: boolean }>`
    visibility: ${({ $modal }) => ($modal ? "visible" : "hidden")};
    
    & > section {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1000;
      transform: translate(-50%, -50%);

      min-width: 320px;
  `,

  Bg: styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;

    width: 100%;
    height: 100%;

    background-color: var(--background-blur);
    backdrop-filter: blur(2px);
  `,
};
