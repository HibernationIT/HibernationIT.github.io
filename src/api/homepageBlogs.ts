import { useDelete, useGet, usePost, usePut } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/console/homepage/blogs";

export interface HomepageBlogResponse {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  id: number;
  name: string;
  description: string;
  tags: string[];
  view: boolean;
  image: string;
  content: string;
}

export interface HomepageBlogRequest {
  name: string;
  description: string;
  tags: string[];
  view: boolean;
  image: string;
  content: string;
}

export const useReadHomepageBlogs = (params: { name?: string; tags?: string; description?: string }) => {
  return useGet<Pageable<HomepageBlogResponse>>({
    key: [String(params)],
    url: BaseUrl,
    config: {
      params,
    },
  });
};

export const useReadHomepageBlog = ({ id }: { id: number }) => {
  const url = `${BaseUrl}/${id}`;
  return useGet<HomepageBlogResponse>({
    key: [url],
    url: url,
    enabled: !Number.isNaN(id) && id !== undefined,
  });
};

export const useCreateHomepageBlog = () => {
  return usePost<HomepageBlogRequest, HomepageBlogResponse>({
    url: BaseUrl,
  });
};

export const useUpdateHomepageBlog = () => {
  return usePut<HomepageBlogRequest, HomepageBlogResponse>({
    url: BaseUrl,
  });
};

export const useDeleteHomepageBlog = () => {
  return useDelete<void>({
    url: BaseUrl,
  });
};
