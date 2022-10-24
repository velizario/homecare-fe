import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import StarIcon from "../../utils/StarIcon";

const Benefits : React.FC = () => {
    return (
    <Container maxW='90%' pt='28'>
        <Heading textAlign='center' pb='10' textTransform='uppercase' fontSize='3xl' fontWeight='extrabold'>Happy cleaners = Happy customers</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={8}>
            <GridItem w='100%'>
                {StarIcon}
                <Text fontWeight='bold' pt='4' pb='3' >5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>
            <GridItem w='100%'>
                {StarIcon}
                <Text fontWeight='bold' pt='4' pb='3'>5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>            <GridItem w='100%'>
                {StarIcon}
                <Text fontWeight='bold' pt='4' pb='3'>5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>            <GridItem w='100%'>
                {StarIcon}
                <Text fontWeight='bold' pt='4' pb='3'>5/5 stars</Text>
                <Text>"We are so happy with our regular cleaner, Maria. She is incredibly nice and flexible. It is always a joy when she is at our place."</Text>
            </GridItem>
        </Grid>
    </Container>
    )
}
export default Benefits;