'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductDetail, ProductColor } from '@/types/product';
import SizeGuideModal from './SizeGuideModal';
import { useCartStore } from '@/store/useCartStore';

interface ProductInfoProps {
  product: ProductDetail;
  selectedColor: ProductColor;
  onColorChange: (colorId: number) => void;
}

export default function ProductInfo({ product, selectedColor, onColorChange }: ProductInfoProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeError, setSizeError] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const { addItem, showSuccessModal } = useCartStore();
  const router = useRouter();

  const handleQtyChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!selectedVariantId) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    
    const variant = selectedColor.variants.find(v => v.id === selectedVariantId);
    if (variant) {
      addItem(product, selectedColor, variant, quantity);
      showSuccessModal();
    }
  };

  const handleBuyNow = () => {
    if (!selectedVariantId) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    
    const variant = selectedColor.variants.find(v => v.id === selectedVariantId);
    if (variant) {
      addItem(product, selectedColor, variant, quantity);
      router.push('/cart');
    }
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="font-bold text-uppercase mb-[16px] text-[28px] text-[#222]">
        {product.name}
      </h2>

      {/* Meta Info */}
      <div className="flex items-center mb-[24px] text-[#6c757d] text-[14px]">
        <div className="mr-[24px]">
          <span>SKU: {product.id}M9377</span>
        </div>
        <div className="flex items-center">
          <div className="text-[#ffc107] mr-[8px]">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <span>(0 đánh giá)</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center mb-[24px]">
        <div className="font-bold text-[24px] text-[#222]">
          {product.basePrice.toLocaleString('vi-VN')}đ
        </div>
      </div>

      {/* Colors */}
      <div className="mb-[24px] mt-[16px]">
        <div className="mb-[8px] text-[18px]">
          <span className="font-bold text-[#222]">Màu sắc:</span>{' '}
          <span className="text-[#333]">{selectedColor.color.name}</span>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {product.productColors.map((pc) => {
            if (!pc.isActive) return null;
            const isSelected = pc.id === selectedColor.id;
            return (
              <button
                key={pc.id}
                onClick={() => {
                  onColorChange(pc.id);
                  setSelectedVariantId(null);
                  setSizeError(false);
                }}
                className={`relative w-[20px] h-[20px] rounded-full border transition-transform duration-200 hover:scale-110 ${
                  pc.color.hexCode === '#FFFFFF' ? 'border-[#ccc]' : 'border-transparent'
                }`}
                style={{ backgroundColor: pc.color.hexCode }}
                title={pc.color.name}
              >
                {isSelected && (
                  <i 
                    className="fas fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-white mix-blend-difference"
                  ></i>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-[24px]">
        <div className="mb-[16px]">
          <div className="flex flex-wrap gap-[8px]">
            {selectedColor.variants.map((variant) => {
              const isOutOfStock = variant.stock <= 0;
              const isSelected = selectedVariantId === variant.id;
              
              return (
                <button
                  key={variant.id}
                  disabled={isOutOfStock}
                  onClick={() => {
                    setSelectedVariantId(variant.id);
                    setSizeError(false);
                  }}
                  title={isOutOfStock ? 'Hết hàng' : `Còn ${variant.stock}`}
                  className={`min-w-[40px] h-[40px] leading-[38px] text-center border text-[14px] transition-colors ${
                    isOutOfStock 
                      ? 'bg-[#f8f9fa] text-[#ccc] border-[#eee] line-through cursor-not-allowed'
                      : isSelected 
                        ? 'border-[#000] text-[#000] font-bold'
                        : 'border-[#ddd] text-[#999] hover:border-[#000] hover:text-[#000]'
                  }`}
                >
                  {variant.size.name}
                </button>
              );
            })}
          </div>
          
          {sizeError && (
            <div className="text-[#dc3545] mt-[8px] text-[13px]">
              <i className="fas fa-exclamation-circle mr-[4px]"></i> 
              Vui lòng chọn kích cỡ (Size)
            </div>
          )}
          
          {selectedColor.variants.length === 0 && (
            <div className="text-[#dc3545] mt-[8px] text-[13px]">
              Tạm hết hàng màu này.
            </div>
          )}
        </div>

        {/* Size Guide Trigger */}
        <span 
          className="text-[#222] font-bold text-[13px] underline cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => setIsSizeGuideOpen(true)}
        >
          <i className="fas fa-ruler mr-[4px]"></i> Kiểm tra size của bạn
        </span>
      </div>

      {/* Quantity */}
      <div className="mb-[24px] flex items-center">
        <label className="font-normal mr-[24px] mb-0 text-[15px] text-[#222]">Số lượng</label>
        <div className="inline-flex items-center border border-[#e1e1e1] rounded-tl-[20px] rounded-br-[20px] overflow-hidden h-[45px]">
          <button 
            onClick={() => handleQtyChange(-1)}
            className="w-[40px] h-full bg-white text-[#333] hover:bg-[#f5f5f5] flex justify-center items-center text-[18px] transition-colors"
          >
            -
          </button>
          <input 
            type="text" 
            value={quantity} 
            readOnly 
            className="w-[50px] h-full border-x border-[#e1e1e1] bg-white text-center text-[#333] font-semibold outline-none"
          />
          <button 
            onClick={() => handleQtyChange(1)}
            className="w-[40px] h-full bg-white text-[#333] hover:bg-[#f5f5f5] flex justify-center items-center text-[18px] transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-[10px] mb-[24px]">
        <button 
          onClick={handleAddToCart}
          className="w-[160px] h-[50px] bg-[#222] text-white font-bold text-[13px] rounded-tl-[16px] rounded-br-[16px] transition-all hover:bg-black uppercase border border-transparent whitespace-nowrap"
        >
          THÊM VÀO GIỎ
        </button>
        <button 
          onClick={handleBuyNow}
          className="w-[140px] h-[50px] bg-white text-[#222] font-bold text-[13px] rounded-tl-[16px] rounded-br-[16px] transition-all hover:bg-[#f9f9f9] uppercase border border-[#222] whitespace-nowrap"
        >
          MUA HÀNG
        </button>
        <button 
          className="w-[50px] h-[50px] flex-shrink-0 bg-white text-[#222] border border-[#222] rounded-tl-[16px] rounded-br-[16px] flex items-center justify-center hover:bg-[#f9f9f9] transition-all"
        >
          <i className="far fa-heart text-[18px]"></i>
        </button>
      </div>

      <div className="mb-[40px]">
        <a href="#" className="text-[#222] underline text-[14px] hover:text-gray-600 transition-colors">
          Tìm tại cửa hàng
        </a>
      </div>
      
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
