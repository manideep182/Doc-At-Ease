/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            NASA
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    NASA
                  </Link>
                
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                  <li className="flex items-center">
                    <img src='data:image/png;base64,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' width={125} height={125}></img>
                  </li>
                </ul> 
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Widgets
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-cloud mr-2 text-sm no-underline" +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Weather
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-satellite mr-2 text-sm no-underline" +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Satellites
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-users mr-2 text-sm no-underline" +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Astronauts
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm no-underline" +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li>
            </ul>

            {/* Divider */}
             {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6> */}
            {/* Navigation */}

            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm no-underline"></i>{" "}
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm no-underline"></i>{" "}
                  Register
                </Link>
              </li>
            </ul> */}
    
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold blockpt-1 pb-4 no-underline">
              Extra
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/landing"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Landing Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/profile"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profile Page
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6> */}
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-link mr-2 text-blueGray-300 text-base"></i>
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
                  VueJS
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
