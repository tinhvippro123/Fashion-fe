'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard, { Product } from '@/components/common/ProductCard';

export default function RecentlyViewedPage() {
  // Mock Data
  const recentProducts: Product[] = [
    {
      id: 3,
      name: "Áo thun cotton cổ tròn",
      basePrice: 350000,
      isNew: false,
      productColors: [
        {
          id: 3,
          isActive: true,
          color: { name: "Trắng", hexCode: "#ffffff" },
          images: [
            { imageUrl: "/uploads/03321697-61dc-4f30-8da7-d25085a78741.webp" },
            { imageUrl: "/uploads/0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp" }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Quần jean ống rộng",
      basePrice: 650000,
      isNew: true,
      productColors: [
        {
          id: 4,
          isActive: true,
          color: { name: "Xanh dương", hexCode: "#1e90ff" },
          images: [
            { imageUrl: "/uploads/0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp" },
            { imageUrl: "/uploads/03321697-61dc-4f30-8da7-d25085a78741.webp" }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <h5 className="font-bold mb-[24px] uppercase text-[20px] text-[#222]">
        Sản phẩm đã xem
      </h5>

      {recentProducts.length === 0 ? (
        <div className="text-center py-[48px]">
          <i className="fas fa-history text-[#6c6d70] mb-[16px] text-[50px]"></i>
          <h5 className="text-[#6c6d70] mb-[16px] text-[20px] font-medium">Bạn chưa xem sản phẩm nào</h5>
          <Link 
            href="/" 
            className="inline-block bg-[#222] text-white mt-[16px] px-[24px] py-[8px] font-medium transition-colors hover:bg-[#333]"
            style={{ borderRadius: 0 }}
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap mx-[-15px]">
          {recentProducts.map(product => (
            <div key={product.id} className="w-1/2 lg:w-1/4 px-[15px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
