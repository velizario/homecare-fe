import { Container, Grid, GridItem } from "@chakra-ui/react";
import CleaningRequirements from "./CleaningRequirements"
import ProfileFull from "../CleanerCard/ProfileFull";
import Header from "../headerFooter/Header";
import Footer from "../headerFooter/Footer";

const BookCleaning:React.FC = () => {
    return (
    <>
        <Header></Header>
        <Container>
            <Grid templateColumns={'1fr 1fr'} gap='10'>
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