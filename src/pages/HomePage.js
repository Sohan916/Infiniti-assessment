import Header from '../components/Header';
import HeaderButtons from '../components/HeaderButtons';
import ImageSlider from '../components/ImageSlider';
import HeadingBar from '../components/HeadingBar';
import CategoriesBar from '../components/CategoriesBar';
import ProductBar from '../components/ProductBar';
import EventBar from '../components/EventBar';

const HomePage = () => {
  return (
    <div className="">
      <HeaderButtons />
      <ImageSlider />
      <HeadingBar Name="Explore Popular Categories" />
      <CategoriesBar />
      <HeadingBar
        Name="Trending Auctions"
        Title="See what's popular across thousands of auctions."
      />
      <ProductBar />
      <HeadingBar
        Name="Featured products"
        Title="See what's popular across thousands of products."
      />
      <ProductBar />
      <HeadingBar
        Name="Featured Services"
        Title="See what's popular across thousands of products."
      />
      <ProductBar />
      <HeadingBar
        Name="Featured Events"
        Title="See what's popular across thousands of products."
      />
      <EventBar />
    </div>
  );
};
export default HomePage;
