'use client';

import { useState } from 'react';
import Link from 'next/link';
import HomeSlider from '@/components/home/HomeSlider';
import ProductSlider from '@/components/home/ProductSlider';
import ProductCard, { Product } from '@/components/common/ProductCard';

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

// Flash Sale Mock Data
const mockFlashSaleProducts = generateMockProducts("Flash Sale -", 4, womenImages).map((p, idx) => ({
  ...p,
  isNew: false,
  isBestSeller: false,
  discountPercent: 30 + (idx * 10), // 30%, 40%, 50%, 60%
}));

const MOCK_HOME_BLOGS = [
  {
    id: 1,
    slug: 'xu-huong-thoi-trang-thu-dong-2026',
    title: 'Xu hướng thời trang Thu Đông 2026: Sự trở lại của Minimalism',
    excerpt: 'Phong cách tối giản (Minimalism) đang quay trở lại mạnh mẽ trong bộ sưu tập Thu Đông năm nay. Hãy cùng khám phá...',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    date: '20/07/2026'
  },
  {
    id: 2,
    slug: 'cach-phoi-do-voi-ao-blazer-nu',
    title: '5 Cách phối đồ với áo Blazer nữ chuẩn thanh lịch chốn công sở',
    excerpt: 'Áo blazer là item không thể thiếu trong tủ đồ của các quý cô công sở. Bài viết này sẽ mách bạn 5 cách mix&match ấn tượng...',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    date: '18/07/2026'
  },
  {
    id: 3,
    slug: 'bao-quan-do-da-dung-cach',
    title: 'Bí quyết bảo quản đồ da luôn bền đẹp như mới',
    excerpt: 'Đồ da mang lại vẻ sang trọng nhưng lại đòi hỏi sự chăm sóc kỹ lưỡng. Đừng bỏ lỡ những mẹo vệ sinh và bảo quản cực dễ...',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
    date: '15/07/2026'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

  // Simple countdown logic for visual (mock)
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });

  return (
    <>
      <HomeSlider />

      {/* FLASH SALE SECTION */}
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto mt-[40px]">
        <div className="bg-white rounded-lg p-[20px] md:p-[30px] border border-[#e10600]/20 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#f7941d]/10 rounded-bl-full -z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-[20px] relative z-10">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <h3 className="text-[28px] font-bold text-[#e10600] italic flex items-center gap-2 uppercase tracking-wide">
                <i className="fas fa-bolt"></i>
                Flash Sale
              </h3>
              <div className="flex gap-2">
                <div className="bg-[#e10600] text-white font-bold text-[18px] w-[40px] h-[40px] flex items-center justify-center rounded">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-[#e10600] font-bold text-[24px]">:</span>
                <div className="bg-[#e10600] text-white font-bold text-[18px] w-[40px] h-[40px] flex items-center justify-center rounded">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-[#e10600] font-bold text-[24px]">:</span>
                <div className="bg-[#e10600] text-white font-bold text-[18px] w-[40px] h-[40px] flex items-center justify-center rounded">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>
            <Link href="/flash-sale" className="text-[#333] hover:text-[#e10600] font-medium transition-colors flex items-center gap-1">
              Xem tất cả <i className="fas fa-chevron-right text-[12px]"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[30px] relative z-10">
            {mockFlashSaleProducts.map(product => (
              <ProductCard key={`fs-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </div>

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

      {/* BLOGS SECTION */}
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto mt-[60px] mb-[60px]">
        <div className="text-center mb-[30px]">
          <h3 className="text-[32px] font-bold uppercase tracking-[3px] text-[#000] mb-[10px]">
            LUXE BLOG
          </h3>
          <p className="text-[#6c757d]">Cập nhật tin tức & xu hướng thời trang mới nhất</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {MOCK_HOME_BLOGS.map((blog) => (
            <article key={blog.id} className="group">
              <Link href={`/blogs/${blog.slug}`} className="block relative aspect-[4/3] overflow-hidden rounded-[8px] mb-[15px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div>
                <div className="text-[12px] text-[#999] mb-[5px] uppercase tracking-wider">
                  <i className="far fa-calendar-alt mr-1"></i> {blog.date}
                </div>
                <h4 className="text-[18px] font-bold text-[#000] mb-[10px] leading-tight line-clamp-2">
                  <Link href={`/blogs/${blog.slug}`} className="hover:text-[#f7941d] transition-colors">
                    {blog.title}
                  </Link>
                </h4>
                <p className="text-[#666] text-[14px] line-clamp-2 mb-[15px]">
                  {blog.excerpt}
                </p>
                <Link 
                  href={`/blogs/${blog.slug}`}
                  className="text-[#000] font-bold text-[13px] uppercase border-b-[2px] border-[#000] pb-[2px] hover:text-[#f7941d] hover:border-[#f7941d] transition-all"
                >
                  Đọc tiếp
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-[40px]">
          <Link 
            href="/blogs" 
            className="inline-block px-[40px] py-[12px] bg-white border border-[#333] text-[#333] font-normal text-[14px] uppercase tracking-[1px] no-underline rounded-tl-[20px] rounded-br-[20px] transition-all duration-300 hover:bg-[#000] hover:border-[#000] hover:text-white"
          >
            Xem tất cả bài viết
          </Link>
        </div>
      </div>
    </>
  );
}
