'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/features/cart-and-order/stores/cart.store';
import { useAuthStore } from '@/features/users/stores/auth.store';
import { toast } from 'react-toastify';
import { ProductDetail, ProductColor as FullProductColor, ProductVariant } from '@/features/catalog/types/product';

interface ProductImage {
  imageUrl: string;
}

interface ProductColor {
  id: number;
  isActive: boolean;
  color: { name: string; hexCode: string };
  images: ProductImage[];
}

export interface Product {
  id: number;
  name: string;
  basePrice: number;
  isNew: boolean;
  isBestSeller?: boolean;
  discountPercent?: number;
  productColors: ProductColor[];
}

interface ProductCardProps {
  product: Product;
  isLiked?: boolean;
  isFlashSale?: boolean;
  soldQuantity?: number;
  totalQuantity?: number;
}

export default function ProductCard({ 
  product, 
  isLiked = false,
  isFlashSale = false,
  soldQuantity = 85,
  totalQuantity = 100
}: ProductCardProps) {
  const [activeColorId, setActiveColorId] = useState<number | null>(
    product.productColors && product.productColors.length > 0
      ? product.productColors[0].id
      : null
  );
  const [isQuickSizeOpen, setIsQuickSizeOpen] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const { addItem, showSuccessModal } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast('Bạn cần đăng nhập để thực hiện chức năng này !', {
        style: {
          backgroundColor: '#359cb1',
          color: '#fff',
          borderRadius: '2px',
          padding: '16px',
        },
        icon: <div className="bg-white text-[#359cb1] rounded-full w-[24px] h-[24px] flex items-center justify-center font-bold text-[14px] flex-shrink-0">i</div>,
      });
      return;
    }
    setLiked(!liked);
  };

  const activeColor = product.productColors?.find((c) => c.id === activeColorId) || product.productColors?.[0];

  const getImageUrl = (url?: string) => {
    if (!url) return 'https://via.placeholder.com/300x450?text=No+Image';
    return url.startsWith('http') || url.startsWith('/') ? url : `/uploads/${url}`;
  };

  const mainImage = activeColor && activeColor.images.length > 0 
    ? getImageUrl(activeColor.images[0].imageUrl)
    : 'https://via.placeholder.com/300x450?text=No+Image';

  const hoverImage = activeColor && activeColor.images.length > 1
    ? getImageUrl(activeColor.images[1].imageUrl)
    : mainImage; // Fallback to main image if no 2nd image

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <div className="group mb-[30px] relative transition-all duration-300">
      
      {/* Badges */}
      {product.isNew && (
        <div className="absolute top-[0px] -left-[5px] z-[10] bg-[#f7941d] text-white text-[11px] font-bold px-[12px] py-[4px] rounded-tr-[15px] shadow-[2px_2px_5px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-0 before:border-t-[5px] before:border-t-[#961c1c] before:border-l-[5px] before:border-l-transparent uppercase tracking-wider">
          NEW
        </div>
      )}

      {product.isBestSeller && !product.isNew && (
        <div className="absolute top-[10px] -left-[5px] z-[10] bg-[#b8232a] text-white text-[11px] font-medium px-[12px] py-[4px] rounded-r-[15px] shadow-[2px_2px_5px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-0 before:border-t-[5px] before:border-t-[#7a151b] before:border-l-[5px] before:border-l-transparent">
          BEST SELLER
        </div>
      )}

      {product.discountPercent && product.discountPercent > 0 ? (
        <div 
          className="absolute top-[10px] right-[10px] z-[10] bg-[#da251d] text-white text-[13px] font-bold w-[40px] h-[40px] flex items-center justify-center shadow-md"
          style={{ borderRadius: '50% 50% 0 50%' }}
        >
          -{product.discountPercent}%
        </div>
      ) : null}

      {/* Product Image Container */}
      <div className="relative overflow-hidden aspect-[2/3] bg-[#f8f9fa]">
        
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          {/* Main Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={mainImage} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x450?text=No+Image'; }}
          />
          
          {/* Hover Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={hoverImage} 
            alt={`${product.name} hover`} 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]"
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x450?text=No+Image'; }}
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="pt-[15px] text-left">
        
        {/* Colors & Wishlist Row */}
        <div className="flex justify-between items-center mb-[10px]">
          <div className="flex gap-[5px]">
            {product.productColors?.map((pc) => (
              <div 
                key={pc.id}
                className={`w-[18px] h-[18px] rounded-full cursor-pointer relative border transition-colors hover:border-gray-400 ${
                  pc.color.hexCode === '#FFFFFF' ? 'border-[#ccc]' : 'border-transparent'
                }`}
                style={{ backgroundColor: pc.color.hexCode }}
                title={pc.color.name}
                onClick={() => setActiveColorId(pc.id)}
              >
                {activeColorId === pc.id && (
                  <i className="fas fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[8px] mix-blend-difference"></i>
                )}
              </div>
            ))}
          </div>
          <button 
            onClick={handleToggleLike}
            className={`transition-colors bg-transparent border-none cursor-pointer ${liked ? 'text-[#dc3545] hover:text-[#c82333]' : 'text-[#999] hover:text-[#ff0000]'}`}
          >
            <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
          </button>
        </div>

        {/* Title */}
        <div className="mb-[5px]">
          <Link href={`/product/${product.id}`} className="text-[#333] text-[14px] font-normal no-underline uppercase block hover:text-[#000] whitespace-nowrap overflow-hidden text-ellipsis">
            {product.name}
          </Link>
        </div>

        {/* Price & Bag Bottom Row */}
        <div className="relative flex justify-between items-center mb-[8px]">
          <div className="flex items-center gap-[10px]">
            {product.discountPercent ? (
              <>
                <span className="text-[16px] font-bold text-[#e10600]">
                  {formatPrice(product.basePrice * (1 - (product.discountPercent || 0) / 100))}đ
                </span>
                <span className="text-[14px] text-[#999] line-through">
                  {formatPrice(product.basePrice)}đ
                </span>
              </>
            ) : (
              <span className="text-[16px] font-bold text-[#000]">
                {formatPrice(product.basePrice)}đ
              </span>
            )}
          </div>
          <button 
            onClick={() => setIsQuickSizeOpen(!isQuickSizeOpen)}
            className="bg-[#222] text-white w-[35px] h-[35px] flex items-center justify-center rounded-[4px] transition-colors duration-200 hover:bg-[#000] border-none cursor-pointer"
          >
            <i className="fas fa-shopping-bag"></i>
          </button>
          
          {/* Quick Size Popup */}
          {isQuickSizeOpen && (
            <div className="absolute bottom-[45px] right-0 bg-white w-[60px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] border border-[#eee] z-[100] rounded-[4px] animate-fadeInUp">
              <ul className="list-none p-0 m-0">
                {['S', 'M', 'L'].map((sizeName, index) => (
                  <li 
                    key={index}
                    onClick={() => {
                      // Fallback mock variant since ProductCard might not have full variants
                      const mockVariant: ProductVariant = {
                        id: product.id * 100 + index,
                        size: { name: sizeName },
                        stock: 10
                      };
                      addItem(product as unknown as ProductDetail, activeColor as unknown as FullProductColor, mockVariant, 1);
                      setIsQuickSizeOpen(false);
                      showSuccessModal();
                    }}
                    className="py-[8px] text-center text-[14px] font-semibold cursor-pointer border-b border-[#f5f5f5] last:border-none transition-colors hover:bg-black hover:text-white"
                  >
                    {sizeName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Flash Sale Progress Bar - Full Width Below Price */}
        {isFlashSale && (
          <div className="w-full">
            <div className="flex justify-between items-center mb-[6px]">
              {(() => {
                const percent = (soldQuantity / totalQuantity) * 100;
                if (percent >= 90) {
                  return (
                    <span className="text-[11px] text-[#e10600] font-bold flex items-center gap-[4px] uppercase tracking-wider">
                      <i className="fas fa-fire text-[#ff9900] animate-pulse"></i> Sắp hết
                    </span>
                  );
                } else if (percent >= 50) {
                  return (
                    <span className="text-[11px] text-[#ff6600] font-bold flex items-center gap-[4px] uppercase tracking-wider">
                      <i className="fas fa-bolt text-[#ff9900]"></i> Bán chạy
                    </span>
                  );
                } else {
                  return (
                    <span className="text-[11px] text-[#0088cc] font-bold flex items-center gap-[4px] uppercase tracking-wider">
                      Đang mở bán
                    </span>
                  );
                }
              })()}
              <span className="text-[11px] text-[#666] font-medium">
                Đã bán {soldQuantity}
              </span>
            </div>
            <div className="h-[6px] bg-[#eeeeee] rounded-full overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#e10600] to-[#ff4d4d] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(soldQuantity / totalQuantity) * 100}%` }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
