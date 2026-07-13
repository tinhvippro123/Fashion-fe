'use client';

import { useState } from 'react';
import Link from 'next/link';
import HomeSlider from '@/components/home/HomeSlider';
import ProductSlider from '@/components/home/ProductSlider';
import { Product } from '@/components/common/ProductCard';

// Mock Data
const generateMockProducts = (prefix: string, count: number): Product[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx + 1,
    name: `${prefix} Sản Phẩm Cao Cấp ${idx + 1}`,
    basePrice: 500000 + (idx * 50000),
    isNew: idx < 2, // First 2 are NEW
    productColors: [
      {
        id: 100 + idx,
        isActive: true,
        color: { name: "Trắng", hexCode: "#ffffff" },
        images: [] // Empty -> will use placeholder default image as requested
      },
      {
        id: 200 + idx,
        isActive: true,
        color: { name: "Đen", hexCode: "#000000" },
        images: [] 
      }
    ]
  }));
};

const mockWomenProducts = generateMockProducts("Nữ -", 8);
const mockMenProducts = generateMockProducts("Nam -", 8);

export default function Home() {
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

  return (
    <>
      <HomeSlider />

      <div className="w-full lg:px-[85px] px-[15px] mx-auto mt-[30px] mb-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[25px]">
          <h3 className="text-[#333] font-bold text-[24px] uppercase mb-[15px] tracking-[1px]">NEW ARRIVAL</h3>
          <div className="flex justify-center border-b border-[#eee]">
            <button
              onClick={() => setActiveTab('women')}
              className={`px-[20px] py-[10px] text-[15px] font-bold uppercase transition-colors bg-transparent border-none cursor-pointer relative ${
                activeTab === 'women' ? 'text-[#000] border-b-[2px] border-[#000] -mb-[1px]' : 'text-[#999] hover:text-[#333]'
              }`}
            >
              WOMEN
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`px-[20px] py-[10px] text-[15px] font-bold uppercase transition-colors bg-transparent border-none cursor-pointer relative ${
                activeTab === 'men' ? 'text-[#000] border-b-[2px] border-[#000] -mb-[1px]' : 'text-[#999] hover:text-[#333]'
              }`}
            >
              MEN
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-[30px]">
          {activeTab === 'women' && (
            <div className="animate-fade-in">
              <ProductSlider products={mockWomenProducts} />
              <div className="text-center mt-[20px]">
                <Link 
                  href="/danh-muc/hang-nu-moi-ve" 
                  className="inline-block px-[40px] py-[12px] bg-white border border-[#333] text-[#333] font-semibold text-[14px] uppercase tracking-[1px] hover:bg-[#333] hover:text-white transition-colors duration-300 rounded-[20px_0_20px_0]"
                >
                  Xem tất cả
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'men' && (
            <div className="animate-fade-in">
              <ProductSlider products={mockMenProducts} />
              <div className="text-center mt-[20px]">
                <Link 
                  href="/danh-muc/hang-nam-moi-ve" 
                  className="inline-block px-[40px] py-[12px] bg-white border border-[#333] text-[#333] font-semibold text-[14px] uppercase tracking-[1px] hover:bg-[#333] hover:text-white transition-colors duration-300 rounded-[20px_0_20px_0]"
                >
                  Xem tất cả
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
