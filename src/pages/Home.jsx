import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import CSSSlider from "../components/CSSSlider";

const Home = ({ data }) => {
  return (
    <div>
      <Hero />
      <CSSSlider products={data} />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
};
export default Home;
