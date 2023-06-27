const HeadingBar = (props) => {
  return (
    <div className="heading-container">
      <div className="heading-left">
        <h1>{props.Name}</h1>

        <div className="heading-title">
          {' '}
          <p>{props.Title}</p>
        </div>
      </div>
      <div className="heading-right">
        {' '}
        <p>View All</p>
      </div>
    </div>
  );
};
export default HeadingBar;
