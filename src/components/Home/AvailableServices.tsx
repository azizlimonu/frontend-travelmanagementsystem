"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useGetServicesQuery } from "@/redux/api/features/service/servicesApi";
import { iServices } from "@/interface/api";

import Title from "../UI/Title";
import BannerCardOne from "../Card/BannerCardOne";
import Loader from "../Layouts/Loader";

const AvailableServices = () => {
  const { data, isLoading } = useGetServicesQuery({
    availabilityType: "AVAILABLE",
  });
  console.log("DATA", data);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto z-50">
      <Title top="Choose Your" title="Tour" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          reverseDirection: true,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={40}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <div>
          {data?.data?.data?.length > 0 &&
            data.data.data.map((service: iServices) => (
              <SwiperSlide key={service.id}>
                <BannerCardOne service={service} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default AvailableServices;
