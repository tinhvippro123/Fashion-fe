'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomeSlider() {
  const banners = [
    { id: 1, image: '/client/img/banner-1.jpg', url: '/danh-muc/hang-nu-moi-ve' },
    { id: 2, image: '/client/img/banner-2.jpg', url: '/danh-muc/hang-nam-moi-ve' },
  ];

  return (
    <div className="w-full lg:px-[85px] px-[15px] mx-auto mb-[3rem]">
      <div className="relative group">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-auto"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Link href={banner.url} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={banner.image} alt={`Banner ${banner.id}`} className="block w-full h-auto object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-[10px] -translate-y-1/2 z-10 w-[40px] h-[40px] bg-white/50 text-[#333] flex items-center justify-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
          <i className="fas fa-chevron-left text-[20px]"></i>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-[10px] -translate-y-1/2 z-10 w-[40px] h-[40px] bg-white/50 text-[#333] flex items-center justify-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
          <i className="fas fa-chevron-right text-[20px]"></i>
        </div>
      </div>
      
      {/* Global overrides for Swiper pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 30px;
          height: 3px;
          border-radius: 0;
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fff;
        }
      `}</style>
    </div>
  );
}
