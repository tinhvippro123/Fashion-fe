'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard, { Product } from '@/components/common/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 italic">Sản phẩm mới đang được cập nhật...</p>
      </div>
    );
  }

  return (
    <div className="relative group product-slider-container px-[20px] lg:px-[40px]">
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: '.product-swiper-button-next',
          prevEl: '.product-swiper-button-prev',
        }}
        modules={[Navigation]}
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // Tablet
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // Desktop
          800: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="product-swiper-button-prev absolute top-[40%] left-0 -translate-y-1/2 z-10 w-[35px] h-[35px] bg-white text-[#333] flex items-center justify-center rounded-full cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#f8f9fa]">
        <i className="fas fa-chevron-left text-[16px]"></i>
      </div>
      <div className="product-swiper-button-next absolute top-[40%] right-0 -translate-y-1/2 z-10 w-[35px] h-[35px] bg-white text-[#333] flex items-center justify-center rounded-full cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#f8f9fa]">
        <i className="fas fa-chevron-right text-[16px]"></i>
      </div>
    </div>
  );
}
