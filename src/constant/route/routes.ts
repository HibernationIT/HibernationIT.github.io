import React from "react";
import Home from "components/page/Home/Home";

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
];
