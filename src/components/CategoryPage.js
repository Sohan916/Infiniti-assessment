import CategoriesBar from './CategoriesBar';
import CategoriesComponent from './CategoriesComponent';

import CategoryPageTitle from './CategoryPageTitle';

const CategoryPage = () => {
  return (
    <div className="category">
      <CategoryPageTitle Name="Recent" />

      <CategoriesBar />

      <CategoryPageTitle Name="All Categories" />
      <div className="categories-container">
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
        <CategoriesComponent />
      </div>
    </div>
  );
};
export default CategoryPage;
