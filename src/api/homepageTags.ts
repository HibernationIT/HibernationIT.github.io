import { useDelete, useGet, usePost, usePut } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/homepage/tags";

export interface HomepageTagResponse {
  name: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export const useReadHomepageTags = () => {
  return useGet<Pageable<HomepageTagResponse>>({
    key: [],
    url: BaseUrl,
  });
};
