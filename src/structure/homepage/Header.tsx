    import { Box, Button, ButtonGroup, Container, Flex, MenuItem, Spacer, Text} from '@chakra-ui/react'

const FreskaLogo =         
<svg width="75" height="20" viewBox="0 0 360 96" role="img">
    <g fill="#000552" fill-rule="evenodd" role="presentation">
        <path d="M108.144 43c0 6.752-5.475 12.227-12.228 12.227-6.752 0-12.227-5.474-12.227-12.227 0-6.754 5.475-12.227 12.227-12.227 6.753 0 12.228 5.473 12.228 12.226M.901.167h54.597v16.729H20.743V35.96h34.755v16.859H20.743v40.072H.901zM175.796 81.998l13.876-7.133c.908 4.669 5.187 7.78 11.282 7.78 5.966 0 9.467-2.333 9.467-6.093 0-5.577-5.058-5.966-13.357-9.078-12.709-4.8-19.453-9.338-19.453-18.675 0-11.672 9.856-20.36 26.067-20.36 11.282 0 19.712 4.798 23.343 12.839l-13.228 6.613c-1.427-4.668-5.058-7.132-10.375-7.132-5.446 0-8.948 2.464-8.948 5.965 0 5.058 5.447 6.354 14.525 9.337 12.71 4.15 18.804 9.337 18.804 19.194 0 11.93-9.856 20.1-26.455 20.1-13.099 0-22.566-5.187-25.548-13.357M233.244.167h18.026v58.098l23.084-27.493h21.659l-25.03 27.493 27.493 34.626H276.17l-24.9-32.939v32.939h-18.026z"/>
        <path d="M343.37 61.767c0-11.542-6.355-18.156-15.563-18.156-9.856 0-15.82 6.873-15.82 18.156 0 11.152 5.835 17.767 15.691 17.767 9.856 0 15.692-6.485 15.692-17.767m-49.67.13c0-20.88 10.505-33.199 28.142-33.199 9.079 0 16.082 4.02 20.88 12.32V30.771h17.119v62.12h-17.509l.26-8.949c-4.928 7.911-11.541 11.412-21.399 11.412-16.08 0-27.493-12.839-27.493-33.458M62.581 92.891h18.026V30.772H62.581zM141.689 43.481c5.27 0 9.075 1.737 11.396 5.052l-26.551 13.133c-.947-11.186 7.114-18.184 15.155-18.184m.259 36.181c-4.661 0-8.46-1.662-11.105-4.37l31.119-15.986 11.06-5.68a37.297 37.297 0 0 0-.822-3.546c-3.871-13.576-14.93-21.383-30.511-21.383-19.453 0-32.811 14.264-32.811 33.458 0 19.842 12.19 33.2 32.68 33.2 13.229 0 22.696-5.188 29.44-16.082l-14.525-7.261c-3.242 5.186-8.041 7.65-14.525 7.65"/>
    </g>
</svg>

const Header : React.FC = () => {
    return (
    <Container maxW='full' h='28' bg='gray.50' alignItems="center" display='flex'>
        <Flex gap='14' >
            {FreskaLogo}
            <Button variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>Services</Button>
            <Button variant='link' textTransform='uppercase' _hover={{ textDecoration: "none" }}>About Us</Button>
        </Flex>
        <Spacer></Spacer>
        <Button colorScheme='facebook'>Order a cleaning</Button>
    </Container>
    )
}
export default Header;