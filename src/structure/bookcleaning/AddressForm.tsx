import { Box, Flex, Input, Text } from "@chakra-ui/react";

const AddressForm:React.FC = () => {
    return (
    <Box mt='12' w='100%'>
        <Text fontSize='xs' textTransform='uppercase' fontWeight='medium' mb='4'>При кого ще почистваме?</Text>
        <Box>
            <Text color='gray.600' mb='1' pl='1' fontSize='xs' fontWeight='normal'>Адрес* (улица/блок, номер, вход, етаж, апартамент)</Text>
            <Input mb='4'  placeholder='Въведете адрес...' ></Input>

            <Text color='gray.600' mb='1' pl='1' fontSize='xs' fontWeight='normal'>Лице за контакт</Text>
            <Flex gap='2'>
                <Input variant='outline'  placeholder='Име...' ></Input>
                <Input  placeholder='Фамилия...' ></Input>
            </Flex>
        </Box>
    </Box>
    )
}

export default AddressForm;