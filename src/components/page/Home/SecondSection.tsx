import React, { RefObject, useState } from "react";

import styled from "styled-components";
import Title from "components/atom/Title";
import { HomepageStackResponse, useReadHomepageStacks } from "api/homepageStacks";

import { ReactComponent as MonitorIcon } from "assets/icon/monitor-line.svg";
import Chip from "components/atom/Chip";

interface IProps {
  scrollRef: RefObject<HTMLDivElement>;
}

export default function SecondSection({ scrollRef }: IProps) {
  // STATE
  const [activeStack, setActiveStack] = useState<HomepageStackResponse>();

  // API
  const { data: frontStacks } = useReadHomepageStacks({ type: "Front" });
  const { data: backStacks } = useReadHomepageStacks({ type: "Back" });

  return (
    <s.Layout ref={scrollRef}>
      <s.Contents>
        <Title mode="header1">What I can do</Title>
        <Title mode="header4">지금까지 실무에서 사용했거나 취미로 사용해본 프레임워크 또는 언어입니다.</Title>
      </s.Contents>
      <s.Contents>
        <s.TitleBox>
          <MonitorIcon />
          <Title mode="header2">Front</Title>
        </s.TitleBox>

        <s.StackCardBox>
          {frontStacks?.content.map((stack, key) => (
            <StackCard
              key={key}
              data={stack}
              active={stack.name === activeStack?.name}
              onClick={() => setActiveStack((state) => (state?.name === stack.name ? undefined : stack))}
            />
          ))}
        </s.StackCardBox>
      </s.Contents>
      <s.Contents>
        <s.TitleBox>
          <MonitorIcon />
          <Title mode="header2">Back</Title>
        </s.TitleBox>

        <s.StackCardBox>
          {backStacks?.content.map((stack, key) => (
            <StackCard
              key={key}
              data={stack}
              active={stack.name === activeStack?.name}
              onClick={() => setActiveStack((state) => (state?.name === stack.name ? undefined : stack))}
            />
          ))}
        </s.StackCardBox>
      </s.Contents>
    </s.Layout>
  );
}

function StackCard({ data, active, onClick }: { data: HomepageStackResponse; active?: boolean; onClick: () => void }) {
  return (
    <s.StackBaseCard onClick={onClick}>
      <s.StackCard $active={active} $value={active ? data.proficiency : 0}>
        <img src={data.image} alt={data.name} />
        <p>{data.name}</p>
        <svg>
          <circle cx="42" cy="42" r="40" />
        </svg>
        <span>
          <Chip size="small">{data.proficiency} %</Chip>
        </span>
      </s.StackCard>
    </s.StackBaseCard>
  );
}

const s = {
  Layout: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 46px;

    background: linear-gradient(var(--bg-900), var(--bg-800));

    padding: 24px;
    box-sizing: border-box;

    width: 100%;
    height: calc(100vh - 84px);
  `,

  Contents: styled.div`
    max-width: 1200px;
    width: 100%;
  `,

  TitleBox: styled.div`
    display: flex;
    gap: 8px;

    max-width: 1200px;
    width: 100%;

    svg {
      stroke: var(--text);
      stroke-width: 3px;
    }
  `,

  StackCardBox: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 96px);
    justify-content: space-between;
    gap: 20px;

    perspective: 512px;

    margin-top: 32px;
  `,

  StackBaseCard: styled.div`
    width: 96px;
    height: 96px;

    &:hover {
      cursor: pointer;
    }
  `,

  StackCard: styled.div<{ $active?: boolean; $value: number }>`
    position: relative;

    transform: ${({ $active }) => ($active ? "scale(1.2)" : "")};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    width: 96px;
    height: 96px;

    transition: transform 500ms;

    border-radius: 6px;
    background: var(--bg-800);

    img {
      width: 36px;
      height: 36px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
    }

    span {
      position: absolute;
      top: -10px;

      transition: opacity 500ms;
      opacity: ${({ $active }) => ($active ? 1 : 0)};

      font-size: 12px;
    }

    svg {
      position: absolute;
      left: 50%;
      top: 50%;

      transform: translate(-50%, -50%) rotate(-90deg);

      width: 84px;
      height: 84px;

      transition: stroke-dasharray 500ms;

      fill: transparent;
      stroke: var(--primary);
      stroke-width: 4px;
      stroke-dasharray: ${({ $value }) => 251 * ($value / 100)}px 251px;
    }
  `,
};
