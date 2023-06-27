import CategoryPageTitle from '../components/CategoryPageTitle';
import FilterBar from '../components/FilterBar';
import ServicesBar from '../components/ServicesBar';
import ItemsBar from '../components/ItemsBar';
import ItemsGrid from '../components/ItemsGrid';
import FloatButton from '../components/FloatButton';

const ProductListPage = () => {
  return (
    <div>
      <CategoryPageTitle Name="Facility Management > Maintainance services > level 3" />

      <ServicesBar />

      <FilterBar />

      <ItemsBar />

      <ItemsGrid />
      <FloatButton />
    </div>
  );
};
export default ProductListPage;
