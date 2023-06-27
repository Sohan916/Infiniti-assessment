import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import UnfoldMoreDoubleOutlinedIcon from '@mui/icons-material/UnfoldMoreDoubleOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const FilterBar = () => {
  return (
    <div className="filter">
      <div className="filter-left">
        <h2> 90,000+ results</h2>
      </div>
      <div className="filter-right">
        <div className="list-icon">
          {' '}
          <FormatListBulletedOutlinedIcon fontSize="large" />
        </div>
        <SearchOutlinedIcon fontSize="large" />
        <div className="sort-icon">
          {' '}
          <UnfoldMoreDoubleOutlinedIcon fontSize="large" /> Sort{' '}
        </div>
        <div className="filter-icon">
          <FilterListOutlinedIcon fontSize="large" /> Filter
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
