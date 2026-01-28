import React from "react";
import { Icon } from "@iconify/react";

const ProductCard = ({
  discount = "20%",
  image,
  title,
  description,
  price,
  oldPrice,
}) => {
  const cardWidth = 285;
  const cardHeight = 320;

  // Barrel/blob shape path
  const cardPath = `
    M 20 15
    Q ${cardWidth / 2} -8 ${cardWidth - 20} 15
    Q ${cardWidth + 8} ${cardHeight / 2} ${cardWidth - 20} ${cardHeight - 15}
    Q ${cardWidth / 2} ${cardHeight + 8} 20 ${cardHeight - 15}
    Q -8 ${cardHeight / 2} 20 15
    Z
  `;

  return (
    <div className="relative w-full max-w-[285px] mx-auto gap-4 flex flex-col">
      {/* SVG Card Shape */}
      <svg
        viewBox={`0 0 ${cardWidth} ${cardHeight}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id={`cardClip-${title.replace(/\s/g, "")}`}>
            <path d={cardPath} />
          </clipPath>
        </defs>

        {/* Card background */}
        <path
          d={cardPath}
          fill="#F7F2E2"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />

        {/* Discount badge */}
        <g transform="translate(15, 30)">
          <path d="M0 0H70L85 17.5L70 35H0V0Z" fill="red" />
          <svg
            width="96"
            height="38"
            viewBox="0 0 96 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 0.888925C5.5 0.888925 84.4411 -1.11116 91.4998 0.888925C98.5586 2.88901 94.0586 34.3889 91.4998 36.8889C88.9411 39.3889 0 36.8889 0 36.8889C1.96864 22.9186 3.0625 15.8889 5.5 0.888925Z"
              fill="#EB1400"
            />
          </svg>

          <text
            x="76"
            y="25"
            fill="#FFFFFF"
            fontSize="16"
            fontWeight="400"
            textAnchor="end"
            style={{ unicodeBidi: "plaintext" }}
          >
            {`خصم ${discount}`}
          </text>
        </g>

        {/* Product image */}
        <image
          href={image}
          x="35"
          y="45"
          width="215"
          height="160"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#cardClip-${title.replace(/\s/g, "")})`}
        />

        {/* Add to cart button - pill shape */}
        <g
          transform={`translate(${cardWidth / 2 - 70}, ${cardHeight - 55})`}
          className="cursor-pointer"
        >
          <rect className="hover:opacity-90 transition-opacity " />
          <foreignObject x="-15" y="8" width="169" height="47">
            <div className=" salla active:bg-[#EB1400]  flex items-center justify-center gap-2 w-full h-full text-white transition-colors duration-300 ease-in-out font-semibold text-sm">
              <Icon icon="mdi:cart-outline" className="text-lg text-black" />
              <span className="font-[400] md:text-[16px] text-black">
                أضف الي السلة
              </span>
            </div>
          </foreignObject>
        </g>
      </svg>

      {/* Text content below SVG */}
      <div className="text-center mt-3 px-2" dir="rtl">
        <h3 className="font-bold md:text-lg text-[14px] text-foreground coloer mb-1">
          {title}
        </h3>
        <p
          style={{ color: "#525252" }}
          className="text-muted-foreground text-sm text-[12px] line-clamp-2 mb-2"
        >
          {description}
        </p>
        <div className="flex items-center justify-center gap-3 font-cairo">
          <span
            style={{ color: "#EB1400" }}
            className="text-testimonial-orange font-bold text-[17px]"
          >
            {price} رس
          </span>
          <span
            style={{ color: "#525252" }}
            className="text-muted-foreground line-through text-sm text-[12px]"
          >
            {oldPrice} رس
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
