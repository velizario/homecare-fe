import { defineStyle, defineStyleConfig, extendTheme, theme as base } from "@chakra-ui/react";
import { buttonTheme } from "./buttonConfig";
import { containerTheme } from "./containerConfig";
import { inputTheme } from "./InputConfig";
import { numberInputTheme } from "./InputNumberConfig";
import * as themeColors from "./themeColors";
import { tooltipTheme } from "./tooltipConfig";

const theme = extendTheme({
    styles: {
      global: {
        '*, *::before, &::after': {
            borderStyle: 'none',
            borderColor: "chakra-border-color", //default
            wordWrap: "break-word",  //default
        },
        body: {
          fontFamily: "body", //default
          color: "chakra-body-text", //default
          bg: "chakra-body-bg", //default
          transitionProperty: "background-color", //default
          transitionDuration: "normal", //default
          lineHeight: "base", //default
        },
        "*::placeholder": {
          color: "gray.400", //default
          fontWeight: 'normal',
          fontSize: 'sm'
        },
      },
    },
    colors: {
      brandPrimary: themeColors.brandPrimary,
      brandSecondary: themeColors.brandSecondary
    },
    components: {
      Container: containerTheme,
      Button: buttonTheme,
      Tooltip: tooltipTheme,
      Input: inputTheme,
      NumberInput: numberInputTheme,
    }
});

export default theme;
