const CategoryCard = ({ image, name, route }) => {
  return (
    <a
      href={route}
      className="flex w-44 flex-col items-center justify-around gap-1.5 rounded-lg border-2 border-[#FFB300] p-5 shadow-xl"
    >
      <img className="w-10/12" src={image} alt="" />
      <p className="text-lg font-bold">{name}</p>
    </a>
  );
};

export default CategoryCard;
