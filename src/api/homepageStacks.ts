import { useDelete, useGet, usePost, usePut } from "lib/reactQuery";
import { Pageable } from "lib/axios";

const BaseUrl = "/v1/homepage/stacks";

export interface HomepageStackResponse {
  name: string;
  image: string;
  stackType: "Front" | "Back";
  proficiency: number;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export const useReadHomepageStacks = ({ type }: { type: "Front" | "Back" | "All" }) => {
  return useGet<Pageable<HomepageStackResponse>>({
    key: [type],
    url: BaseUrl,
    config: {
      params: {
        type: type === "All" ? undefined : type,
      },
    },
  });
};
