import Slider from "react-slick";
import DestinationCard from "./DestinationCard";

function DestinationList({ destinations, onToggleStatus }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
      {destinations.map((dest, index) => (
        <DestinationCard 
          key={index} 
          destination={dest} 
          onToggleStatus={onToggleStatus}/>
      ))}
      </Slider>
    </div>
  );
}

export default DestinationList;