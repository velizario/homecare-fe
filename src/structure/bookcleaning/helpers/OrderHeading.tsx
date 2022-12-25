import { Text,TextProps } from "@chakra-ui/react";

const OrderHeading:React.FC<TextProps> = ({children, ...props}) => {
    return (
    <Text fontSize='sm' textTransform='uppercase' mb='4' fontWeight='normal'  {...props} >{children}</Text>
  )
}


export default OrderHeading;