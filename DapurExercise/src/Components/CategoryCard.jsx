const CategoryCard = ({ image, name }) => {
  return (
    <div className="p-5 border-2 border-[#FFB300] rounded-lg w-48 flex flex-col items-center gap-1.5">
      <img className="w-10/12" src={image} alt="" />
      <p className="text-lg font-bold">{name}</p>
    </div>
  );
};

export default CategoryCard;
