import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "constant/route/routes";
import Button from "components/atom/Button";

import { ReactComponent as Logo } from "assets/image/logo.svg";
import ThemeButton from "components/atom/ThemeButton";

export default function NavigateBar() {
  const location = useLocation();
  const navigate = useNavigate();

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
  `,

  ThemeButton: styled(Button)`
    padding: 0;
  `,
};
