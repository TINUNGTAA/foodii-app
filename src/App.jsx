

import Header from   "./components/header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Customer from "./components/Customers.jsx";
import SpecialDish from "./components/special.jsx";
import Testimonials from "./components/testimonials.jsx";
import Service from "./components/service.jsx";
import Footer from  "./components/footer.jsx";


 function App() {
  return (
    <div className=" h-screen bg-gray-100 m-0 p-0 font-mulish">

      <Header/>
      <HeroSection/>
     <Customer/>
     <SpecialDish/>
     <Testimonials/>
     <Service/>
     <Footer/>

    

    </div>
  )
}

export default App;