'use client';

import { useState } from 'react';
import { ProductDetail } from '@/features/catalog/types/product';

interface ProductTabsProps {
  product: ProductDetail;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'intro' | 'detail' | 'preserve'>('intro');
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  return (
    <div className="mt-[32px]">
      {/* Tab Headers */}
      <ul className="flex gap-[30px] border-b border-[#f0f0f0] mb-[24px]">
        <li>
          <button
            onClick={() => setActiveTab('intro')}
            className={`pb-[8px] text-[13px] font-bold uppercase transition-colors ${
              activeTab === 'intro' 
                ? 'text-[#222] border-b-2 border-[#000]' 
                : 'text-[#6c757d] hover:text-[#222] border-b-2 border-transparent'
            }`}
          >
            Giới thiệu
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab('detail')}
            className={`pb-[8px] text-[13px] font-bold uppercase transition-colors ${
              activeTab === 'detail' 
                ? 'text-[#222] border-b-2 border-[#000]' 
                : 'text-[#6c757d] hover:text-[#222] border-b-2 border-transparent'
            }`}
          >
            Chi tiết sản phẩm
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab('preserve')}
            className={`pb-[8px] text-[13px] font-bold uppercase transition-colors ${
              activeTab === 'preserve' 
                ? 'text-[#222] border-b-2 border-[#000]' 
                : 'text-[#6c757d] hover:text-[#222] border-b-2 border-transparent'
            }`}
          >
            Bảo quản
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'intro' && (
          <div className="animate-fadeIn">
            <div 
              className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
                isDescExpanded ? 'max-h-[1000px]' : 'max-h-[150px]'
              }`}
            >
              <div className="text-[#6c757d] text-[14px] leading-[1.8] whitespace-pre-line">
                {product.description}
              </div>
            </div>
            
            {/* Toggle Button */}
            <div className="text-center mt-[16px] relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#eee] -z-10"></div>
              <button 
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="bg-white border border-[#eee] rounded-full w-[30px] h-[30px] flex items-center justify-center mx-auto hover:bg-gray-50 transition-colors"
              >
                <i className={`fas fa-chevron-${isDescExpanded ? 'up' : 'down'} text-[#666] text-[12px]`}></i>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'detail' && (
          <div className="text-[#6c757d] text-[14px] leading-[1.8] animate-fadeIn">
            Thông tin chi tiết đang được cập nhật.
          </div>
        )}

        {activeTab === 'preserve' && (
          <div className="text-[#6c757d] text-[14px] leading-[1.8] animate-fadeIn">
            Thông tin bảo quản đang được cập nhật.
          </div>
        )}
      </div>
    </div>
  );
}
