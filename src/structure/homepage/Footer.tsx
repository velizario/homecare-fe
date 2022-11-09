import { Box, Button, Container } from "@chakra-ui/react";

const Footer : React.FC = () => {
    return (
        <Container maxW='full' bg='gray.200' h='52' p='12'>
            <Box gap='4' display='flex' h='full' w='full' alignItems='flex-end' justifyContent='flex-end'>
                <Button variant='link' fontWeight='normal' color='gray.600'>Terms and conditions</Button>
                <Button variant='link' fontWeight='normal' color='gray.600'>Privacy Policy</Button>
                <Button variant='link' fontWeight='normal' color='gray.600'>Cookie preferences</Button>
            </Box>
        </Container>
    )
}
export default Footer;