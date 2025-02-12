import { useRef } from "react";

export const useScrollToElement = (option: ScrollIntoViewOptions) => {
  const element = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    element.current?.scrollIntoView(option);
  };

  return { element, onScroll };
};
