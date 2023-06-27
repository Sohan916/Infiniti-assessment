import Header from './Header';
import HeaderButton from './HeaderButton';
const HeaderButtons = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <HeaderButton Name="Request Anything" />
      <HeaderButton Name="Create Events" />
      <HeaderButton Name="Auction items" />
    </div>
  );
};
export default HeaderButtons;
