import { getWine } from "./wineList";
import { getWines } from "./wineList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const WinePage = () => {
  const { id } = useParams();

  const wine = getWine(id);

  let backButton =
    id >= 1 ? (
      <div className="back">
        <Link to={`/wine/${id - 1}`} className="backButton">
          {"< Previous"}
        </Link>
      </div>
    ) : (
      <div className="back">
        <p>{""}</p>
      </div>
    );

  let nextButton =
    id < getWines().length - 1 ? (
      <div className="next">
        <Link to={`/wine/${parseInt(id) + 1}`} className="nextButton">
          {"Next >"}
        </Link>
      </div>
    ) : (
      <div className="next">
        <p>{""}</p>
      </div>
    );

  return (
    <div className="fullWinePage">
      {backButton}
      <div className="wineView">
        <h1>{wine.name}</h1>
        <h2>{wine.producer}</h2>
        <p>{wine.type}</p>
        <img src={wine.flag} alt=" " width="20" height="20"></img>
        <p className="review">
          {wine.review}
          {wine.score}
        </p>
      </div>
      {nextButton}
    </div>
  );
};

export default WinePage;
