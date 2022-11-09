import { Container, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import staricon from "../../resources/staricon.svg";

const Testimonials : React.FC = () => {
    return (
    <Container mb='36'>
        <Heading textAlign='center' pb='10' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>Happy cleaners = Happy customers</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={8}>
            <GridItem w='100%'>
                <Image src={staricon} alt="SVG as an image" h='10' cursor='pointer'></Image>
                <Text fontWeight='bold' pt='4' pb='3' >5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>
            <GridItem w='100%'>
                <Image src={staricon} alt="SVG as an image" h='10' cursor='pointer'></Image>
                <Text fontWeight='bold' pt='4' pb='3'>5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>            <GridItem w='100%'>
                <Image src={staricon} alt="SVG as an image" h='10' cursor='pointer'></Image>
                <Text fontWeight='bold' pt='4' pb='3'>5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>            <GridItem w='100%'>
                <Image src={staricon} alt="SVG as an image" h='10' cursor='pointer'></Image>
                <Text fontWeight='bold' pt='4' pb='3'>5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>
        </Grid>
    </Container>
    )
}
export default Testimonials;