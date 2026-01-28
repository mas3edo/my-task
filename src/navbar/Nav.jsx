import { Icon } from "@iconify/react";
import "./Nav.css";
import logo from "../images/Logo.png";
import { useState } from "react";

function Nav() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="navbar flex justify-center items-center">
      <div className="container flex justify-center items-center">
        <div className="main-2 flex justify-between items-center w-full py-6 mt-10">
          <div className="icons">
            <ul className="icons flex space-x-2 sm:space-x-2">
              <li className="md:block  lg:hidden">
                <span
                  onClick={() => setCategoriesOpen((v) => !v)}
                  style={{ cursor: "pointer" }}
                >
                  <Icon
                    icon="charm:menu-hamburger"
                    style={{ width: 30, height: 30 }}
                  />
                </span>
              </li>

              <li className="rounded-full flex items-center justify-center border border-gray-300">
                <a
                  className="flex items-center justify-center"
                  href="/profile"
                  aria-label="Profile"
                >
                  <Icon icon="iconamoon:profile-thin" />
                </a>
              </li>
              <li className="rounded-full flex items-center justify-center border border-gray-300">
                <a
                  className="flex items-center justify-center"
                  href="/cart"
                  aria-label="Cart"
                >
                  <Icon icon="mdi-light:cart" />
                </a>
              </li>
              <li className="rounded-full flex items-center justify-center border border-gray-300 hidden md:block">
                <a
                  className="flex items-center justify-center"
                  href="/favorites"
                  aria-label="Favorites"
                >
                  <Icon icon="iconamoon:heart-thin" />
                </a>
              </li>
              <li className="rounded-full flex items-center justify-center border border-gray-300">
                <a
                  className=" flex items-center justify-center"
                  href="/search"
                  aria-label="Search"
                >
                  <Icon icon="material-symbols-light:search" />
                </a>
              </li>
            </ul>
          </div>
          <div className="categories hidden md:hidden lg:block">
            <ul className="categories flex  items-center ">
              <li>
                <a href="#about"> المدونة</a>
              </li>
              <li>
                <a href="#contact"> العروض والخصومات</a>
              </li>
              <li>
                <a href="#desserts">قائمة الطعام</a>
              </li>
              <li>
                <a href="#menu">الأطباق الرئيسية</a>
              </li>
              <li className="relative flex items-center">
                <span
                  className="pointer"
                  style={{
                    fontSize: "18px",
                    paddingBottom: "3px",
                    cursor: "pointer",
                    position: "relative",
                    top: "-3px",
                  }}
                  onMouseEnter={(e) => {
                    const dropdown =
                      e.currentTarget.parentElement.querySelector(
                        ".option-vision",
                      );
                    if (dropdown) {
                      dropdown.style.opacity = "1";
                      dropdown.style.transform = "scale(1)";
                      dropdown.style.pointerEvents = "auto";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const dropdown =
                      e.currentTarget.parentElement.querySelector(
                        ".option-vision",
                      );
                    if (dropdown) {
                      dropdown.style.opacity = "0";
                      dropdown.style.transform = "scale(0.95)";
                      dropdown.style.pointerEvents = "none";
                    }
                  }}
                >
                  ⌄
                </span>
                <a href="/home"> الرئيسية </a>
                <span
                  className="option-vision transition-all duration-300 ease-in-out opacity-0 scale-95 block absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 p-2 min-w-[80px] text-center"
                  style={{
                    pointerEvents: "none",
                    marginTop: "115px",
                    marginLeft: "-40px",
                  }}
                >
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
          {/* Tablet & Mobile categories dropdown */}
          {categoriesOpen && window.innerWidth < 1024 && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-start pt-24 animate-fade-in">
              <div className="bg-white rounded shadow-lg p-6 w-11/12 max-w-xs animate-mobile-menu-in">
                <ul className="flex flex-col space-y-4 text-center">
                  <li>
                    <a href="#about"> المدونة</a>
                  </li>
                  <li>
                    <a href="#contact"> العروض والخصومات</a>
                  </li>
                  <li>
                    <a href="#desserts">قائمة الطعام</a>
                  </li>
                  <li>
                    <a href="#menu">الأطباق الرئيسية</a>
                  </li>
                  <li className="relative flex flex-col items-center">
                    <span
                      className="pointer"
                      style={{
                        fontSize: "18px",
                        paddingBottom: "3px",
                        cursor: "pointer",
                        position: "relative",
                        top: "-3px",
                      }}
                    >
                      ⌄
                    </span>
                    <a href="/home"> الرئيسية </a>
                    <span className="option-vision block mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 p-2 min-w-[80px] text-center">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </span>
                  </li>
                </ul>
                <button
                  className="mt-6 w-full py-2 rounded bg-gray-200 hover:bg-gray-300"
                  onClick={() => setCategoriesOpen(false)}
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}
          <a href="/home" className="logo flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", width: "auto" }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
