import { Text,TextProps } from "@chakra-ui/react";

const OrderHeading:React.FC<TextProps> = ({children, ...props}) => {
    return (
    <Text {...props} fontSize='sm' textTransform='uppercase' mb='4' fontWeight='normal'  alignSelf='flex-start'>{children}</Text>
  )
}


export default OrderHeading;