import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import api from "lib/axios";
import { AxiosRequestConfig } from "axios";

const queryClient = new QueryClient({});

export default queryClient;

interface GetProps {
  key: string[];
  url: string;
  config?: AxiosRequestConfig;
  enabled?: boolean;
}

interface PostProps<T> {
  url: string;
  config?: AxiosRequestConfig;
}

interface PutProps<T> {
  url: string;
  config?: AxiosRequestConfig;
}

interface DeleteProps<T> {
  url: string;
  config?: AxiosRequestConfig;
}

export const useGet = <T>({ key, url, enabled = true, config }: GetProps) => {
  return useQuery({
    queryKey: [...key, url],
    queryFn: (): Promise<T> =>
      api
        .get(url, {
          ...config,
        })
        .then((res) => res.data),
    enabled,
  });
};

export const usePost = <T, R>({ url, config }: PostProps<T>) => {
  const { mutateAsync } = useMutation({
    mutationFn: ({ path, data }: { path?: string; data?: T }): Promise<R> =>
      api
        .post(url + (path ?? ""), data, {
          ...config,
        })
        .then((res) => res.data),
  });

  return mutateAsync;
};

export const usePut = <T, R>({ url, config }: PutProps<T>) => {
  const { mutateAsync } = useMutation({
    mutationFn: ({ path, data }: { path?: string; data?: T }): Promise<R> =>
      api
        .put(url + (path ?? ""), data, {
          ...config,
        })
        .then((res) => res.data),
  });

  return mutateAsync;
};

export const useDelete = <T>({ url, config }: DeleteProps<T>) => {
  const { mutateAsync } = useMutation({
    mutationFn: ({ path, data }: { path?: string; data?: T }): Promise<void> =>
      api
        .delete(url + (path ?? ""), {
          ...config,
          data,
        })
        .then((res) => res.data),
  });

  return mutateAsync;
};
