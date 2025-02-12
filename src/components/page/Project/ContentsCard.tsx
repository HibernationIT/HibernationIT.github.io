import React from "react";
import styled from "styled-components";
import { HomepageProjectResponse } from "api/homepageProjects";

export default function ContentsCard({ data }: { data: HomepageProjectResponse }) {
  return (
    <s.Card>
      <img src={data.image} alt={data.name} />
    </s.Card>
  );
}

const s = {
  Card: styled.div`
    display: flex;
  `,
};
