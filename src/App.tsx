import { Container } from '@chakra-ui/react';
import BookCleaning from './structure/bookcleaning/BookCleaning';
import Header from './structure/homepage/Header';
import Homepage from './structure/homepage/Homepage';
import OrderCleaningPage from './structure/ordercleaning/OrderCleaningPage';
import ProfileFull from './structure/Profile/ProfileFull';
import SearchPage from './structure/searchpage/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPlaced from './structure/bookcleaning/OrderPlaced';
import AboutUsMain from './structure/about/AboutUsMain';
import ServicesMain from './structure/services/ServicesMain';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='bookcleaning' element={<BookCleaning/>} />
        <Route path='ordercleaning' element={<OrderCleaningPage/>} />
        <Route path='searchpage' element={<SearchPage/>} />
        <Route path='orderplaced' element={<OrderPlaced/>} />
        <Route path='services' element={<ServicesMain/>} />
        <Route path='about' element={<AboutUsMain/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
