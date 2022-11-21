import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Tabulator from "../ordercleaning/Tabulator"
import ProfileFull from "../Profile/ProfileFull";

const BookCleaning:React.FC = () => {
    return (
    <Box >
        <Container>
            <Grid templateColumns={'1fr 1fr'} gap='20'>
                <GridItem colSpan={1}>
                    <ProfileFull></ProfileFull>
                </GridItem>
                <GridItem colSpan={1}>
                    <Tabulator></Tabulator>
                </GridItem>
            </Grid>
        </Container>
    </Box>
    )

}

export default BookCleaning;