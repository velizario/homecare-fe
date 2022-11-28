import { extendTheme, theme as base } from "@chakra-ui/react";
import { inputTheme } from "./InputConfig";
import { numberInputTheme } from "./InputNumberConfig";
import * as themeColors from "./themeColors";





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
      Container: {
        baseStyle: {
          maxW: '8xl',
          px:'20',
          py: '6'
        }
      },

      Button: {
        defaultProps: {
          colorScheme: 'brandPrimary'
        }
      },

      Tooltip: {
        baseStyle: {
          color: 'gray.600',
          boxShadow: '0px 4px 6px rgba(100,100,100,0.3)'
        }
      },
      
      // multipart components are handled specifically
      Input: inputTheme,

      NumberInput: numberInputTheme,
    }


        // add custom color palette
    // colors: {
    //     brand: {
    //         100: "#f7fafc",
    //         // ...
    //         900: "#1a202c",
    //     },
    // },
});

export default theme;


// const styles = {
//     global: (props: Record<string, any>) => ({
//       body: {
//         fontFamily: 'body',
//         color: mode('gray.800', 'whiteAlpha.900')(props),
//         bg: mode('white', 'gray.800')(props),
//         lineHeight: 'base',
//       },
//       '*::placeholder': {
//         color: mode('red.400', 'red.400')(props),
//         fontWeight: 'light',
//         fontSize: '2xs'
//       },
//       '*, *::before, &::after': {
//         borderColor: mode('gray.200', 'whiteAlpha.300')(props),
//         borderStyle: mode('white', 'white')(props),
//         wordWrap: 'break-word',
//       },
//     }),
//   }
