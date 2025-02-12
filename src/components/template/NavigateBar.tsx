import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "constant/route/routes";
import Button from "components/atom/Button";

import ThemeButton from "components/atom/ThemeButton";
import { ReactComponent as Logo } from "assets/image/logo.svg";
import { ReactComponent as Hamburger } from "assets/icon/hamburger.svg";

export default function NavigateBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <s.Nav>
      <s.NavBox>
        <Link to="/">
          <Logo />
        </Link>
        <s.NavButtons>
          {routes
            .filter((route) => route.show)
            .map((route, key) => (
              <Button
                key={key}
                color={route.path === location.pathname ? undefined : "var(--dark-text)"}
                style={route.path === location.pathname ? { fontWeight: 700 } : undefined}
                hoverColor="var(--bg-300)"
                activeColor="var(--bg-200)"
                mode="text"
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </Button>
            ))}
          <ThemeButton />
        </s.NavButtons>
        <s.NavMenu>
          <Button
            hoverColor="var(--bg-300)"
            activeColor="var(--bg-200)"
            mode="text"
            onClick={() => setOpen((state) => !state)}
          >
            <Hamburger />
          </Button>
          <s.NavMenuBox $size={routes.filter((route) => route.show).length} $open={open}>
            <div>
              {routes
                .filter((route) => route.show)
                .map((route, key) => (
                  <Button
                    key={key}
                    color={route.path === location.pathname ? undefined : "var(--dark-text)"}
                    style={route.path === location.pathname ? { fontWeight: 700 } : undefined}
                    hoverColor="var(--bg-300)"
                    activeColor="var(--bg-200)"
                    mode="text"
                    onClick={() => {
                      setOpen(false);
                      navigate(route.path);
                    }}
                  >
                    {route.name}
                  </Button>
                ))}

              <ThemeButton />
            </div>
          </s.NavMenuBox>
        </s.NavMenu>
      </s.NavBox>
    </s.Nav>
  );
}

const s = {
  Nav: styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 84px;

    padding: 20px 20px;
    box-sizing: border-box;

    background-color: var(--bg-900);
  `,

  NavBox: styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 1920px;
    width: 100%;

    & > a > svg {
      display: block;

      padding: 4px;

      width: 36px;
      height: 36px;

      fill: var(--text);
    }
  `,

  NavButtons: styled.div`
    display: flex;
    gap: 16px;

    button {
      font-size: 16px;

      svg {
        stroke: var(--text);
      }
    }

    @media (width < 712px) {
      display: none;
    }
  `,

  NavMenu: styled.div`
    svg {
      width: 28px;
      height: 28px;
      stroke: var(--text);
      stroke-width: 3px;
    }

    @media (712px <= width) {
      display: none;
    }
  `,

  NavMenuBox: styled.div<{ $size: number; $open: boolean }>`
    position: absolute;
    top: 84px;
    left: 0;

    transition: height 500ms;

    width: 100%;
    height: ${({ $size, $open }) => ($open ? $size * 36 + $size * 16 + 86 : 0)}px;

    overflow: hidden;
    background: var(--bg-900);

    & > div {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 16px;

      padding: 20px;
      box-sizing: border-box;

      width: 100%;
      height: ${({ $size }) => $size * 36 + $size * 16 + 86}px;

      & > button {
        width: 100%;
      }
    }
  `,

  ThemeButton: styled(Button)`
    padding: 0;
  `,
};
