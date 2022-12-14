import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonConfig";
import { containerTheme } from "./containerConfig";
import { inputTheme } from "./InputConfig";
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
          fontSize: 'md'
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
    }
});

export default theme;
