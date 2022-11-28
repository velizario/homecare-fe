import { PropsWithChildren } from "../../../utils/AppTypes";
import { Text } from "@chakra-ui/react";


const OrderHeading:React.FC<PropsWithChildren> = ({children}) => {



    return (
        
    <Text fontSize='sm' textTransform='uppercase' mb='4' fontWeight='normal'  alignSelf='flex-start'>{children}</Text>
  )
}


export default OrderHeading;