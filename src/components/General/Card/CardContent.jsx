const CardContent = ({ name }) => {
  return (
    <div className={`card-info-container`}>
      <span className="card-title">{name}</span>
    </div>
  );
};
export default CardContent;
