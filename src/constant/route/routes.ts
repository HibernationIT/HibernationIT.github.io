import React from "react";
import Home from "components/page/Home/Home";
import Project from "components/page/Project/Project";
import ProjectDetail from "components/page/Project/ProjectDetail";

export interface RouteItem {
  path: string;
  name?: string;
  icon?: React.ComponentType<any>;
  component?: React.ComponentType<any>;
  show: boolean;
  children?: RouteItem[];
  showBreadcrumbs?: boolean;
}

export const routes: RouteItem[] = [
  {
    path: "/",
    name: "HOME",
    component: Home,
    show: true,
  },
  {
    path: "/project",
    name: "PROJECT",
    component: Project,
    show: true,
    children: [
      {
        path: "/:name",
        component: ProjectDetail,
        show: false,
      },
    ],
  },
];
