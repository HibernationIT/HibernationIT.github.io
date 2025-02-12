import { useDelete, useGet, usePost, usePut } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/console/homepage/tags";

export interface HomepageTagResponse {
  name: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export interface HomepageTagRequest {
  name: string;
}

export const useReadHomepageTags = () => {
  return useGet<Pageable<HomepageTagResponse>>({
    key: [],
    url: BaseUrl,
  });
};

export const useCreateHomepageTag = () => {
  return usePost<HomepageTagRequest, HomepageTagResponse>({
    url: BaseUrl,
  });
};

export const useDeleteHomepageTag = () => {
  return useDelete<HomepageTagRequest>({
    url: BaseUrl,
  });
};
