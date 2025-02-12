import { useDelete, useGet, usePost } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/homepage/icons";

export interface HomepageIconResponse {
  name: string;
  svg: string;
  view: boolean;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export const useReadHomepageIcons = () => {
  return useGet<Pageable<HomepageIconResponse>>({
    key: [],
    url: BaseUrl,
  });
};
