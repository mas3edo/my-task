import "./Section.css";
import { Icon } from "@iconify/react";
import ImageCarousel from "./ImageCarousel";
import image from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
function Section() {
  const handleOrderNow = () => {
    const target = document.getElementById("cards");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Fallback if the element isn't mounted yet.
    window.location.hash = "cards";
  };

  return (
    <section className="section flex bg-gray-100  justify-center relative overflow-hidden">
      <img className="image-1 hidden md:hidden lg:block" src={image} alt="" />
      <div className="container py-[56px] px-12 relative z-10 flex flex-col justify-center items-center">
        <div className="head flex flex-col justify-center items-center text-center mb-10">
          <h1 className="flex justify-center">
            نكهاتنا المميزة توصل لسفرتك بكل حب
          </h1>
          <p>
            استمتع بأشهى الأطباق الطازجة، مُحضّرة بعناية، تجمع بين الوصفات
            التقليدية والنكهات العصرية
          </p>
          <button
            type="button"
            className="order-btn mt-6"
            onClick={handleOrderNow}
          >
            <span className="order-btn-icon">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#EB1400"
                width="28"
                height="28"
              />
            </span>
            اطلب الآن
          </button>
        </div>
        <ImageCarousel />

        {/* Decorative images layer (doesn't affect layout) */}

        <img
          className="image-2 hidden md:hidden lg:block"
          src={image2}
          alt=""
        />
        <img
          className="image-3 hidden md:hidden lg:block"
          src={image3}
          alt=""
        />
        <img
          className="image-4 hidden md:hidden lg:block"
          src={image4}
          alt=""
        />
      </div>
    </section>
  );
}
export default Section;
