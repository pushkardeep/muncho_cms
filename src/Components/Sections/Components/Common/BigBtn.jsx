// components
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function BigBtn({ title, styles, link = "#", onClick }) {
  return link ? (
    <Link
      to={link}
      className={`flex justify-center items-center max-w-fit bg-[#06B906] rounded-[0.5rem] gap-1 px-3 py-1.5 ${styles}`}
      onClick={onClick}
      style={{ textDecoration: "none" }}
    >
      <span className="text-black inter_reg text-[0.8rem]">{title}</span>
      <ChevronRight size={16} color="black" />
    </Link>
  ) : (
    <button
      className={`flex justify-center items-center max-w-fit bg-[#06B906] rounded-[0.5rem] gap-1 px-3 py-1.5 ${styles}`}
      onClick={onClick}
    >
      <span className="text-black inter_reg text-[0.8rem]">{title}</span>
      <ChevronRight size={16} color="black" />
    </button>
  );
}

export default BigBtn;
