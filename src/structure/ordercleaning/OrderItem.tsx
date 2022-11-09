import { Box, BoxProps } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type OrderItemProps = {
    children: React.ReactNode;
    styles?: BoxProps;
    onClick: MouseEventHandler<HTMLDivElement>;
    active: boolean;
    dataId: string;
}

const OrderItem:React.FC<OrderItemProps> = ({ children, styles, onClick, active, dataId } ) => {
    return (
        <Box data-id={dataId} onClick={onClick} w='full' h='24' mb='2' p='5' border={`2px solid ${active ? 'black' : 'lightgray'}`} borderRadius='lg' boxShadow='md' display='flex' alignItems='center' justifyContent='space-between' cursor='pointer' _hover={{bg:'rgb(240, 241, 244)'}} {...styles}>
        {children}
    </Box>
    )
}

export default OrderItem;