import { useState } from 'react';

const Button = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="button-container"
      onClick={() => setClicked(!clicked)}
      style={{ backgroundColor: clicked ? '#161f6d' : '#00abe1' }}
    >
      {props.Name}
    </div>
  );
};
export default Button;
