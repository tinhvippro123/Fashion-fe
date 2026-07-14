'use client';

import { useState } from 'react';
import Link from 'next/link';
import HomeSlider from '@/components/home/HomeSlider';
import ProductSlider from '@/components/home/ProductSlider';
import { Product } from '@/components/common/ProductCard';

// Helper to generate mock data matching Product interface
const generateMockProducts = (prefix: string, count: number, images: string[]): Product[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx + 1,
    name: `${prefix} Sản Phẩm Cao Cấp ${idx + 1}`,
    basePrice: 500000 + (idx * 50000),
    isNew: idx < 2, // First 2 are NEW
    productColors: [
      {
        id: 100 + idx,
        isActive: true,
        color: { name: "Mặc định", hexCode: "#221f20" },
        images: [
          { imageUrl: images[idx % images.length] },
          { imageUrl: images[(idx + 1) % images.length] } // hover image
        ]
      }
    ]
  }));
};

const womenImages = [
  '28bb2cb0-7872-451d-8f8f-612541408673.jpg',
  '30e40a10-fd10-4075-941e-53bf89b99de7.jpg',
  '47de0024-6102-43f4-b93f-079f7d367891.jpg',
  '6356198f-9afb-477b-9655-9479ee18a623.jpg',
  '72b84d29-1a7c-485b-91ea-87d98e4bdff5.jpg'
];

const menImages = [
  '7453f60e-62c2-49cd-af4b-b5a534c16b79.jpg',
  '7dffd12e-c685-4586-83c5-5c110465e2eb.jpg',
  '83b8c14b-90b9-48da-8f9c-d68452d72d9c.jpg',
  '92958062-e371-4364-b849-2d63896a7226.jpg',
  'e6b035bf-a53b-48d0-acc9-0e8a678f6028.jpg'
];

const mockWomenProducts = generateMockProducts("Nữ -", 8, womenImages);
const mockMenProducts = generateMockProducts("Nam -", 8, menImages);

export default function Home() {
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

  return (
    <>
      <HomeSlider />

      {/* NEW ARRIVAL SECTION */}
      {/* .container-luxe style="margin-top: 30px;" */}
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto mt-[30px]">
        {/* .luxe-section-header: text-align:center, margin-bottom:25px */}
        <div className="text-center mb-[25px]">
          {/* .luxe-section-title: font-size:32px, font-weight:700, letter-spacing:3px, color:#000, margin-bottom:15px */}
          <h3 className="text-[32px] font-bold uppercase tracking-[3px] text-[#000] mb-[15px]">
            NEW ARRIVAL
          </h3>
          {/* .luxe-tab-item: font-size:18px, font-weight:400, color:#6c757d, margin:0 10px, padding:0 15px 5px */}
          {/* .luxe-tab-item.active: color:#000, font-weight:500, border-bottom:2px solid #000 */}
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab('women')}
              className={`inline-block text-[18px] font-normal uppercase transition-colors mx-[10px] px-[15px] pb-[5px] border-b-2 ${
                activeTab === 'women'
                  ? 'text-[#000] font-medium border-[#000]'
                  : 'text-[#6c757d] border-transparent hover:text-[#000]'
              }`}
            >
              WOMEN
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`inline-block text-[18px] font-normal uppercase transition-colors mx-[10px] px-[15px] pb-[5px] border-b-2 ${
                activeTab === 'men'
                  ? 'text-[#000] font-medium border-[#000]'
                  : 'text-[#6c757d] border-transparent hover:text-[#000]'
              }`}
            >
              MEN
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'women' && (
            <div className="animate-fade-in">
              <ProductSlider products={mockWomenProducts} />
              {/* .btn-luxe-see-all: bg:#fff, color:#333, border:1px solid #333, padding:12px 40px, font-size:14px, font-weight:400, border-radius:20px 0 20px 0 */}
              <div className="text-center mt-[8px]">
                <Link
                  href="/danh-muc/hang-nu-moi-ve"
                  className="inline-block px-[40px] py-[12px] bg-white border border-[#333] text-[#333] font-normal text-[14px] no-underline rounded-tl-[20px] rounded-br-[20px] transition-all duration-300 hover:bg-[#000] hover:border-[#000] hover:text-white"
                >
                  Xem tất cả
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'men' && (
            <div className="animate-fade-in">
              <ProductSlider products={mockMenProducts} />
              <div className="text-center mt-[8px]">
                <Link
                  href="/danh-muc/hang-nam-moi-ve"
                  className="inline-block px-[40px] py-[12px] bg-white border border-[#333] text-[#333] font-normal text-[14px] no-underline rounded-tl-[20px] rounded-br-[20px] transition-all duration-300 hover:bg-[#000] hover:border-[#000] hover:text-white"
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
