import { Box, Container, Image } from "@chakra-ui/react"
import Tabulator from "./Tabulator";
import freskalogo from '../../resources/freskalogo.svg'

const OrderCleaningPage:React.FC = () => {
    return (
        <Container m='0' bg='rgb(240, 241, 244)' display='flex' minW='full'>
            <Image src={freskalogo} alt="SVG as an image" h='6' cursor='pointer'></Image>
            <Tabulator></Tabulator>
        </Container>
    )
}

export default OrderCleaningPage;