import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("Catagories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2>All Caterogy</h2>
      {catagories.map((catagory) => (
        <Link
          className="block ml-4 text-xl font-semibold"
          to={`/catagory/${catagory.id}`}
          key={catagory.id}
        >
          {catagory.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftsideNav;
