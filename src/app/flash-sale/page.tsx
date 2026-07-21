'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard, { Product } from '@/shared/ui/ProductCard';
import FilterSidebar from '@/features/catalog/components/category/FilterSidebar';

const womenImages = [
  '28bb2cb0-7872-451d-8f8f-612541408673.jpg',
  '30e40a10-fd10-4075-941e-53bf89b99de7.jpg',
  '47de0024-6102-43f4-b93f-079f7d367891.jpg',
  '6356198f-9afb-477b-9655-9479ee18a623.jpg',
  '72b84d29-1a7c-485b-91ea-87d98e4bdff5.jpg'
];

const generateMockProducts = (prefix: string, count: number, images: string[]): Product[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx + 1,
    name: `${prefix} Sản Phẩm Cao Cấp ${idx + 1}`,
    basePrice: 500000 + (idx * 50000),
    isNew: false,
    isBestSeller: false,
    discountPercent: 30 + (idx * 5),
    productColors: [
      {
        id: 100 + idx,
        isActive: true,
        color: { name: "Mặc định", hexCode: "#221f20" },
        images: [
          { imageUrl: images[idx % images.length] },
          { imageUrl: images[(idx + 1) % images.length] }
        ]
      }
    ]
  }));
};

const mockFlashSaleProducts = generateMockProducts("Flash Sale -", 16, womenImages);

export default function FlashSalePage() {
  const [timeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Sắp xếp theo');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const sortOptions = [
    { value: 'default', label: 'Mặc định' },
    { value: 'newest', label: 'Mới nhất' },
    { value: 'price_asc', label: 'Giá: thấp đến cao' },
    { value: 'price_desc', label: 'Giá: cao đến thấp' },
    { value: 'discount_desc', label: 'Giảm sâu nhất' },
  ];

  const categories = ['Tất cả', 'Thời trang Nữ', 'Thời trang Nam', 'Trẻ em', 'Phụ kiện', 'Đồ lót'];

  return (
    <div className="w-full bg-white min-h-screen pb-[80px]">
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto">
        {/* Breadcrumb */}
        <div className="text-[14px] font-bold uppercase border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
          <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">Trang chủ</Link>
          <span className="mx-[8px]">-</span>
          <span>Flash Sale</span>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-wrap relative">
          
          {/* Left Sidebar (Filters) */}
          <div className="hidden lg:block w-full lg:w-[25%] pr-[30px] mb-[30px] lg:mb-0">
            <FilterSidebar />
          </div>
          
          {/* Right Column: Title, Sort, Banner, and Products Grid */}
          <div className="w-full lg:w-[75%]">
            {/* Top Bar: Title & Sort/Filter Toggles */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-[20px]">
              <h2 className="font-bold m-0 mb-[16px] lg:mb-0 whitespace-nowrap uppercase text-[24px] text-[#222]">
                SIÊU SALE GIỜ VÀNG | 16 SẢN PHẨM
              </h2>
              
              <div className="flex items-center lg:justify-end flex-grow lg:ml-[24px] gap-[15px]">
                {/* Custom Sort Dropdown */}
                <div className="relative w-full lg:max-w-[250px]">
                  <button 
                    className="flex justify-between items-center w-full border border-[#e5e5e5] rounded-[25px] h-[45px] px-[20px] text-[#333] text-[15px] bg-white outline-none cursor-pointer"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                  >
                    <span>{selectedSort}</span>
                    <i className="fas fa-chevron-down text-[14px] text-[#666]"></i>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-full bg-white border border-[#e5e5e5] rounded-[10px] mt-[5px] z-50 shadow-sm overflow-hidden transition-all duration-200 ${isSortOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-[10px]'}`}>
                    {sortOptions.map(option => (
                      <div 
                        key={option.value}
                        className="px-[20px] py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] hover:text-[#000] cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedSort(option.label);
                          setIsSortOpen(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Filter Button */}
                <button className="lg:hidden flex items-center justify-center min-w-[45px] h-[45px] border border-[#e5e5e5] bg-white text-[#666] rounded-tl-[12px] rounded-br-[12px] cursor-pointer">
                  <i className="fas fa-filter"></i>
                </button>
              </div>
            </div>

            {/* Banner Inside Right Column */}
            <div className="bg-[#e10600] rounded-[12px] p-[30px] md:p-[40px] mb-[30px] text-center relative overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
              
              <h1 className="text-white text-[32px] md:text-[48px] font-black italic uppercase tracking-wider mb-[15px] relative z-10 flex items-center justify-center gap-4 shadow-text">
                <i className="fas fa-bolt text-[#ffd700]"></i>
                Siêu Sale Giờ Vàng
                <i className="fas fa-bolt text-[#ffd700]"></i>
              </h1>
              
              <p className="text-white text-[16px] mb-[20px] relative z-10 font-medium">
                Hàng ngàn sản phẩm giảm giá cực sốc. Nhanh tay kẻo lỡ!
              </p>

              <div className="flex justify-center items-center gap-3 relative z-10">
                <div className="bg-white text-[#e10600] text-[24px] font-black w-[50px] h-[50px] flex items-center justify-center rounded-[8px] shadow-md">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-white text-[24px] font-bold">:</span>
                <div className="bg-white text-[#e10600] text-[24px] font-black w-[50px] h-[50px] flex items-center justify-center rounded-[8px] shadow-md">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-white text-[24px] font-bold">:</span>
                <div className="bg-white text-[#e10600] text-[24px] font-black w-[50px] h-[50px] flex items-center justify-center rounded-[8px] shadow-md">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex overflow-x-auto gap-[15px] mb-[25px] pb-[10px] hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-[20px] py-[10px] rounded-full text-[14px] font-semibold transition-all duration-300 border ${
                    activeCategory === cat 
                    ? 'bg-[#e10600] text-white border-[#e10600] shadow-md' 
                    : 'bg-white text-[#333] border-[#e5e5e5] hover:border-[#e10600] hover:text-[#e10600]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[30px]">
              {mockFlashSaleProducts.map(product => (
                <ProductCard 
                  key={`fs-${product.id}`} 
                  product={product} 
                  isFlashSale={true}
                  soldQuantity={((product.id * 37 + 13) % 80) + 20} 
                  totalQuantity={100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
