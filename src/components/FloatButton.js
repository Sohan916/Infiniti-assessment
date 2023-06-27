import UnfoldMoreDoubleOutlinedIcon from '@mui/icons-material/UnfoldMoreDoubleOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const FloatButton = () => {
  return (
    <div className="float-button">
      <div className="float-left">
        <UnfoldMoreDoubleOutlinedIcon />
        Sort
      </div>
      <div className="float-right">
        <FilterListOutlinedIcon />
        Filter
      </div>
    </div>
  );
};
export default FloatButton;
