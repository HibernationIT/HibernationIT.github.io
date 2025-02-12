import React from "react";
import styled from "styled-components";
import Title from "components/atom/Title";
import { useReadHomepageProjects } from "api/homepageProjects";

export default function Project() {
  const { data } = useReadHomepageProjects({});

  return (
    <s.Layout>
      <s.TitleBox>
        <Title mode="header1">My Projects</Title>
        <Title mode="header3">지금까지 만든 토이 프로젝트들을 소개합니다</Title>
      </s.TitleBox>
      <s.Contents></s.Contents>
    </s.Layout>
  );
}

const s = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    text-align: center;
  `,

  Contents: styled.div`
    max-width: 1200px;
    width: 100%;
  `,
};
