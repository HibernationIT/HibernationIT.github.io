import { useGet } from "lib/reactQuery";
import { Pageable } from "lib/axios";
import { HomepageStackResponse } from "api/homepageStacks";

const BaseUrl = "/v1/homepage/projects";

export interface HomepageProjectResponse {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  id: number;
  name: string;
  link: string;
  description: string;
  stacks: HomepageStackResponse[];
  view: boolean;
  image: string;
  content: string;
}

export const useReadHomepageProjects = (params: { name?: string; tags?: string; description?: string }) => {
  return useGet<Pageable<HomepageProjectResponse>>({
    key: [String(params)],
    url: BaseUrl,
    config: {
      params,
    },
  });
};

export const useReadHomepageProject = ({ name }: { name?: string }) => {
  const url = `${BaseUrl}/${name}`;
  return useGet<HomepageProjectResponse>({
    key: [url],
    url: url,
    enabled: name !== undefined && name !== "",
  });
};
