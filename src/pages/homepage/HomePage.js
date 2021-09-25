import classNamees from "./HomePage.module.css";
import ProductCard from "../../components/productCard/ProductCard";
import HomeSlider from "../../components/slider/HomeSlider";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import QuickView from "../../components/quickview/QuickView";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
const HomePage = () => {
  const ProductData = [
    {
      name: "Handcrafted Wooden Chips",
      price: "245.00",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      image: "http://placeimg.com/640/80",
      id: "1",
    },
    {
      name: "Sleek Fresh Ball",
      price: "519.00",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      image: "http://placeimg.com/640/410",
      id: "2",
    },
    {
      name: "Unbranded Cotton Soap",
      price: "890.00",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      image: "http://placeimg.com/640/440",
      id: "3",
    },
    {
      name: "Fantastic Wooden Shirt",
      price: "146.00",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      image: "http://placeimg.com/640/490",
      id: "4",
    },
    {
      name: "Rustic Granite Sausages",
      price: "647.00",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      image: "http://placeimg.com/640/48",
      id: "5",
    },
    {
      name: "Awesome Concrete Fish",
      price: "802.00",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      image: "http://placeimg.com/640/580",
      id: "6",
    },
    {
      name: "Handcrafted Granite Car",
      price: "708.00",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      image: "http://placeimg.com/640/460",
      id: "7",
    },
    {
      name: "Awesome Steel Hat",
      price: "7.00",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      image: "http://placeimg.com/640/420",
      id: "8",
    },
    {
      name: "Intelligent Plastic Pizza",
      price: "692.00",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      image: "http://placeimg.com/640/180",
      id: "9",
    },
    {
      name: "Handmade Soft Fish",
      price: "282.00",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      image: "http://placeimg.com/640/380",
      id: "10",
    },
    {
      name: "Intelligent Plastic Pizza",
      price: "692.00",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      image: "http://placeimg.com/640/180",
      id: "9",
    },
    {
      name: "Handmade Soft Fish",
      price: "282.00",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      image: "http://placeimg.com/640/380",
      id: "10",
    },
  ];

  return (
    <div>
      <HomeSlider />
      <SectionContainer/>
      
    </div>
  );
};

export default HomePage;
