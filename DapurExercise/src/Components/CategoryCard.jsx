const CategoryCard = ({ image, name, route }) => {
  return (
    <a
      href={route}
      className="p-5 border-2 border-[#FFB300] drop-shadow-xl rounded-lg w-44 flex flex-col items-center gap-1.5 justify-around"
    >
      <img className="w-10/12" src={image} alt="" />
      <p className="text-lg font-bold">{name}</p>
    </a>
  );
};

export default CategoryCard;
