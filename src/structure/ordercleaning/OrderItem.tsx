import { Box, BoxProps } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type OrderItemProps = {
    children: React.ReactNode;
    styles?: BoxProps;
    onClick?: MouseEventHandler<HTMLDivElement>;
    active: boolean;
    dataId: string;
}

const OrderItem:React.FC<OrderItemProps> = ({ children, styles, onClick, active, dataId } ) => {
    return (
        <Box tabIndex={0} data-id={dataId} onClick={onClick} w='full' h='20' mb='3' p='5' border={`1px solid ${active ? '#26a0f7' : 'lightgray'}`} borderRadius='lg' boxShadow={`0px 4px 10px ${active ? 'rgba(38, 160, 247, 0.2)' : 'rgba(200,200,200,0.3)'}`} display='flex' alignItems='center' justifyContent='space-between' cursor='pointer' _hover={{bg:'rgb(240, 241, 244)'}} {...styles}>
        {children}
    </Box>
    )
}

export default OrderItem;