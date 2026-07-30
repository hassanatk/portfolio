import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/40"
    >
      <FaArrowUp className="mx-auto text-white" />
    </button>
  );
}

export default BackToTop;