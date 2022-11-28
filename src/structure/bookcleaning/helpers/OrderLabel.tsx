import { PropsWithChildren } from "../../../utils/AppTypes";
import { Text } from "@chakra-ui/react";


const OrderLabel:React.FC<PropsWithChildren> = ({children}) => {
    return (
      <Text color='gray.600' mb='1' pl='1' fontSize='sm' fontWeight='normal'>{children}</Text>
  )
}


export default OrderLabel;