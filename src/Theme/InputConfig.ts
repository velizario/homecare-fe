import { inputAnatomy} from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'


// Start defining Input multipart component style , which is then injected in the theme
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const inputBaseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    border: '1px solid',
    borderColor: 'lightgray',
    boxShadow: 'none',
    // boxShadow: 'rgba(200,200,200,0.3) 0px 4px 10px',
    height: '14',
    _focusVisible: {
      // border: '2px solid #26a0f7',
      borderColor: '#26a0f7',
      // boxShadow: 'rgba(200,200,200,0.3) 0px 4px 10px'
    },
    _hover: {
      borderColor: '#26a0f7',
    }
  },
})

export const inputTheme = defineMultiStyleConfig({ variants: { outline : inputBaseStyle } })
// End defining Input multipart component style

