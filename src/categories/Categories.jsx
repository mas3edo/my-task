import meet from "../images/meet.png";
import pizza from "../images/pizza.png";
import kresby from "../images/kresby.png";
import ftaer from "../images/ftaer.png";
import ham from "../images/ham.png";
import botato from "../images/botato.png";
import "./categories.css";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";

function Categories() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  const categories = [
    { name: "اللحوم", image: meet, count: 23 },
    { name: "البيتزا", image: pizza, count: 23 },
    { name: "الفراخ الكرسبي", image: kresby, count: 23 },
    { name: "الفطائر", image: ftaer, count: 23 },
    { name: "البرجر", image: ham, count: 23 },
    { name: "مقبلات", image: botato, count: 23 },
  ];

  return (
    <div>
      <section className="categories-section py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-2 text-center flex flex-col justify-center items-center w-full">
          <h1 className="">
            {" "}
            استكشف أقسام <span>قائمتنا</span>
          </h1>
          <p className="py-4" style={{ color: "#2C2C2C" }}>
            من المذاق الشرقي الأصيل إلى النكهات العالمية… في سفرة، كل طبق هو
            حكاية
          </p>

          {/* SVG Decoration */}
          <svg
            width="343"
            height="17"
            viewBox="0 0 343 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M166.81 8.50101L171.517 17.0021L176.224 8.50101L171.517 0L166.81 8.50101Z"
              fill="#3F9065"
            />
            <path
              d="M171.517 3.79431L163.016 8.501L171.517 13.2078L180.018 8.501L171.517 3.79431Z"
              fill="#3F9065"
            />
            <path
              d="M156.033 11.3518C157.607 11.3518 158.883 10.0755 158.883 8.50105C158.883 6.9266 157.607 5.65027 156.033 5.65027C154.458 5.65027 153.182 6.9266 153.182 8.50105C153.182 10.0755 154.458 11.3518 156.033 11.3518Z"
              fill="#3F9065"
            />
            <path
              d="M147.699 8.99767C147.963 7.88216 147.272 6.76432 146.156 6.50091C145.041 6.23751 143.923 6.92829 143.66 8.0438C143.396 9.15932 144.087 10.2771 145.202 10.5405C146.318 10.8039 147.436 10.1132 147.699 8.99767Z"
              fill="#3F9065"
            />
            <path
              d="M166.159 7.54395H12.9558V9.45816H166.159V7.54395Z"
              fill="#3F9065"
            />
            <path
              d="M0.175386 8.25894C0.173328 8.25973 0.171271 8.26042 0.169213 8.2612C-0.0564042 8.34275 -0.0564042 8.65912 0.169213 8.74066C0.171271 8.74144 0.173328 8.74212 0.175386 8.74291C3.23944 9.86051 6.39358 12.03 9.80508 11.4433C11.5071 11.1505 13.3777 10.1371 14.421 8.64922C14.4835 8.56003 14.4835 8.44193 14.421 8.35264C13.3777 6.86477 11.5071 5.85135 9.80508 5.55859C6.39358 4.97181 3.23944 7.14134 0.175386 8.25894Z"
              fill="#3F9065"
            />
            <path
              d="M20.2286 11.0523C21.6377 11.0523 22.78 9.91004 22.78 8.50096C22.78 7.09187 21.6377 5.94958 20.2286 5.94958C18.8195 5.94958 17.6772 7.09187 17.6772 8.50096C17.6772 9.91004 18.8195 11.0523 20.2286 11.0523Z"
              fill="#3F9065"
            />
            <path
              d="M186.967 11.3518C188.542 11.3518 189.818 10.0755 189.818 8.50105C189.818 6.9266 188.542 5.65027 186.967 5.65027C185.393 5.65027 184.116 6.9266 184.116 8.50105C184.116 10.0755 185.393 11.3518 186.967 11.3518Z"
              fill="#3F9065"
            />
            <path
              d="M199.377 8.83359C199.561 7.70214 198.793 6.63608 197.661 6.45245C196.53 6.26883 195.464 7.03717 195.28 8.16862C195.096 9.30006 195.865 10.3661 196.996 10.5498C198.128 10.7334 199.194 9.96503 199.377 8.83359Z"
              fill="#3F9065"
            />
            <path
              d="M176.841 9.45813L330.044 9.45813V7.54391L176.841 7.54391V9.45813Z"
              fill="#3F9065"
            />
            <path
              d="M342.825 8.74304C342.827 8.74226 342.829 8.74157 342.831 8.74078C343.057 8.65924 343.057 8.34287 342.831 8.26132C342.829 8.26054 342.827 8.25985 342.825 8.25906C339.761 7.14147 336.607 4.97194 333.195 5.55872C331.493 5.85147 329.622 6.86489 328.579 8.35277C328.517 8.44195 328.517 8.56006 328.579 8.64934C329.622 10.1372 331.493 11.1506 333.195 11.4434C336.607 12.0301 339.761 9.86064 342.825 8.74304Z"
              fill="#3F9065"
            />
            <path
              d="M322.771 11.0523C324.18 11.0523 325.323 9.91004 325.323 8.50096C325.323 7.09187 324.18 5.94958 322.771 5.94958C321.362 5.94958 320.22 7.09187 320.22 8.50096C320.22 9.91004 321.362 11.0523 322.771 11.0523Z"
              fill="#3F9065"
            />
          </svg>

          <div
            className="relative flex items-center justify-center w-full"
            style={{
              width: "auto",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            {/* الزر الأيسر */}
            {/* hidden md:flex -> يختفي في الموبايل ويظهر في الشاشات الأكبر */}
            <button
              type="button"
              className="category-scroll-btn category-scroll-btn--left hidden md:flex"
              onClick={scrollLeft}
              aria-label="Scroll left"
              style={{ backgroundColor: "var(--main-red)" }}
            >
              <Icon icon="ic:round-chevron-left" width="22" height="22" />
            </button>

            <div
              className="hide-scrollbar categories-container flex overflow-x-scroll md:overflow-x-auto space-x-4 py-4 px-2 md:px-4"
              ref={scrollRef}
              style={{ scrollBehavior: "smooth" }}
            >
              {categories.map((category, index) => (
                <a href={"#" + category.name} key={category.name + index}>
                  <div className="category-card ">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-image mx-auto"
                    />
                    <h3 className="category-name mt-2">{category.name}</h3>
                    <p className="category-count text-gray-500">
                      {category.count} وجبة متاحة
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* الزر الأيمن */}
            {/* hidden md:flex -> يختفي في الموبايل ويظهر في الشاشات الأكبر */}
            <button
              type="button"
              className="category-scroll-btn category-scroll-btn--right hidden md:flex"
              onClick={scrollRight}
              aria-label="Scroll right"
              style={{ backgroundColor: "var(--main-red)" }}
            >
              <Icon icon="ic:round-chevron-right" width="22" height="22" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
