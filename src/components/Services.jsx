
import Slider from "react-slick";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ACHIEVEMENTS } from "../constants";

const Services = () => {
    var settings = {
      
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    
    <div>
      <div className="tracking-wider text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl dark:text-white justify-center-between" >Achievements</div>
      <div className="w-11/12 m-auto">
        <div className="mt-20 ">
            <Slider{...settings}>
          {ACHIEVEMENTS.map((d) => (
            <div key={d.id}className="bg-slate-300 text-slate-600 rounded-xl h-[375px] ">
              <div className="flex justify-center bg-indigo-950 rounded-t-xl">
                <img src={d.image} className="h-44 w-44"/>
              </div>
              <div className="flex flex-col justify items-center gap-4 p-4">
                <p className="text-xl font-semibold text-blue-950">{d.title}</p>
                <p className="text-justify flex justify-center text-wrap text-sm text-gray-800">{d.description}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
