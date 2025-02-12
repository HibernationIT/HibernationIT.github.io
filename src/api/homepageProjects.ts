import { useDelete, useGet, usePost, usePut } from "lib/reactQuery";
import { Pageable } from "lib/axios";
import { HomepageStackResponse } from "api/homepageStacks";

const BaseUrl = "/v1/console/homepage/projects";

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

export interface HomepageProjectRequest {
  name: string;
  link: string;
  description: string;
  stacks: string[];
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

export const useReadHomepageProject = ({ id }: { id: number }) => {
  const url = `${BaseUrl}/${id}`;
  return useGet<HomepageProjectResponse>({
    key: [url],
    url: url,
    enabled: !Number.isNaN(id) && id !== undefined,
  });
};

export const useCreateHomepageProject = () => {
  return usePost<HomepageProjectRequest, HomepageProjectResponse>({
    url: BaseUrl,
  });
};

export const useUpdateHomepageProject = () => {
  return usePut<HomepageProjectRequest, HomepageProjectResponse>({
    url: BaseUrl,
  });
};

export const useDeleteHomepageProject = () => {
  return useDelete<void>({
    url: BaseUrl,
  });
};
