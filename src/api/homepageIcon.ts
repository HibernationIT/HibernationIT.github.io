import { useDelete, useGet, usePost } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/console/homepage/icons";

export interface HomepageIconResponse {
  name: string;
  svg: string;
  view: boolean;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export interface HomepageIconRequest {
  name: string;
  svg: string;
  view: boolean;
}

export const useReadHomepageIcons = () => {
  return useGet<Pageable<HomepageIconResponse>>({
    key: [],
    url: BaseUrl,
  });
};

export const useCreateHomepageIcon = () => {
  return usePost<HomepageIconRequest, HomepageIconResponse>({
    url: BaseUrl,
  });
};

export const useDeleteHomepageIcon = () => {
  return useDelete<HomepageIconRequest>({
    url: BaseUrl,
  });
};
