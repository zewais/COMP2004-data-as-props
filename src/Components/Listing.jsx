export default function Listing({ pic, country, location, rating, price }) {
  return (
    <div className="Listing">
      <h2>{country}</h2>
      <img src={pic} alt={country} width="100px" />
      <h3>{location}</h3>
      <p>Rating: {rating} ★</p>
      <p>Price: ${price}</p>
    </div>
  );
}
