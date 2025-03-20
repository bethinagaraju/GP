import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import Swiper core and required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import Swiper core
import SwiperCore from "swiper";

// Install the modules
SwiperCore.use([Autoplay, Pagination, EffectFade]);

const ClientsSlider = () => {
  return (
    <section id="clients" className="clients section">
      <div className="container" style={{ padding: "60px" }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          loop={true}
          speed={300}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView="auto"
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          }}
        >
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-2.png" className="img-fluid" alt="Client 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-3.png" className="img-fluid" alt="Client 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-4.png" className="img-fluid" alt="Client 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-5.png" className="img-fluid" alt="Client 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-6.png" className="img-fluid" alt="Client 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-1.png" className="img-fluid" alt="Client 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-7.png" className="img-fluid" alt="Client 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/clients/client-8.png" className="img-fluid" alt="Client 8" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default ClientsSlider;

