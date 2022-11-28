import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import CleaningRequirements from "./CleaningRequirements"
import ProfileFull from "../Profile/ProfileFull";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

const BookCleaning:React.FC = () => {
    return (
    <>
        <Header></Header>
        <Container>
            <Grid templateColumns={'1fr 1fr'} gap='20'>
                <GridItem colSpan={1}>
                    <ProfileFull></ProfileFull>
                </GridItem>
                <GridItem colSpan={1}>
                    <CleaningRequirements></CleaningRequirements>
                </GridItem>
            </Grid>
        </Container>
        <Footer></Footer>
    </>
    )

}

export default BookCleaning;