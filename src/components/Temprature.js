import "../style.css";

const Temprature = () => {
  return (
    <>
      {/* Search Bar */}
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search.."
            autoFocus
            id="search"
            className="searchTerm"
          />
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>
      {/* Main Card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Pune, Maharastra</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
      </article>
      {/* Section */}
    </>
  );
};

export default Temprature;
