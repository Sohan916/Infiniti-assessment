import PeopleIcon from '@mui/icons-material/People';

const Events = () => {
  return (
    <div className="event-component">
      <div className="event-left">
        <div className="about">
          <div className="about-words">New</div>{' '}
          <div className="about-words">Scheduled</div>
        </div>
        <h4>Requirement of 2000 diodes at nasik plant</h4>
        <p>Sat, 02:PM onwards</p>
        <div className="company">
          <div className="company-image" />
          <div className="company-info">
            <p>Andrew Smith</p>
            <p>Global foundries</p>
          </div>
        </div>
        <div className="meet-type">
          <PeopleIcon />
          <p>One on One</p>
        </div>
      </div>
      <div className="event-right">
        <div className="appointment">
          <div className="month">Nov</div>
          <div className="day">18</div>
        </div>
      </div>
    </div>
  );
};
export default Events;
