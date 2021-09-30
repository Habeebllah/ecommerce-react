import HomeSlider from "../../components/slider/HomeSlider";
import SectionContainer from "../../components/sectionContainer/SectionContainer";
const HomePage = (props) => {
  return (
    <div>
      <HomeSlider />
      <SectionContainer onAdd = {props.onAdd} products={props.products}/>
      
    </div>
  );
};

export default HomePage;
