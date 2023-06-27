import MenuIcon from '@mui/icons-material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon style={{ cursor: 'pointer' }} />
        <div className="header-search">
          <button>Products</button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        Filter <FilterListIcon />
      </div>
    </div>
  );
}
export default Header;
