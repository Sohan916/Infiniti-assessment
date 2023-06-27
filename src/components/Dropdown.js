import CategoryPageTitle from './CategoryPageTitle';
import DropdownComponent from './DropdownComponent';

const Dropdown = () => {
  return (
    <div>
      {' '}
      <CategoryPageTitle Name="Facility management" />
      <div className="dropdown-container">
        <DropdownComponent /> <DropdownComponent /> <DropdownComponent />{' '}
        <DropdownComponent /> <DropdownComponent /> <DropdownComponent />{' '}
        <DropdownComponent /> <DropdownComponent /> <DropdownComponent />{' '}
        <DropdownComponent /> <DropdownComponent />
      </div>
    </div>
  );
};
export default Dropdown;
