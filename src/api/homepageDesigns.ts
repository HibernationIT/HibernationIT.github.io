import { useDelete, useGet, usePost, usePut } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/console/homepage/designs";

export interface HomepageDesignResponse {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  id: number;
  name: string;
  description: string;
  link: string;
  view: boolean;
  image: string;
  designs: string[];
}

export interface HomepageDesignRequest {
  name: string;
  description: string;
  link: string;
  view: boolean;
  image: string;
  designs: string[];
}

export const useReadHomepageDesigns = (params: { name?: string; description?: string }) => {
  return useGet<Pageable<HomepageDesignResponse>>({
    key: [String(params)],
    url: BaseUrl,
    config: {
      params,
    },
  });
};

export const useReadHomepageDesign = ({ id }: { id: number }) => {
  const url = `${BaseUrl}/${id}`;
  return useGet<HomepageDesignResponse>({
    key: [url],
    url: url,
    enabled: !Number.isNaN(id) && id !== undefined,
  });
};

export const useCreateHomepageDesign = () => {
  return usePost<HomepageDesignRequest, HomepageDesignResponse>({
    url: BaseUrl,
  });
};

export const useUpdateHomepageDesign = () => {
  return usePut<HomepageDesignRequest, HomepageDesignResponse>({
    url: BaseUrl,
  });
};

export const useDeleteHomepageDesign = () => {
  return useDelete<void>({
    url: BaseUrl,
  });
};
