'use client';

import { useState } from 'react';
import Link from 'next/link';

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
}

export default function ProductCard({ product }: ProductCardProps) {
  const [activeColorId, setActiveColorId] = useState<number | null>(
    product.productColors && product.productColors.length > 0
      ? product.productColors[0].id
      : null
  );

  const activeColor = product.productColors?.find((c) => c.id === activeColorId) || product.productColors?.[0];

  const getImageUrl = (url?: string) => {
    if (!url) return 'https://via.placeholder.com/300x450?text=No+Image';
    return url.startsWith('http') ? url : `/uploads/${url}`;
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
      
      {/* Product Image Container */}
      <div className="relative overflow-hidden aspect-[2/3] bg-[#f8f9fa]">
        {product.isNew && (
          <div className="absolute top-0 left-0 z-[5] bg-[#f7941d] text-white text-[11px] font-bold px-[10px] py-[4px] uppercase">
            NEW
          </div>
        )}

        {product.isBestSeller && !product.isNew && (
          <div className="absolute top-[10px] -left-[5px] z-[5] bg-[#b8232a] text-white text-[11px] font-medium px-[12px] py-[4px] rounded-r-[15px] shadow-[2px_2px_5px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-0 before:border-t-[5px] before:border-t-[#7a151b] before:border-l-[5px] before:border-l-transparent">
            BEST SELLER
          </div>
        )}

        {product.discountPercent && product.discountPercent > 0 ? (
          <div className="absolute top-[10px] right-[10px] z-[5] bg-[#f7941d] text-white text-[12px] font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center">
            -{product.discountPercent}%
          </div>
        ) : null}
        
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
                className="w-[18px] h-[18px] rounded-full cursor-pointer relative border border-transparent hover:border-gray-400 transition-colors"
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
          <button className="text-[#999] hover:text-[#ff0000] transition-colors bg-transparent border-none cursor-pointer">
            <i className="far fa-heart"></i>
          </button>
        </div>

        {/* Title */}
        <div className="mb-[5px]">
          <Link href={`/product/${product.id}`} className="text-[#333] text-[14px] font-normal no-underline uppercase block hover:text-[#000] whitespace-nowrap overflow-hidden text-ellipsis">
            {product.name}
          </Link>
        </div>

        {/* Price & Bag Bottom Row */}
        <div className="relative flex justify-between items-center">
          <div className="text-[#000] font-bold text-[16px]">
            {formatPrice(product.basePrice)}
          </div>
          <button className="bg-[#222] text-white w-[35px] h-[35px] flex items-center justify-center rounded-[4px] transition-colors duration-200 hover:bg-[#000] border-none cursor-pointer">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>

      </div>
    </div>
  );
}
