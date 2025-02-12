import React, { useEffect, useState } from "react";

import styled from "styled-components";

import FirstSection from "components/page/Home/FirstSection";
import SecondSection from "components/page/Home/SecondSection";
import Footer from "components/page/Home/Footer";
import { useScrollToElement } from "lib/scroll";

export default function Home() {
  let scrolling = false;

  const [step, setStep] = useState(0);

  const { element: first, onScroll: onFirst } = useScrollToElement({ behavior: "smooth", block: "end" });
  const { element: second, onScroll: onSecond } = useScrollToElement({ behavior: "smooth", block: "start" });
  const { element: footer, onScroll: onFooter } = useScrollToElement({ behavior: "smooth", block: "start" });

  useEffect(() => {
    const onWheelMove = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (scrolling) return;

      scrolling = true;
      setTimeout(() => {
        scrolling = false;
      }, 500);

      if (e.deltaY > 0) {
        setStep((state) => (state < 2 ? state + 1 : state));
      } else if (e.deltaY < 0) {
        setStep((state) => (state > 0 ? state - 1 : state));
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      setStep(-1);
    };
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("wheel", onWheelMove, { passive: false });

    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("wheel", onWheelMove);
    };
  }, [setStep]);

  useEffect(() => {
    switch (step) {
      case 0:
        onFirst();
        break;
      case 1:
        onSecond();
        break;
      case 2:
        onFooter();
        break;
    }
  }, [step]);

  return (
    <s.Layout>
      <FirstSection scrollRef={first} onClickScroll={() => setStep(1)} />
      <SecondSection scrollRef={second} />
      <Footer scrollRef={footer} />
    </s.Layout>
  );
}

const s = {
  Layout: styled.main``,
};
