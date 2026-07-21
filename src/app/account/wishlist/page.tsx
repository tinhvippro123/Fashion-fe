'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard, { Product } from '@/shared/ui/ProductCard';

export default function WishlistPage() {
  // Mock Data
  const wishlist: Product[] = [
    {
      id: 1,
      name: "Áo sơ mi lụa họa tiết",
      basePrice: 850000,
      isNew: true,
      productColors: [
        {
          id: 1,
          isActive: true,
          color: { name: "Họa tiết", hexCode: "#ffffff" },
          images: [
            { imageUrl: "/uploads/03321697-61dc-4f30-8da7-d25085a78741.webp" },
            { imageUrl: "/uploads/0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Đầm xòe phối nơ",
      basePrice: 1250000,
      isNew: false,
      isBestSeller: true,
      discountPercent: 10,
      productColors: [
        {
          id: 2,
          isActive: true,
          color: { name: "Đỏ", hexCode: "#ff0000" },
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
        Sản phẩm yêu thích
      </h5>

      {wishlist.length === 0 ? (
        <div className="text-center py-[48px]">
          <i className="far fa-heart text-[#6c6d70] mb-[16px] text-[50px]"></i>
          <h5 className="text-[#6c6d70] mb-[16px] text-[20px] font-medium">Bạn chưa có sản phẩm yêu thích nào</h5>
          <Link 
            href="/category/nu" 
            className="inline-block bg-[#222] text-white mt-[16px] px-[24px] py-[8px] font-medium transition-colors hover:bg-[#333]"
            style={{ borderRadius: 0 }}
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap mx-[-15px]">
          {wishlist.map(product => (
            <div key={product.id} className="w-1/2 lg:w-1/4 px-[15px]">
              <ProductCard product={product} isLiked={true} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
