import "./cards.css";

const CardImage = ({ thumbnail }) => {
  return (
    <div className="card-image-container">
      <img className="card-image" src={thumbnail} alt="Logos" />;
    </div>
  );
};

export default CardImage;
