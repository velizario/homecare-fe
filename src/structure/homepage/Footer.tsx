import { Box, Button, Container } from "@chakra-ui/react";
import ButtonRoute from "../../utils/ButtonRoute";

const Footer : React.FC = () => {
    return (
        <Container maxW='full' bg='gray.200' h='52' p='12'>
            <Box gap='4' display='flex' h='full' w='full' alignItems='flex-end' justifyContent='flex-end'>
                <ButtonRoute variant='link' fontWeight='normal' color='gray.600'>Terms and conditions</ButtonRoute>
                <ButtonRoute variant='link' fontWeight='normal' color='gray.600'>Privacy Policy</ButtonRoute>
                <ButtonRoute variant='link' fontWeight='normal' color='gray.600'>Cookie preferences</ButtonRoute>
            </Box>
        </Container>
    )
}
export default Footer;