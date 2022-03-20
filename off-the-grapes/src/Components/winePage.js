import { getWine } from "./wineList";
import { useParams } from "react-router-dom";

const WinePage = () => {
  const { id } = useParams();

  const wine = getWine(id);

  return (
    <div className="wineView">
      <h1>{wine.name}</h1>
      <h2>{wine.producer}</h2>
      <p>{wine.type}</p>
      <img src={wine.flag} alt=" " width="20" height="20"></img>
      <p className="review">{wine.review}</p>
    </div>
  );
};

export default WinePage;
