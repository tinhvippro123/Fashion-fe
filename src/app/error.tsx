'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container-luxe w-full px-[15px] min-[1200px]:px-[85px] mx-auto py-[100px] text-center">
      <h1 className="text-[120px] font-bold text-[#f7f8f9] leading-none mb-[20px] font-['Montserrat',sans-serif] tracking-widest relative inline-block">
        <span className="text-[#222] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] tracking-normal whitespace-nowrap">LỖI</span>
        500
      </h1>
      <h2 className="text-[24px] font-semibold text-[#222] mb-[15px] uppercase">
        Đã xảy ra sự cố ngoài ý muốn
      </h2>
      <p className="text-[#666] text-[15px] mb-[40px] max-w-[500px] mx-auto">
        Rất xin lỗi vì sự bất tiện này. Đội ngũ kỹ thuật của chúng tôi đã ghi nhận và đang tiến hành khắc phục.
      </p>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center bg-white text-[#222] px-[30px] py-[12px] text-[14px] font-bold uppercase tracking-[1px] rounded-tl-[20px] rounded-br-[20px] hover:bg-[#f9f9f9] border border-[#222] transition-colors"
        >
          THỬ LẠI
        </button>
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-[#222] text-white px-[30px] py-[12px] text-[14px] font-bold uppercase tracking-[1px] rounded-tl-[20px] rounded-br-[20px] hover:bg-black border border-[#222] transition-colors"
        >
          TRANG CHỦ
        </Link>
      </div>
    </div>
  );
}
