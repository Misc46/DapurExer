import { Link } from "react-router-dom";

const CategoryCard = ({ image, name, route }) => {
  return (
    <Link
      to={route}
      className="flex w-5/12 max-w-44 flex-col items-center justify-around gap-1.5 rounded-lg border-2 border-[#FFB300] p-5 shadow-xl transition-all duration-200 hover:scale-110 hover:bg-[#FFF8E1] md:w-2/12"
    >
      <img className="w-10/12" src={image} alt={name} />
      <p className="text-lg font-bold">{name}</p>
    </Link>
  );
};

export default CategoryCard;
