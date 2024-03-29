import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

function Home() {
  return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-b from-slate-50 to-amber-200">
      <header className="flex justify-center">
        <img src={logo} width={400} />
      </header>

      <section className="sm:flex sm:flex-row sm:justify-center flex flex-col items-center justify-center">
        {/* left section */}
        {/* left image */}
        <div className="sm:max-w-[700px] w-auto">
          {/* <img src={img1} alt="tropy" width={800} className="object-scale-down" /> */}
          <img
            class="h-[300px] max-w-full sm:h-auto"
            src={img1}
            alt="image description"
          />
        </div>

        {/* right section */}
        <div className="right flex flex-col items-center">
          {/* right heading */}
          <h1 className="sm:text-md sm:align-left sm:py-3 sm:font-bold text-center text-md font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          {/* right list */}
          <ui>
            <li className="sm:text-sm sm:text-left p-2 text:sm">
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li className="sm:text-sm sm:text-left p-2 text:sm">
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ui>
          {/* right image   */}
          <img src={img2} alt="tropy-handling" width={1000} className="py-2" />
          <p className="sm:text-sm sm:text-left p-2 text:sm">
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </section>

      {/* Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors */}

      <div className="section p-2 flex flex-col items-center">
        <p className="text-md text-center py-5">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img
          src={img3}
          alt="Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors"
          width={1000}
        />
        <p className="text-center p-3">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
        <div className="w-full bg-red-600 my-3 h-[2px]"></div>
      </div>

      {/* C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS */}

      <section className="flex flex-col items-center py-1">
        <h1 className="font-bold my-2">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>
        <p className="text-center my-2 text-sm">
          CHEMICALS <span className="text-red-600">|</span> PROCESS POWER WATER{" "}
          <span className="text-red-600">|</span> WASTE WATER OILS{" "}
          <span className="text-red-600">|</span> GAS PHARMA SUGARS
          <span className="text-red-600">|</span> DISTILLERIES PAPER{" "}
          <span className="text-red-600">|</span> PULP MARINE{" "}
          <span className="text-red-600">|</span> DEFENCE METAL{" "}
          <span className="text-red-600">|</span> MINING FOOD{" "}
          <span className="text-red-600">|</span>
          BEVERAGE PETROCHEMICAL <span className="text-red-600">|</span>{" "}
          REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE{" "}
          <span className="text-red-600">|</span> RESIDENTIAL
        </p>
      </section>

      {/* footer section */}
      <footer className="bg-red-600 h-[80px] flex flex-row justify-around items-center ">
        <a href="tel:+4733378901" className="flex flex-row ">
          <LocalPhoneRoundedIcon />
          <div className="sm:block hidden">
            Toll free <b>1800 200 1234</b>
          </div>
        </a>
        <a className="flex flex-row" href="https://www.facebook.com/cripumps">
          <FacebookIcon />
          <div className="sm:block hidden">
            https://www.facebook.com/cripump
          </div>
        </a>
        <a className="flex flex-row" href="https://www.crigroups.com">
          <LanguageRoundedIcon />
          <div className="sm:block hidden">https://www.crigroups.com</div>
        </a>
      </footer>
    </div>
  );
}

export default Home;
