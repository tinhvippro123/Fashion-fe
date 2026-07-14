'use client';

import { useState } from 'react';
import { ProductDetail } from '@/types/product';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';

interface ProductDetailClientProps {
  product: ProductDetail;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  // Ensure we have at least one color to select by default
  const defaultColorId = product.productColors.find(c => c.isActive)?.id || product.productColors[0]?.id;
  const [selectedColorId, setSelectedColorId] = useState<number>(defaultColorId);

  const selectedColor = product.productColors.find(c => c.id === selectedColorId) || product.productColors[0];

  return (
    <div className="flex flex-col md:flex-row -mx-[15px]">
      {/* Left Column: Gallery */}
      <div className="w-full md:w-[50%] min-[1200px]:w-[610px] px-[15px] mb-[30px] md:mb-0 lg:flex-shrink-0">
        <ProductGallery selectedColor={selectedColor} />
      </div>

      {/* Right Column: Info & Tabs */}
      <div className="w-full md:w-[50%] min-[1200px]:flex-1 px-[15px] md:pl-[30px] lg:pl-[40px] min-[1200px]:pl-[120px]">
        <ProductInfo 
          product={product} 
          selectedColor={selectedColor} 
          onColorChange={setSelectedColorId} 
        />
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
