import React from "react";
import styled from "styled-components";
import { HomepageProjectResponse } from "api/homepageProjects";
import Button from "components/atom/Button";

import { ReactComponent as LinkIcon } from "assets/icon/link-2.svg";
import { ReactComponent as ArrowRightIcon } from "assets/icon/arrow_right.svg";
import { useNavigate } from "react-router-dom";

export default function ContentsCard({ data }: { data: HomepageProjectResponse }) {
  const navigate = useNavigate();

  return (
    <s.Card>
      <img src={data.image} alt={data.name} />
      <s.Content>
        <h1>{data.name}</h1>
        <a href={data.link}>
          {data.link}
          <LinkIcon />
        </a>
        <p>{data.description}</p>

        <s.Stacks>
          {data.stacks.map((stack, key) => (
            <s.Stack key={key} $name={stack.name}>
              <img src={stack.image} alt={stack.name} />
            </s.Stack>
          ))}
        </s.Stacks>

        <s.LinkButton>
          <Button onClick={() => navigate(`/project/${data.name}`)}>
            See more
            <ArrowRightIcon />
          </Button>
        </s.LinkButton>
      </s.Content>
    </s.Card>
  );
}

const s = {
  Card: styled.div`
    display: flex;
    gap: 56px;

    img {
      width: 560px;
      height: 350px;
      object-fit: cover;

      border-radius: 8px;
    }

    @media (width < 524px) {
      flex-direction: column;
      gap: 20px;

      img {
        width: 100%;
        height: 200px;
      }
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    width: 100%;

    h1 {
      font-size: 28px;
      font-weight: 500;
      line-height: 32px;
    }

    a {
      display: flex;
      gap: 6px;

      line-height: 20px;
      text-decoration: none;
      color: var(--primary);

      svg {
        display: block;

        width: 20px;
        height: 20px;

        stroke: var(--primary);
        stroke-width: 2px;
      }
    }

    p {
      color: var(--light-text);
    }
  `,

  Stacks: styled.div`
    display: flex;
    gap: 16px;
  `,

  Stack: styled.div<{ $name: string }>`
    position: relative;

    width: 32px;
    height: 32px;

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

  LinkButton: styled.div`
    & > button {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        transition: stroke 200ms;

        stroke: var(--white-900);
        stroke-width: 3px;

        width: 20px;
        height: 20px;
      }

      &:hover {
        svg {
          stroke: var(--white-500);
        }
      }
    }
  `,
};
