import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-luxe w-full px-[15px] min-[1200px]:px-[85px] mx-auto py-[100px] text-center">
      <h1 className="text-[120px] font-bold text-[#f7f8f9] leading-none mb-[20px] font-['Montserrat',sans-serif] tracking-widest relative inline-block">
        <span className="text-[#222] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] tracking-normal whitespace-nowrap">404</span>
        404
      </h1>
      <h2 className="text-[24px] font-semibold text-[#222] mb-[15px] uppercase">
        Không tìm thấy trang
      </h2>
      <p className="text-[#666] text-[15px] mb-[40px] max-w-[500px] mx-auto">
        Trang bạn đang tìm kiếm có thể đã bị xóa, thay đổi tên hoặc tạm thời không truy cập được.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center justify-center bg-[#222] text-white px-[40px] py-[15px] text-[14px] font-bold uppercase tracking-[1px] rounded-tl-[20px] rounded-br-[20px] hover:bg-white hover:text-[#222] border border-[#222] transition-colors"
      >
        QUAY LẠI TRANG CHỦ
      </Link>
    </div>
  );
}
