import Benefits from "./Benefits";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";

const Homepage:React.FC = function () {
  return (
  <>
      <Header/>
      <Hero/>
      <Services/>
      <Benefits/>
  </>
  );
}


export default Homepage;