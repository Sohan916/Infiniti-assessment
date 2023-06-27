import { useState } from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const DropdownComponent = () => {
  const [drop, setDrop] = useState(false);

  const handleClick = () => {
    setDrop(!drop);
  };

  return (
    <div className="dropdowns-container">
      <div className="dropdown-component-container">
        <div className="dropdown-left">Maintanance services</div>
        <div className="dropdown-right">
          {' '}
          <div className="arrow-icon" onClick={() => handleClick()}>
            {' '}
            {drop ? (
              <KeyboardArrowUpOutlinedIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownOutlinedIcon fontSize="large" />
            )}
          </div>{' '}
        </div>{' '}
      </div>
      {drop && (
        <div className="dropdown-sub">
          <div className="dropdown-component-container">
            <div className="dropdown-left">Level 3</div>
            <div className="dropdown-right"> </div>
          </div>
          <div className="dropdown-component-container">
            <div className="dropdown-left">Level 3</div>
            <div className="dropdown-right"> </div>
          </div>
          <div className="dropdown-component-container">
            <div className="dropdown-left">Level 3</div>
            <div className="dropdown-right"> </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropdownComponent;
