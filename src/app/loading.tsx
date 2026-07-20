import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 z-[9999] flex flex-col items-center justify-center backdrop-blur-sm">
      <div className="w-[50px] h-[50px] border-[4px] border-[#f3f3f3] border-t-[#222] rounded-full animate-spin mb-[15px]"></div>
      <p className="text-[14px] font-semibold text-[#222] uppercase tracking-[2px] animate-pulse">
        Đang tải...
      </p>
    </div>
  );
}
