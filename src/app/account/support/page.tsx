'use client';

import React from 'react';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <>
      <div className="flex justify-start items-center border-b border-[#e1e1e1] pb-[16px] mb-[40px]">
        <Link 
          href="/contact" 
          className="bg-[#222] text-white px-[24px] py-[10px] flex items-center text-[13px] font-bold uppercase transition-colors hover:bg-white hover:text-[#222] border border-[#222]"
          style={{ borderRadius: '20px 0 20px 0', letterSpacing: '0.5px' }}
        >
          <span className="border-[1.5px] border-current rounded-full w-[16px] h-[16px] inline-flex justify-center items-center mr-[8px]">
            <i className="fas fa-plus text-[9px]"></i>
          </span>
          GỬI YÊU CẦU HỖ TRỢ
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-[300px]">
        <h2 className="text-[#666] text-[20px] font-medium">
          Bạn chưa có yêu cầu hỗ trợ nào !
        </h2>
      </div>
    </>
  );
}
