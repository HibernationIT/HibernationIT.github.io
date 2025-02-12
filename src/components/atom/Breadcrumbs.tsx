import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "assets/icon/home-fill.svg";

export default function Breadcrumbs() {
  const location = useLocation();

  return (
    <s.Breadcrumbs>
      <Link to="/">
        <HomeIcon />
      </Link>
      {location.pathname
        .split("/")
        .slice(1)
        .map((path, key) => (
          <React.Fragment key={key}>
            <span>/</span>
            <span key={key}>{path}</span>
          </React.Fragment>
        ))}
    </s.Breadcrumbs>
  );
}

const s = {
  Breadcrumbs: styled.div`
    display: flex;
    gap: 4px;

    padding: 20px;

    span {
      display: block;

      color: var(--light-text);
      line-height: 20px;
      font-size: 14px;
      font-weight: 300;
    }

    svg {
      padding: 4px;

      width: 14px;
      height: 14px;

      fill: var(--primary);
    }
  `,
};
