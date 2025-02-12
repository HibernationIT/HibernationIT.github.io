import styled from "styled-components";
import React from "react";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  mode?: "title" | "subTitle" | "header1" | "header2" | "header3" | "header4";
}

export default function Title({ mode = "title", children, ...props }: IProps) {
  switch (mode) {
    case "title":
      return <s.Title>{children}</s.Title>;
    case "subTitle":
      return <s.SubTitle>{children}</s.SubTitle>;
    case "header1":
      return <s.Header1>{children}</s.Header1>;
    case "header2":
      return <s.Header2>{children}</s.Header2>;
    case "header3":
      return <s.Header3>{children}</s.Header3>;
    case "header4":
      return <s.Header4>{children}</s.Header4>;
  }
}

const s = {
  Title: styled.h1`
    height: 54px;

    font-size: 32px;
    font-weight: 700;
    line-height: 54px;
  `,
  SubTitle: styled.h2`
    height: 64px;

    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: var(--light-text);
  `,
  Header1: styled.h3`
    height: 34px;

    font-size: 28px;
    font-weight: 600;
    line-height: 34px;
  `,
  Header2: styled.h4`
    height: 28px;

    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  `,
  Header3: styled.h5`
    height: 24px;

    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: var(--light-text);
  `,
  Header4: styled.h6`
    height: 20px;

    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: var(--light-text);
  `,
};
