import React from "react";
import styled from "styled-components";
import Title from "components/atom/Title";
import { useReadHomepageProjects } from "api/homepageProjects";
import ContentsCard from "components/page/Project/ContentsCard";

export default function Project() {
  const { data } = useReadHomepageProjects({});

  return (
    <s.Layout>
      <s.TitleBox>
        <Title mode="header1">My Projects</Title>
        <Title mode="header3">지금까지 만든 토이 프로젝트들을 소개합니다</Title>
      </s.TitleBox>
      <s.Contents>{data?.content.map((d, k) => <ContentsCard key={k} data={d} />)}</s.Contents>
    </s.Layout>
  );
}

const s = {
  Layout: styled.div`
    margin: 0 auto;
    padding: 0 32px;
    box-sizing: border-box;

    max-width: 1200px;
    width: 100%;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-bottom: 64px;

    width: 100%;

    text-align: center;
  `,

  Contents: styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;

    width: 100%;
  `,
};
