/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              ABOUT US ?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              The National Aeronautics and Space Administration is America’s civil space program and the global leader in space exploration. The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S. contractors, academia, and international and commercial partners to explore, discover, and expand knowledge for the benefit of humanity.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.nasa.gov/about/index.html"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  More About NASA
                </a>
                {/* <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-30 b-auto right-0 pt-16 sm:w-6/12 -mt-52 sm:mt-0 w-10/12 max-h-860px"
          src="https://images.unsplash.com/photo-1614728611996-806169502cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80 "/>
      </section>

      

      

      

      
      <Footer />
    </>
  );
}
