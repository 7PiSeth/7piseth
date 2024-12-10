import React, { useEffect } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import calculator from "./assets/project/calculator.png";
import itphnomden from "./assets/project/it-phnomden.jpg";
import portfolio from "./assets/project/portfolio.png";
import khlakhlouk from "./assets/project/khlakhlouk.png";
import dictionary from "./assets/project/dictionary.png";
import music from "./assets/project/music.png";
import prediction from "./assets/project/prediction.png";
import devutil from "./assets/project/dev-util.png";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 0,
    imgSrc: itphnomden,
    demoLink: 'https://7piseth.github.io/it-phnomden/',
    sourceLink: 'https://github.com/7piseth/it-phnomden'
  }, {
    id: 1,
    imgSrc: calculator,
    demoLink: 'https://7piseth.github.io/easy-calculate/',
    sourceLink: 'https://github.com/7piseth/easy-calculate'
  }, {
    id: 2,
    imgSrc: portfolio,
    demoLink: 'https://7piseth.github.io/maportfolio/',
    sourceLink: 'https://github.com/7piseth/maportfolio'
  }, {
    id: 3,
    imgSrc: khlakhlouk,
    demoLink: 'https://7piseth.github.io/khla-khlouk/',
    sourceLink: 'https://github.com/7piseth/khla-khlouk'
  }
  , {
    id: 4,
    imgSrc: prediction,
    demoLink: 'https://7piseth.github.io/khmer-horoscope/',
    sourceLink: 'https://github.com/7piseth/khmer-horoscope'
  }, {
    id: 5,
    imgSrc: dictionary,
    demoLink: 'https://7piseth.github.io/dictionary/',
    sourceLink: 'https://github.com/7piseth/dictionary'
  }, {
    id: 6,
    imgSrc: music,
    demoLink: 'https://7piseth.github.io/jomreang/',
    sourceLink: 'https://github.com/7piseth/jomreang'
  }, {
    id: 7,
    imgSrc: devutil,
    demoLink: 'https://7piseth.github.io/dev-util/',
    sourceLink: 'https://github.com/7piseth/dev-util'
  }
]

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, anchorPlacement: "top-bottom" });
    AOS.refresh();
  }, []);
  return (
    <div>
      <TopBar />
      <div className="max-w-screen-lg h-screen mx-auto px-5 flex items-center justify-center">
      <div data-aos="fade-down" data-aos-offset="100"
          className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {
            projects.map(({ id, imgSrc, demoLink, sourceLink }) => (
              <div key={id}
                className="rounded-2xl p-4 text-center bg-[#F4F6F8] dark:bg-[#161B22] flex flex-col items-center"
              >
                <img src={imgSrc} alt="Calculator.png"
                className="h-40 object-contain"
                />
                <div className="flex space-x-6" id="check-out">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">Live</a>
                  <a href={sourceLink} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;