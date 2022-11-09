import Benefits from "./Benefits";
import BookingPath from "./BookingPath";
import CleaningRate from "./CleaningRate";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import KeyMessages from "./KeyMessages";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Homepage:React.FC = function () {
  return (
  <>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <KeyMessages/>
      <BookingPath/>
      <CleaningRate/>
      <Benefits/>
      <Footer/>
  </>
  );
}


export default Homepage;