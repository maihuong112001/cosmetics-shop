import { ArrowButton } from "@/components/Button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export const bannerSettings = {
          dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              customPaging: function() {
                return (
                  <button ></button>
                )
              }
        }
        
export const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          nextArrow: <ArrowButton small right circle><RightOutlined/></ArrowButton>,
          prevArrow: <ArrowButton small left circle><LeftOutlined/></ArrowButton>,
          responsive: [
            {
        
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}