import { Container } from '@chakra-ui/react';
import BookCleaning from './structure/bookcleaning/BookCleaning';
import Header from './structure/headerFooter/Header';
import Homepage from './structure/homepage/Homepage';
import OrderCleaningPage from './structure/ordercleaning/OrderCleaningPage';
import ProfileFull from './structure/CleanerCard/ProfileFull';
import SearchPage from './structure/searchpage/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPlaced from './structure/bookcleaning/OrderPlaced';
import AboutUsMain from './structure/about/AboutUsMain';
import ServicesMain from './structure/services/ServicesMain';
import Dashboard from './structure/dashboard/Dashboard';
import PageNotFound from './structure/defaultRoutePage/PageNotFound';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='bookcleaning' element={<BookCleaning/>} />
        <Route path='ordercleaning' element={<OrderCleaningPage/>} />
        <Route path='search' element={<SearchPage/>} />
        <Route path='orderplaced' element={<OrderPlaced/>} />
        <Route path='services' element={<ServicesMain/>} />
        <Route path='about' element={<AboutUsMain/>} />
        <Route path='dashboard/*' element={<Dashboard/>} />
        <Route path='profile/*' element={<ProfileFull/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
