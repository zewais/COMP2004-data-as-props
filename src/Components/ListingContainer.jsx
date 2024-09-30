import Listing from "./Listing";
export default function ListingContainer({ items }) {
  return (
    // use the map method to iterate over the items array and render a Listing component for each item
    <div className="ListingContainer">
      {items.map((item) => (
        <Listing key={item.id} {...item} />
      ))}
    </div>
    // <div className="ListingContainer">
    //   {items.map((item) => (
    //     <Listing
    //       key={item.id}
    //       pic={item.pic}
    //       country={item.country}
    //       location={item.location}
    //       rating={item.rating}
    //       price={item.price}
    //     />
    //   ))}
    // </div>
  );
}
