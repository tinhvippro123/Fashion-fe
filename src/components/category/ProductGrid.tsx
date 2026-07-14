'use client';
import { useState } from 'react';
import ProductCard, { Product } from '@/components/common/ProductCard';
import Pagination from '@/components/common/Pagination';

interface ProductGridProps {
  title: string;
  currentPage: number;
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'Áo sơ mi lụa cổ đức', 
    basePrice: 1250000, 
    isNew: true, 
    discountPercent: 50,
    productColors: [
      { id: 1, isActive: true, color: { name: 'Be', hexCode: '#e6dcc8' }, images: [{ imageUrl: '03321697-61dc-4f30-8da7-d25085a78741.webp' }] }
    ]
  },
  { 
    id: 2, 
    name: 'Đầm xòe hoa nhí', 
    basePrice: 1850000, 
    isNew: false, 
    productColors: [
      { id: 2, isActive: true, color: { name: 'Xanh dương', hexCode: '#254a7e' }, images: [{ imageUrl: '0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp' }] }
    ]
  },
  { 
    id: 3, 
    name: 'Quần âu ống suông', 
    basePrice: 850000, 
    isNew: false,
    discountPercent: 50, 
    productColors: [
      { id: 3, isActive: true, color: { name: 'Đen', hexCode: '#000000' }, images: [{ imageUrl: '0c6249e5-6b99-4739-b277-1440bdeb0561.png' }] }
    ]
  },
  { 
    id: 4, 
    name: 'Chân váy dập ly', 
    basePrice: 950000, 
    isNew: true, 
    productColors: [
      { id: 4, isActive: true, color: { name: 'Trắng', hexCode: '#FFFFFF' }, images: [{ imageUrl: '121a23af-e7f7-4e5a-8e96-65f25b8a4a3f.webp' }] }
    ]
  },
  { 
    id: 5, 
    name: 'Áo thun cotton', 
    basePrice: 450000, 
    isNew: false, 
    productColors: [
      { id: 5, isActive: true, color: { name: 'Đỏ', hexCode: '#ff0000' }, images: [{ imageUrl: '13dddff3-1a53-4b41-8b70-7c0b2ff37345.webp' }] }
    ]
  },
  { 
    id: 6, 
    name: 'Áo blazer kẻ', 
    basePrice: 2150000, 
    isNew: false,
    discountPercent: 50, 
    productColors: [
      { id: 6, isActive: true, color: { name: 'Xám', hexCode: '#696969' }, images: [{ imageUrl: '198b0924-f7c8-463c-9459-97caf17e0e80.webp' }] }
    ]
  },
  { 
    id: 7, 
    name: 'Đầm ôm đuôi cá', 
    basePrice: 1650000, 
    isNew: true, 
    productColors: [
      { id: 7, isActive: true, color: { name: 'Đen', hexCode: '#000000' }, images: [{ imageUrl: '1a273f13-e42b-4f39-a194-69123e2ad90e.webp' }] }
    ]
  },
  { 
    id: 8, 
    name: 'Quần short linen', 
    basePrice: 650000, 
    isNew: false,
    discountPercent: 50, 
    productColors: [
      { id: 8, isActive: true, color: { name: 'Vàng', hexCode: '#e8d653' }, images: [{ imageUrl: '2525fd0c-9394-410f-8bb0-8842184d6b60.webp' }] }
    ]
  }
];

export default function ProductGrid({ title, currentPage }: ProductGridProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Sắp xếp theo');

  const sortOptions = [
    { value: 'default', label: 'Mặc định' },
    { value: 'newest', label: 'Mới nhất' },
    { value: 'price_asc', label: 'Giá: thấp đến cao' },
    { value: 'price_desc', label: 'Giá: cao đến thấp' },
  ];

  return (
    <div>
      {/* Top Bar: Title & Sort/Filter Toggles */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-[24px]">
        <h2 className="font-bold m-0 mb-[16px] lg:mb-0 whitespace-nowrap uppercase text-[24px]">
          THỜI TRANG {title}
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
            <div className={`absolute top-full left-0 w-full bg-white border border-[#e5e5e5] rounded-[10px] mt-[5px] z-10 shadow-sm overflow-hidden transition-all duration-200 ${isSortOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-[10px]'}`}>
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

      {/* Product Grid */}
      <div className="flex flex-wrap -mx-[15px]">
        {mockProducts.map((product) => (
          <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-[15px] mb-[24px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={5} baseUrl={`/danh-muc/${title.toLowerCase()}`} />
    </div>
  );
}
