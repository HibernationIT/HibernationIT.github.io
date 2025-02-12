import React from "react";
import styled from "styled-components";
import Title from "components/atom/Title";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  title?: string;
  subTitle?: string;
  topText?: string;
}

export default function Card({ children, title, subTitle, topText, ...props }: IProps) {
  return (
    <s.Card {...props}>
      {topText && <p className="topText">{topText}</p>}
      {title && <Title mode="header1">{title}</Title>}
      {subTitle && <Title mode="header3">{subTitle}</Title>}
      {children}
    </s.Card>
  );
}

const s = {
  Card: styled.section`
    padding: 24px;

    border-radius: 8px;
    box-sizing: border-box;

    border: 1px solid var(--bg-600);
    background-color: var(--bg);

    & > .topText {
      height: 28px;
      color: var(--light-text);
      line-height: 24px;
    }
  `,
};
