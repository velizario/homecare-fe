import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const buttonTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: 'brandPrimary'
  },

  sizes: {

  },

  variants: { 
    solid: defineStyle({
      color: 'rgb(245,245,245)',
    }),

    panelButton: defineStyle({
      color: "gray.500",
      fontWeight: "medium",
      transition: "0.05s ease-in-out all",
      fontSize: 'medium',
      height: "10",
      justifyContent: "flex-start",
      borderRadius: "lg",
      // height: 2,
      width: "100%",
      my: 2,
      lineHeight: "unset",
      _hover: {
        color: "black",
      },
      _active: {
        background: "rgba(247,247,247,1)",
        color: "brandPrimary.600",
        fontWeight: "semibold"
      }
    })
  },
})
