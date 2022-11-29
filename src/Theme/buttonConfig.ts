import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const buttonTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: 'brandPrimary'
  },

  variants: { 
    solid: defineStyle({
      color: 'rgb(245,245,245)',
    }) 
  },
})
