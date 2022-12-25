import { Box, Container, Image } from "@chakra-ui/react"
import Tabulator from "./Tabulator";
import freskalogo from '../../resources/freskalogo.svg'
import Header from "../headerFooter/Header";
import Footer from "../headerFooter/Footer";

const OrderCleaningPage:React.FC = () => {
    return (
    <>
        <Header/>
        <Container m='0' bg='rgb(240, 241, 244)' display='flex' minW='full'>
            <Image src={freskalogo} alt="SVG as an image" h='6' cursor='pointer'></Image>
            <Tabulator></Tabulator>
        </Container>
        <Footer/>
    </>
    )
}

export default OrderCleaningPage;