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
            },
        },
    },
  

    components: {
      Container: {
        baseStyle: {
          maxW: '8xl',
          px:'20',
          py: '6'
        }
      }
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
