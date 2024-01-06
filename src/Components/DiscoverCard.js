import "./Discovercard.css";

const DiscoverCard = ({ dataImage, title }) => {
  

  return (
    <div className="discovercard">
    <div className="card">
      <p>{title}</p>
  </div>
    </div>
  );
};

export default DiscoverCard;
