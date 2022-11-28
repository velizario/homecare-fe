import { Box, Flex } from "@chakra-ui/react";
import InputElement from "./helpers/InputElement";
import OrderHeading from "./helpers/OrderHeading";
import OrderLabel from "./helpers/OrderLabel";

const AddressForm:React.FC = () => {
    return (
    <Box mt='12' w='100%'>
        <OrderHeading>При кого ще почистваме?</OrderHeading>
        <Flex gap='2' mb='6'>
            <Box w='50%'>
                <OrderLabel>Име:</OrderLabel>
                <InputElement placeholder='Име...' ></InputElement>
            </Box>
            <Box w='50%'> 
                <OrderLabel>Фамилия:</OrderLabel>
                <InputElement  placeholder='Фамилия...' ></InputElement>
            </Box>
        </Flex>
        <OrderLabel>Адрес: (улица/блок, номер, вход, етаж, апартамент)</OrderLabel>
        <InputElement mb = '6'  placeholder='Въведете адрес...' ></InputElement>
        <OrderLabel>Телефонен номер:</OrderLabel>
        <InputElement placeholder='Въведете номер...' ></InputElement>
    </Box>
    )
}

export default AddressForm;