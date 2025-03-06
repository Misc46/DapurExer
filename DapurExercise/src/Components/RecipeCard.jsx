import chicken from "/chicken.png";

const CategoryCard = ({}) => {
  return (
    <div className="flex basis-1/6 flex-col items-start gap-2 rounded-xl bg-[#FAF3E0] p-5">
      <img
        src="https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg"
        alt=""
        className="w-full rounded-md"
      />
      <p className="text-base text-slate-700">Seafood</p>
      <p className="text-lg font-semibold">Jengkol bu riva</p>
      <a href="#" className="rounded-md bg-[#FF7F50] px-2 py-1 text-base">
        Lihat Resep
      </a>
    </div>
  );
};

export default CategoryCard;
