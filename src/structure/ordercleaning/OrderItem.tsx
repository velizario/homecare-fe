import { Box, BoxProps } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface OrderItemProps extends BoxProps {
    active: boolean;
}

const OrderItem:React.FC<OrderItemProps> = ({ children, active, ...props } ) => {
    return (
        <Box 
            tabIndex={0} 
            w='full' 
            h='20' 
            mb='3' 
            p='5' 
            bg={`${active ? 'rgba(38,160,247,0.07)' : 'unset'}`} 
            border={`1px solid ${active ? '#26a0f7' : 'lightgray'}`} 
            borderRadius='lg' 
            display='flex' 
            alignItems='center' 
            justifyContent='space-between' 
            letterSpacing={0.2} 
            cursor='pointer' 
            _hover={{bg:'rgb(240, 241, 244)'}} 
            {...props}>
                {children}
        </Box>
    )
}

export default OrderItem;