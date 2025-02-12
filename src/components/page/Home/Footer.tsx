import React, { RefObject } from "react";

import styled from "styled-components";

import { ReactComponent as Logo } from "assets/image/logo.svg";

interface IProps {
  scrollRef: RefObject<HTMLDivElement>;
}

export default function Footer({ scrollRef }: IProps) {
  return (
    <s.Layout ref={scrollRef}>
      <s.H1>
        <Logo />
        Hibernation IT
      </s.H1>
      <p>© 2024 CHANHEEKIM. All rights reserved.</p>
    </s.Layout>
  );
}

const s = {
  Layout: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 24px;
    box-sizing: border-box;

    width: 100%;
    height: 150px;

    p {
      color: var(--light-text);
    }
  `,

  H1: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    font-size: 24px;
    font-weight: 500;

    svg {
      width: 32px;
      height: 32px;

      fill: var(--text);
    }
  `,
};
