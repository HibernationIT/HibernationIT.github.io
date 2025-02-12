import React from "react";

import { Route, Routes } from "react-router-dom";
import { RouteItem, routes } from "constant/route/routes";

import "assets/styles/init.scss";
import styled from "styled-components";
import NavigateBar from "components/template/NavigateBar";
import Breadcrumbs from "components/atom/Breadcrumbs";

export default function App() {
  const subRoute = (routes: RouteItem[], parentPath?: string): React.ReactElement[] =>
    routes.map((route, key) => (
      <React.Fragment key={key}>
        <Route
          key={(parentPath ?? "") + route.path}
          path={(parentPath ?? "") + route.path}
          element={
            route.component === undefined ? undefined : route.showBreadcrumbs ? (
              <MainWithBreadcrumbs>
                <route.component />
              </MainWithBreadcrumbs>
            ) : (
              <Main>
                <route.component />
              </Main>
            )
          }
        />
        {route.children && subRoute(route.children, (parentPath ?? "") + route.path)}
      </React.Fragment>
    ));

  return <Routes>{subRoute(routes)}</Routes>;
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <s.Layout>
      <NavigateBar />
      {children}
    </s.Layout>
  );
}

function MainWithBreadcrumbs({ children }: { children: React.ReactNode }) {
  return (
    <s.Layout>
      <NavigateBar />
      <Breadcrumbs />
      {children}
    </s.Layout>
  );
}

const s = {
  Layout: styled.section`
    padding-top: 84px;

    width: 100%;
    height: 100%;
    min-height: 100vh;

    box-sizing: border-box;
  `,
};
