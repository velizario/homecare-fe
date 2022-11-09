import { Container, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import rocketicon from "../../resources/rocketicon.svg"
import staricon from "../../resources/staricon.svg"
import fisticon from "../../resources/fisticon.svg"
import kiteicon from "../../resources/kiteicon.svg"


const Benefits : React.FC = () => {
    return (
    <Container mb='36'>
        <Heading textAlign='center' pb='10' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>WHY FRESKA?</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={8}>
            <GridItem w='100%'>
                <Image src={rocketicon} alt="SVG as an image" h='10'></Image>
                <Text fontWeight='bold' pt='4' pb='3' >Easy online booking</Text>
                <Text>Hassle-free home cleaning with a swipe of a thumb—manage your subscription in the Freska app.</Text>
            </GridItem>
            <GridItem w='100%'>
                <Image src={fisticon} alt="SVG as an image" h='10'></Image>
                <Text fontWeight='bold' pt='4' pb='3'>Professional and employed cleaners</Text>
                <Text>All our cleaners are carefully selected and trained and enjoy rights to paid vacation, pension, sick leave and other benefits.</Text>
            </GridItem>            
            <GridItem w='100%'>
            <Image src={kiteicon} alt="SVG as an image" h='10'></Image>
                <Text fontWeight='bold' pt='4' pb='3'>No commitment</Text>
                <Text>No lock-in contract—pause your subscription whenever you want. You’re always welcome back.</Text>
            </GridItem>            
            <GridItem w='100%'>
                <Image src={staricon} alt="SVG as an image" h='10'></Image>
                <Text fontWeight='bold' pt='4' pb='3'>100% happiness guarantee</Text>
                <Text>Our dedicated customer care team is always there to help and will make sure that you are 100% happy.</Text>
            </GridItem>

        </Grid>
    </Container>
    )
}
export default Benefits;