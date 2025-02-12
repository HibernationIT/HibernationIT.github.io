import { useTheme } from "components/provider/ThemeProvider";
import Chip from "components/atom/Chip";
import { Link } from "react-router-dom";
import React, { RefObject } from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "assets/image/logo.svg";
import { ReactComponent as Blog } from "assets/image/blog_illust.svg";
import { ReactComponent as Project } from "assets/image/project_illust.svg";
import { ReactComponent as Design } from "assets/image/design_illust.svg";
import { ReactComponent as Icon } from "assets/image/icon_illust.svg";
import { ReactComponent as KeyboardArrowDown } from "assets/icon/keyboard_arrow_down.svg";

interface IProps {
  scrollRef: RefObject<HTMLDivElement>;
  onClickScroll: () => void;
}

export default function FirstSection({ scrollRef, onClickScroll }: IProps) {
  const { theme } = useTheme();

  return (
    <s.Layout $bg_src={`/image/main_illust_${theme}.svg`} ref={scrollRef}>
      <s.TitleBox>
        <div>
          <h1>
            <Logo />
            <p>Hibernation IT</p>
          </h1>
          <h3>내가 만들고 싶은거 만드는 개발 블로그</h3>
          <div>
            <Chip size="large" color="#FFFFFF">
              <a href="mailto:hbnation.it@gmail.com">hbnation.it@gmail.com</a>
            </Chip>
            <Chip size="large" color="#FFFFFF">
              <a href="https://github.com/HibernationIT" rel="noreferrer" target="_blank">
                Github
              </a>
            </Chip>
          </div>
        </div>
      </s.TitleBox>
      <s.NavBox>
        <div>
          <Link to="/">
            <Project />
            <p>PROJECT</p>
          </Link>
          <Link to="/">
            <Blog />
            <p>BLOG</p>
          </Link>
          <Link to="/">
            <Design />
            <p>DESIGN</p>
          </Link>
          <Link to="/">
            <Icon />
            <p>ICON</p>
          </Link>
        </div>
        <button onClick={onClickScroll}>
          <KeyboardArrowDown />
        </button>
      </s.NavBox>
    </s.Layout>
  );
}

const s = {
  Layout: styled.div<{ $bg_src: string }>`
    display: flex;
    flex-direction: column;

    height: calc(100vh - 84px);

    background-image: url("${({ $bg_src }) => $bg_src}");
    background-size: cover;
    background-position: 50% 50%;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 24px;
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    background: var(--background-blur);

    & > div {
      max-width: 1200px;
      width: 100%;

      & > h1 {
        display: flex;
        align-items: center;
        gap: 16px;

        svg {
          fill: #ffffff;

          width: 64px;
          height: 64px;
        }

        p {
          font-size: 48px;
          font-weight: 700;
          line-height: 48px;
          color: #ffffff;
        }
      }

      & > h3 {
        margin-top: 36px;

        font-size: 24px;
        color: #ffffff;
      }

      & > div {
        margin-top: 64px;

        display: flex;
        gap: 16px;

        a {
          text-decoration: none;
          color: #ffffff;
        }

        & > div:not(:hover) {
          background: none;
        }

        & > div:hover {
          cursor: pointer;
        }
      }
    }
  `,

  NavBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding: 20px;
    box-sizing: border-box;

    width: 100%;
    height: 250px;

    background: var(--background-blur-50);

    & > button {
      display: block;

      padding: 0;
      margin: 0;

      width: 48px;
      height: 48px;

      border: none;
      background: none;

      svg {
        width: 100%;
        height: 100%;

        stroke: #ffffff;
        stroke-width: 3px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    & > div {
      display: flex;
      justify-content: space-around;

      width: 1200px;

      & > a {
        display: block;
        text-decoration: none;

        svg {
          fill: #dfdfdf;
        }

        p {
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          color: #dfdfdf;
        }

        &:hover {
          svg {
            fill: #ffffff;
          }

          p {
            color: #ffffff;
          }
        }
      }
    }
  `,
};
