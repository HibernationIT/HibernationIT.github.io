import React, { useContext } from "react";
import Button from "components/atom/Button";
import { themeContext } from "components/provider/ThemeProvider";

import { ReactComponent as SunIcon } from "assets/icon/sun-line.svg";
import { ReactComponent as MoonIcon } from "assets/icon/moon-line.svg";
import styled from "styled-components";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <s.ThemeButton>
      <Button mode="text" size="small" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </s.ThemeButton>
  );
}

const s = {
  ThemeButton: styled.div`
    svg {
      width: 28px;
      height: 28px;
      stroke: var(--text);
    }
  `,
};
