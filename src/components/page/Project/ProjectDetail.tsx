import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "components/atom/Title";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useReadHomepageProject } from "api/homepageProjects";
import { useCreateBlockNote } from "@blocknote/react";
import { locales } from "@blocknote/core";
import Textarea from "components/atom/Textarea";

export default function ProjectDetail() {
  // PARAMS
  const { name } = useParams();

  // NAVIGATE
  const navigate = useNavigate();

  // STATE
  const [renderData, setRenderData] = useState<string>("");

  // API
  const { data } = useReadHomepageProject({ name });

  // EFFECT
  useEffect(() => {
    if (!name || name === "") {
      navigate("/project");
      return;
    }
  }, [name]);

  if (!data) return;

  return (
    <s.Layout>
      <img src={data.image} alt={data.name} />
      <Title mode="header3">{data.createdAt.substring(0, 10)}</Title>
      <s.TitleBox>
        <Title mode="header1">{data.name}</Title>
        <s.StackBox>
          {data.stacks.map((stack, key) => (
            <s.Stack key={key} $name={stack.name}>
              <img src={stack.image} alt={stack.name} />
            </s.Stack>
          ))}
        </s.StackBox>
      </s.TitleBox>
      <s.Content>
        <Textarea initialContent={JSON.parse(data.content)} editable={false} />
      </s.Content>
    </s.Layout>
  );
}

const s = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: 0 auto;
    padding: 0 32px;
    box-sizing: border-box;

    max-width: 1200px;
    width: 100%;

    & > img:first-child {
      width: 100%;
      height: 164px;

      object-fit: cover;

      border-radius: 12px;

      @media (width < 524px) {
        border-radius: 6px;
      }
    }
  `,

  TitleBox: styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 64px;

    width: 100%;

    @media (width < 524px) {
      flex-direction: column;
      gap: 24px;
    }
  `,

  StackBox: styled.div`
    display: flex;
    gap: 16px;
    align-items: end;
  `,

  Stack: styled.div<{ $name: string }>`
    position: relative;

    width: 24px;
    height: 24px;

    transition: transform 200ms;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.2);

      &::before {
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translate(-50%, 0) rotate(45deg);

        display: block;
        content: "";
        clear: both;

        width: 6px;
        height: 6px;
        background: var(--black-500);
      }

      &::after {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, 0);

        display: block;
        content: "${({ $name }) => $name}";
        clear: both;

        padding: 6px 8px;

        color: var(--white-800);
        font-size: 12px;
        line-height: 14px;
        border-radius: 6px;
        background: var(--black-500);
        white-space: nowrap;
      }
    }
  `,

  Content: styled.div`
    & > div > div > div {
      padding: 0;
    }
  `,
};
