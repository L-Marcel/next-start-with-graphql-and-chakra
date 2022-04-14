import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import colorsConfig from "./colors.json";

const { colors, semanticTokens } = colorsConfig;

function getColorMode(color: string) {
  return (props: Dict<any> | StyleFunctionProps) => mode(
    semanticTokens.colors[color].default, 
    semanticTokens.colors[color]._dark
  )(props)
};

export const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  semanticTokens,
  colors,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: (props) => ({
      "*": {
        userSelect: "none",
        transition: "filter .2s linear !important",
        WebkitTapHighlightColor: "transparent"
      },
      "::-webkit-scrollbar": {
        w: 2,
        mr: -2
      },
      "::-webkit-scrollbar-track": {
        h: 5,
        background: getColorMode("background")(props)
      },
      "::-webkit-scrollbar-thumb": {
        background: getColorMode("primary.600")(props)
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: getColorMode("primary.800")(props)
      },
      html: {
        height: "-webkit-fill-available",
        overscrollBehaviorY: "contain"
      },
      body: {
        bg: getColorMode("background")(props),
        w: "100vw",
        h: "100vh",
        minHeight: "100vh",
        minH: "-webkit-fill-available",
        overscrollBehaviorY: "contain",
        overflowY: "hidden",
        overflowX: "hidden",
        isRandom: true
      },
      'div[role="progressbar"]': {
        bgColor: getColorMode("primary.700")(props),
      },
      "button:hover": {
        filter: "brightness(0.95)"
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": { 
        outline: "none",
        boxShadow: "none" 
      },
      ".primary-progressbar > div[role='progressbar']": {
        bg: getColorMode("primary.500")(props)
      },
      "*:focus": {
        boxShadow: "none !important"
      },
      "input:focus": {
        boxShadow: "none !important"
      },
      ".chakra-checkbox__control:not([data-checked])": {
        color: "var(--primary) !important",
        bgColor: "primary.100"
      }
    })
  }
});