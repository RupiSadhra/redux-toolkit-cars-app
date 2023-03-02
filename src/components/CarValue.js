import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ carsList: { cars, searchTerm } }) => {
    return cars
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
