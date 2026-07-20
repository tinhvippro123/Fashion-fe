'use client';
import { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  { name: 'Đen', code: '#000000' },
  { name: 'Trắng', code: '#FFFFFF' },
  { name: 'Xanh dương', code: '#254a7e' },
  { name: 'Vàng', code: '#e8d653' },
  { name: 'Hồng', code: '#f07da0' },
  { name: 'Đỏ', code: '#ff0000' },
  { name: 'Xám', code: '#696969' },
  { name: 'Be', code: '#e6dcc8' },
  { name: 'Nâu', code: '#6f4e37' },
  { name: 'Xanh lá', code: '#2e6b47' },
  { name: 'Cam', code: '#f28e2b' },
  { name: 'Tím', code: '#917fb0' }
];

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    size: false,
    color: false,
    price: false
  });
  
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      {/* Size Filter */}
      <div className="filter-group">
        <div 
          className="flex justify-between items-center py-[20px] border-b border-[#e1e1e1] font-semibold text-[14px] uppercase cursor-pointer"
          onClick={() => toggleSection('size')}
        >
          <span>Size</span>
          <i className={`fas fa-${expandedSections['size'] ? 'minus' : 'plus'} text-[#333] transition-transform`}></i>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${expandedSections['size'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-wrap gap-[10px] pt-[10px] pb-[10px]">
            {sizes.map(s => (
              <div key={s} className="relative">
                <input 
                  type="checkbox" 
                  id={`size-${s}`} 
                  className="hidden peer"
                  checked={selectedSizes.includes(s)}
                  onChange={() => toggleSize(s)}
                />
                <label 
                  htmlFor={`size-${s}`}
                  className="flex justify-center items-center min-w-[50px] h-[35px] border border-[#ddd] text-[#666] text-[13px] font-semibold cursor-pointer rounded-[4px] bg-white transition-all duration-200 peer-checked:border-[#000] peer-checked:bg-[#000] peer-checked:text-white hover:border-[#000] hover:text-[#000]"
                >
                  {s}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color Filter */}
      <div className="filter-group">
        <div 
          className="flex justify-between items-center py-[20px] border-b border-[#e1e1e1] font-semibold text-[14px] uppercase cursor-pointer"
          onClick={() => toggleSection('color')}
        >
          <span>Màu sắc</span>
          <i className={`fas fa-${expandedSections['color'] ? 'minus' : 'plus'} text-[#333] transition-transform`}></i>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${expandedSections['color'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-wrap gap-[10px] pt-[10px] pb-[10px]">
            {colors.map(c => (
              <div key={c.name} className="relative group">
                <input 
                  type="checkbox" 
                  id={`color-${c.name}`} 
                  className="hidden peer"
                  checked={selectedColors.includes(c.name)}
                  onChange={() => toggleColor(c.name)}
                />
                <label 
                  htmlFor={`color-${c.name}`}
                  className="block w-[30px] h-[30px] rounded-full border border-[#ddd] cursor-pointer relative transition-all duration-200 peer-checked:border-[#000] peer-checked:scale-110 hover:scale-110"
                  style={{ backgroundColor: c.code }}
                  title={c.name}
                >
                  {/* Active Indicator Checkmark */}
                  {selectedColors.includes(c.name) && (
                    <i className={`fas fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] ${c.code === '#FFFFFF' || c.code === '#e6dcc8' ? 'text-black' : 'text-white'}`}></i>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price Filter (Simplified visual representation for now) */}
      <div className="filter-group">
        <div 
          className="flex justify-between items-center py-[20px] border-b border-[#e1e1e1] font-semibold text-[14px] uppercase cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <span>Mức giá</span>
          <i className={`fas fa-${expandedSections['price'] ? 'minus' : 'plus'} text-[#333] transition-transform`}></i>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${expandedSections['price'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-[8px] pb-[12px] pt-[20px]">
            {/* Custom Dual Slider Mockup matching the Nouislider look */}
            <div className="relative h-[4px] bg-[#e9ecef] rounded-[2px] mb-[15px]">
              <div className="absolute top-0 bottom-0 left-[0%] right-[0%] bg-[#000] rounded-[2px]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[0%] w-[16px] h-[16px] bg-white border border-[#000] rounded-full cursor-pointer shadow-sm -ml-[8px]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[0%] w-[16px] h-[16px] bg-white border border-[#000] rounded-full cursor-pointer shadow-sm -mr-[8px]"></div>
            </div>
            <div className="flex justify-between text-[14px] text-[#333]">
              <span>0đ</span>
              <span>10.000.000đ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Discount & Advanced Filters (Mocks from original) */}
      <div className="filter-group">
        <div className="flex justify-between items-center py-[20px] border-b border-[#e1e1e1] font-semibold text-[14px] uppercase cursor-pointer">
          <span>Mức chiết khấu</span>
          <i className="fas fa-plus text-[#333]"></i>
        </div>
      </div>
      <div className="filter-group">
        <div className="flex justify-between items-center py-[20px] border-b border-[#e1e1e1] font-semibold text-[14px] uppercase cursor-pointer">
          <span>Nâng cao</span>
          <i className="fas fa-plus text-[#333]"></i>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-[48px] flex justify-between">
        <button type="button" className="inline-flex justify-center items-center w-[48%] h-[40px] bg-white text-[#333] border border-[#333] text-[13px] font-semibold uppercase rounded-tl-[12px] rounded-br-[12px] transition-all duration-300 hover:bg-[#f9f9f9] hover:text-[#000]">
          BỎ LỌC
        </button>
        <button type="button" className="inline-flex justify-center items-center w-[48%] h-[40px] bg-[#222] text-white border border-[#222] text-[13px] font-bold uppercase rounded-tl-[12px] rounded-br-[12px] transition-all duration-300 hover:bg-[#000] cursor-pointer">
          LỌC
        </button>
      </div>
    </form>
  );
}
