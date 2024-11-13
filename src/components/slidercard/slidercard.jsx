import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Reviewcard from './reviewcard';
import reviewcardData from './reviewcardData';

function Slidercard() {
    console.log(reviewcardData[0].img)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500,
        // cssEase: "linear",
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                 
                }
              },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
               
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  
                  
                }
              },
         
            
          ]
      };

  return (
    <div className="slide container m-auto  mb-1 shadow p-3">
        <div className='fff'>
        <Slider className='' {...settings}>
            <div className='card33'>
            <Reviewcard src={reviewcardData[0].img}
            name={reviewcardData[0].name}
            description={reviewcardData[0].reviews}
            />
            </div>
            <div className='card33'>
            <Reviewcard src={reviewcardData[1].img}
            name={reviewcardData[1].name}
            description={reviewcardData[1].reviews}
            />
            </div>
            <div className='card33'>
            <Reviewcard src={reviewcardData[2].img}
            name={reviewcardData[2].name}
            description={reviewcardData[2].reviews}
            />
            </div>
            <div className='card33'>
            <Reviewcard src={reviewcardData[3].img}
            name={reviewcardData[3].name}
            description={reviewcardData[3].reviews}
            />
            </div>
    </Slider>
    </div>
    </div> 
  )
}

export default Slidercard

