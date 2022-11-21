import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
  
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
              color: "chakra-placeholder-color", //default
            }
        },
    },

    colors: {
      brandPrimary: {
        100: "#c4e5fd",
        200: "#97d2fb",
        300: "#75c3fa",
        400: "#4eb1f9",
        500: "#26a0f7",
        600: "#098dec",
        700: "#0776c5",
        800: "#065e9d",
        900: "#044776",
      },

      brandSecondary: {
        100: "#eccbd9",
        200: "#e3b5c8",
        300: "#d897b2",
        400: "#cd799c",
        500: "#c25b86",
        600: "#b34271",
        700: "#95375e",
        800: "#772c4b",
        900: "#592139",
      }
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


const styles = {
    global: (props: Record<string, any>) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        borderStyle: mode('white', 'white')(props),
        wordWrap: 'break-word',
      },
    }),
  }
