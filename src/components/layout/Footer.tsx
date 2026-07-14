'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    /*
      BREAKPOINT MAP (matching original Thymeleaf CSS exactly):
      - container padding 85px : >1199px  → min-[1200px]:px-[85px]
      - container padding 15px : ≤1199px  → max-[1199px]:px-[15px]
      - Footer flex-nowrap (5-col row) : >1199px → min-[1200px]:flex-nowrap
      - Footer flex-wrap (2-col grid) : ≤1199px → default flex-wrap
      - Column 50% width : ≤1199px (Bootstrap: all screens < 1200px)
      - Column 100% width : ≤768px
      - Accordion shown (d-lg-block) : ≥992px → lg:block (1024px, nearest Tailwind)
      - Chevron hidden (d-lg-none) : ≥992px → lg:hidden
    */
    <footer className="bg-white pt-[60px] pb-[10px] border-t border-[#e1e1e1] text-[14px] text-[#333] leading-[1.2] mt-[40px]">
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto">

        {/* ===== FOOTER MAIN COLUMNS ===== */}
        <div className="flex flex-wrap min-[1200px]:flex-nowrap justify-start items-start pb-[30px]">

          {/* ---- Col 1: Social & Hotline ---- */}
          {/* Desktop: fixed 298px | Tablet(≤1199px): 50% | Mobile(≤768px): 100% */}
          <div className="w-full max-[768px]:w-full max-[1199px]:w-1/2 min-[1200px]:w-[298px] shrink-0 min-[1200px]:mr-[61px] max-[1440px]:min-[1200px]:mr-[30px] max-[1440px]:min-[1200px]:w-[250px] max-[1199px]:pr-[15px] mb-[30px] min-[1200px]:mb-0">
            <div className="mb-3 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/client/img/logo.png" alt="Logo" className="h-[40px] w-auto mr-3 inline-block" />
            </div>
            <div className="flex gap-[29px] mb-[30px] items-center max-[768px]:flex-wrap">
              <Link href="#" className="transition-opacity hover:opacity-80"><i className="fab fa-facebook-f text-[24px] text-[#4267b2]"></i></Link>
              <Link href="#" className="transition-opacity hover:opacity-80"><i className="fab fa-google text-[24px] text-[#ea4335]"></i></Link>
              <Link href="#" className="transition-opacity hover:opacity-80 flex items-center justify-center">
                <i className="fab fa-instagram text-[24px]" style={{
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}></i>
              </Link>
              <Link href="#" className="text-[#0068ff] font-bold no-underline transition-opacity hover:opacity-80">Zalo</Link>
              <Link href="#" className="transition-opacity hover:opacity-80"><i className="fab fa-youtube text-[24px] text-[#ff0000]"></i></Link>
            </div>
            <div className="bg-[#222] text-white inline-block px-[22px] py-[15px] rounded-tl-[15px] rounded-br-[15px] font-semibold text-[15px]">
              HOTLINE: 0123 456 789
            </div>
          </div>

          {/* ---- Col 2: Giới thiệu ---- */}
          {/* Desktop: fixed 160px | Tablet(≤1199px): 50% | Mobile(≤768px): 100% */}
          <div className="w-full max-[768px]:w-full max-[1199px]:w-1/2 min-[1200px]:w-[160px] shrink-0 min-[1200px]:mr-[68px] max-[1440px]:min-[1200px]:mr-[30px] max-[1440px]:min-[1200px]:w-[140px] max-[1199px]:pr-[15px] mb-[30px] max-[768px]:mb-0 min-[1200px]:mb-0">
            <h5
              className="text-[20px] max-[768px]:text-[16px] font-semibold text-[#000] mb-[20px] flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('intro')}
            >
              <div className="flex justify-between w-full items-center">
                <span>GIỚI THIỆU</span>
                <span className="min-[769px]:hidden">
                  <i className={`fas fa-angle-right text-[20px] text-[#333] font-light transition-transform duration-300 ${expandedSections['intro'] ? 'rotate-90' : ''}`}></i>
                </span>
              </div>
            </h5>
            {/* Accordion Content */}
            <div className={`overflow-hidden transition-all duration-300 min-[769px]:!max-h-none min-[769px]:!opacity-100 min-[769px]:overflow-visible ${expandedSections['intro'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="list-none p-0 m-0">
                <li className="mb-[16px]"><Link href="/pages/ve-luxe-fashion" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Về LUXE fashion</Link></li>
                <li className="mb-[16px]"><Link href="/pages/tuyen-dung" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Tuyển dụng</Link></li>
                <li className="mb-[16px]"><Link href="/pages/he-thong-cua-hang" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Hệ thống cửa hàng</Link></li>
              </ul>
            </div>
          </div>

          {/* ---- Col 3: Dịch vụ khách hàng ---- */}
          {/* Desktop: fixed 248px | Tablet(≤1199px): 50% | Mobile(≤768px): 100% */}
          <div className="w-full max-[768px]:w-full max-[1199px]:w-1/2 min-[1200px]:w-[248px] shrink-0 min-[1200px]:mr-[68px] max-[1440px]:min-[1200px]:mr-[30px] max-[1440px]:min-[1200px]:w-[220px] max-[1199px]:pr-[15px] mb-[30px] max-[768px]:mb-0 min-[1200px]:mb-0">
            <h5
              className="text-[20px] max-[768px]:text-[16px] font-semibold text-[#000] mb-[20px] flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('service')}
            >
              <div className="flex justify-between w-full items-center">
                <span>DỊCH VỤ KHÁCH HÀNG</span>
                <span className="min-[769px]:hidden">
                  <i className={`fas fa-angle-right text-[20px] text-[#333] font-light transition-transform duration-300 ${expandedSections['service'] ? 'rotate-90' : ''}`}></i>
                </span>
              </div>
            </h5>
            {/* Accordion Content */}
            <div className={`overflow-hidden transition-all duration-300 min-[769px]:!max-h-none min-[769px]:!opacity-100 min-[769px]:overflow-visible ${expandedSections['service'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="list-none p-0 m-0">
                <li className="mb-[16px]"><Link href="/pages/chinh-sach-dieu-khoan" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Chính sách điều khoản</Link></li>
                <li className="mb-[16px]"><Link href="/pages/huong-dan-mua-hang" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Hướng dẫn mua hàng</Link></li>
                <li className="mb-[16px]"><Link href="/pages/chinh-sach-thanh-toan" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Chính sách thanh toán</Link></li>
                <li className="mb-[16px]"><Link href="/pages/chinh-sach-doi-tra" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Chính sách đổi trả</Link></li>
                <li className="mb-[16px]"><Link href="/order/tracking" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Tra cứu đơn hàng</Link></li>
                <li className="mb-[16px]"><Link href="/pages/chinh-sach-bao-hanh" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Chính sách bảo hành</Link></li>
                <li className="mb-[16px]"><Link href="/pages/chinh-sach-giao-nhan" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Chính sách giao nhận vận chuyển</Link></li>
                <li className="mb-[16px]"><Link href="/pages/chinh-sach-the-thanh-vien" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Chính sách thẻ thành viên</Link></li>
                <li className="mb-[16px]"><Link href="/pages/faq" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Q&A</Link></li>
              </ul>
            </div>
          </div>

          {/* ---- Col 4: Liên hệ ---- */}
          {/* Desktop: fixed 100px | Tablet(≤1199px): 50% | Mobile(≤768px): 100% */}
          <div className="w-full max-[768px]:w-full max-[1199px]:w-1/2 min-[1200px]:w-[100px] shrink-0 min-[1200px]:mr-[61px] max-[1440px]:min-[1200px]:mr-[30px] max-[1440px]:min-[1200px]:w-[120px] max-[1199px]:pr-[15px] mb-[30px] max-[768px]:mb-0 min-[1200px]:mb-0">
            <h5
              className="text-[20px] max-[768px]:text-[16px] font-semibold text-[#000] mb-[20px] flex justify-between items-center cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              <div className="flex justify-between w-full items-center">
                <span>LIÊN HỆ</span>
                <span className="min-[769px]:hidden">
                  <i className={`fas fa-angle-right text-[20px] text-[#333] font-light transition-transform duration-300 ${expandedSections['contact'] ? 'rotate-90' : ''}`}></i>
                </span>
              </div>
            </h5>
            {/* Accordion Content */}
            <div className={`overflow-hidden transition-all duration-300 min-[769px]:!max-h-none min-[769px]:!opacity-100 min-[769px]:overflow-visible ${expandedSections['contact'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="list-none p-0 m-0">
                <li className="mb-[16px]"><Link href="/contact" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Hotline</Link></li>
                <li className="mb-[16px]"><Link href="/contact" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Email</Link></li>
                <li className="mb-[16px]"><Link href="#" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Live Chat</Link></li>
                <li className="mb-[16px]"><Link href="#" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Messenger</Link></li>
                <li className="mb-[16px]"><Link href="/contact" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Liên hệ</Link></li>
              </ul>
            </div>
          </div>

          {/* ---- Col 5: Newsletter + Download App ---- */}
          {/* Desktop: flex-grow | Tablet(≤1199px): 100% full row | Mobile: 100% */}
          <div className="w-full min-[1200px]:flex-1 min-[1200px]:min-w-[293px]">
            {/* Newsletter Box: matching IVY moda exactly */}
            <div className="border-[5px] border-[#f2f2f2] px-[22px] py-[25px] rounded-tl-[40px] rounded-br-[40px] bg-white box-border">
              <h6 className="text-[20px] leading-[1.5] mb-[20px] font-semibold text-[#333]">Nhận thông tin các chương trình của LUXE fashion</h6>
              <form>
                <div className="flex items-center">
                  {/* Input: border-none, border-bottom 1px solid #999, flex:1 */}
                  <div className="flex-1 border-b border-[#999] mr-[10px]">
                    <input
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      className="border-none w-full outline-none text-[13px] text-[#333] bg-transparent py-[10px]"
                    />
                  </div>
                  {/* Button: border 1px solid #333, border-radius 20px 0 20px 0 */}
                  <button
                    type="submit"
                    className="bg-white border border-[#333] rounded-tl-[20px] rounded-br-[20px] px-[20px] py-[10px] text-[14px] font-normal text-[#333] hover:bg-[#000] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
            {/* Download App: margin-top 20px (matching original style="margin-top: 20px;") */}
            <h5 className="text-[20px] font-semibold text-[#000] mt-[20px] mb-[16px]">Download App</h5>
            <div className="flex flex-col">
              <Link href="#" className="mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" width="178" alt="App Store" />
              </Link>
              <Link href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" width="178" alt="Google Play" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      {/* Full width, no container padding. border-top #d1d2d4, padding-top 30px, margin-top 50px */}
      <div className="text-center pt-[30px] mt-[50px] border-t border-[#d1d2d4] pb-[20px] px-[15px]">
        <p className="text-[13px] mb-[5px] italic text-[#6c757d]">Đây là dự án cá nhân (Clone Project) phục vụ mục đích học tập và làm portfolio xin việc, không có mục đích thương mại.</p>
        <span className="text-[16px] text-[#888]">©LUXE fashion All rights reserved</span>
      </div>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      {/* d-lg-none → hidden at ≥1024px (lg:hidden). Fixed bottom, full width */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around py-[10px] z-[1060] border-t border-[#eee]">
        <Link href="#" className="flex flex-col items-center justify-center text-center text-[#555] text-[12px] w-1/3 hover:text-[#000] transition-colors">
          <i className="fas fa-search text-[20px] mb-[5px]"></i>
          <span>Tìm kiếm</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center justify-center text-center text-[#555] text-[12px] w-1/3 border-l border-r border-[#eee] hover:text-[#000] transition-colors">
          <i className="fas fa-headphones-alt text-[20px] mb-[5px]"></i>
          <span>Trợ giúp</span>
        </Link>
        <Link href="/login" className="flex flex-col items-center justify-center text-center text-[#555] text-[12px] w-1/3 hover:text-[#000] transition-colors">
          <i className="far fa-user text-[20px] mb-[5px]"></i>
          <span>Đăng nhập</span>
        </Link>
      </div>

    </footer>
  );
}
