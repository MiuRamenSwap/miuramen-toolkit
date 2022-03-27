import { darkColors, lightColors } from "../../theme/colors";
import { MiuRamenToggleTheme } from "./types";

export const light: MiuRamenToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: MiuRamenToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
