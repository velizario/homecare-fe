import { Container } from '@chakra-ui/react';
import BookCleaning from './structure/bookcleaning/BookCleaning';
import Header from './structure/homepage/Header';
import Homepage from './structure/homepage/Homepage';
import OrderCleaningPage from './structure/ordercleaning/OrderCleaningPage';
import ProfileFull from './structure/Profile/ProfileFull';
import SearchPage from './structure/searchpage/SearchPage';


function App() {
  return (
    <>
      {/* <Homepage></Homepage> */}
      {/* <OrderCleaningPage></OrderCleaningPage>  */}
      <Header></Header>
      <BookCleaning></BookCleaning>
      <Container w='4xl'>
          <ProfileFull></ProfileFull>
      </Container>
      <OrderCleaningPage></OrderCleaningPage>
      <SearchPage></SearchPage>
    </>
  );
}

export default App;
