'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-white pt-[60px] pb-[10px] border-t border-[#e1e1e1] text-[14px] text-[#333] leading-[1.2] mt-[40px]">
      <div className="w-full xl:px-[85px] px-[15px] mx-auto">
        <div className="flex flex-wrap xl:flex-nowrap justify-start items-start pb-[30px]">
          
          {/* Social & Hotline */}
          <div className="w-full md:w-1/2 xl:w-[298px] shrink-0 xl:mr-[61px] max-[1440px]:xl:mr-[30px] max-[1440px]:xl:w-[250px] max-[1199px]:pr-[15px] mb-[30px] xl:mb-0">
            <div className="mb-3 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/client/img/logo.png" alt="Logo" className="h-[40px] w-auto mr-3 inline-block" />
            </div>
            <div className="flex gap-[29px] mb-[30px] items-center max-[768px]:flex-wrap max-[768px]:gap-[10px]">
              <Link href="#" className="transition-colors"><i className="fab fa-facebook-f text-[24px] text-[#4267b2]"></i></Link>
              <Link href="#" className="transition-colors"><i className="fab fa-google text-[24px] text-[#ea4335]"></i></Link>
              <Link href="#" className="transition-opacity" style={{ display: 'inline-block' }}>
                <i className="fab fa-instagram text-[24px]" style={{
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}></i>
              </Link>
              <Link href="#" className="text-[#0068ff] font-bold no-underline text-[16px]">Zalo</Link>
              <Link href="#" className="transition-colors"><i className="fab fa-youtube text-[24px] text-[#ff0000]"></i></Link>
            </div>
            <div className="bg-[#222] text-white inline-block px-[22px] py-[15px] rounded-tl-[15px] rounded-br-[15px] font-semibold text-[15px]">
              HOTLINE: 0123 456 789
            </div>

            {/* BCT / DMCA Icons */}
            <div className="flex items-center mt-3 gap-[15px] max-[768px]:flex-wrap max-[768px]:gap-[10px]">
              <Link href="#" title="Đã thông báo Bộ Công Thương">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/client/img/bct.png" alt="Đã thông báo Bộ Công Thương" className="h-[40px] w-auto" />
              </Link>
              <Link href="#" title="DMCA Protected">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/client/img/dmca.png" alt="DMCA Protected" className="h-[25px] w-auto" />
              </Link>
            </div>
          </div>

          {/* Giới thiệu */}
          <div className="w-full md:w-1/2 xl:w-[160px] shrink-0 xl:mr-[68px] max-[1440px]:xl:mr-[30px] max-[1440px]:xl:w-[140px] max-[1199px]:pr-[15px] mb-[30px] xl:mb-0">
            <h5 
              className="text-[20px] font-semibold text-[#000] mb-[20px] tracking-0 flex justify-between items-center cursor-pointer xl:cursor-auto"
              onClick={() => toggleSection('intro')}
            >
              Giới thiệu
              <span className="xl:hidden"><i className={`fas fa-angle-right text-[20px] text-[#333] transition-transform duration-300 ${expandedSection === 'intro' ? 'rotate-90' : ''}`}></i></span>
            </h5>
            <div className={`overflow-hidden transition-all duration-300 xl:max-h-full xl:opacity-100 ${expandedSection === 'intro' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 xl:max-h-none xl:opacity-100'}`}>
              <ul className="list-none p-0 m-0">
                <li className="mb-[16px]"><Link href="/pages/ve-luxe-fashion" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Về LUXE fashion</Link></li>
                <li className="mb-[16px]"><Link href="/pages/tuyen-dung" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Tuyển dụng</Link></li>
                <li className="mb-[16px]"><Link href="/pages/he-thong-cua-hang" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Hệ thống cửa hàng</Link></li>
              </ul>
            </div>
          </div>

          {/* Dịch vụ khách hàng */}
          <div className="w-full md:w-1/2 xl:w-[248px] shrink-0 xl:mr-[68px] max-[1440px]:xl:mr-[30px] max-[1440px]:xl:w-[220px] max-[1199px]:pr-[15px] mb-[30px] xl:mb-0">
            <h5 
              className="text-[20px] font-semibold text-[#000] mb-[20px] tracking-0 flex justify-between items-center cursor-pointer xl:cursor-auto"
              onClick={() => toggleSection('service')}
            >
              Dịch vụ khách hàng
              <span className="xl:hidden"><i className={`fas fa-angle-right text-[20px] text-[#333] transition-transform duration-300 ${expandedSection === 'service' ? 'rotate-90' : ''}`}></i></span>
            </h5>
            <div className={`overflow-hidden transition-all duration-300 xl:max-h-full xl:opacity-100 ${expandedSection === 'service' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 xl:max-h-none xl:opacity-100'}`}>
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

          {/* Liên hệ */}
          <div className="w-full md:w-1/2 xl:w-[100px] shrink-0 xl:mr-[61px] max-[1440px]:xl:mr-[30px] max-[1440px]:xl:w-[120px] max-[1199px]:pr-[15px] mb-[30px] xl:mb-0">
            <h5 
              className="text-[20px] font-semibold text-[#000] mb-[20px] tracking-0 flex justify-between items-center cursor-pointer xl:cursor-auto"
              onClick={() => toggleSection('contact')}
            >
              Liên hệ
              <span className="xl:hidden"><i className={`fas fa-angle-right text-[20px] text-[#333] transition-transform duration-300 ${expandedSection === 'contact' ? 'rotate-90' : ''}`}></i></span>
            </h5>
            <div className={`overflow-hidden transition-all duration-300 xl:max-h-full xl:opacity-100 ${expandedSection === 'contact' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 xl:max-h-none xl:opacity-100'}`}>
              <ul className="list-none p-0 m-0">
                <li className="mb-[16px]"><Link href="/contact" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Hotline</Link></li>
                <li className="mb-[16px]"><Link href="/contact" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Email</Link></li>
                <li className="mb-[16px]"><Link href="#" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Live Chat</Link></li>
                <li className="mb-[16px]"><Link href="#" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Messenger</Link></li>
                <li className="mb-[16px]"><Link href="/contact" className="text-[#555] font-normal block py-[2px] transition-all duration-200 hover:text-[#000] hover:pl-[5px]">Liên hệ</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full xl:flex-1 xl:min-w-[293px] max-[1199px]:w-full mt-[15px] xl:mt-0">
            <div className="border-2 border-[#e1e1e1] px-[22px] py-[25px] rounded-tl-[40px] rounded-br-[40px] relative bg-white box-border max-[768px]:mt-[15px]">
              <h6 className="text-[20px] leading-[1.5] mb-[20px] font-semibold text-[#333]">Nhận thông tin các chương trình của LUXE fashion</h6>
              <form>
                <div className="flex items-center">
                  <input type="email" placeholder="Nhập địa chỉ email" className="border-none border-b border-[#999] w-full flex-1 mr-[10px] outline-none text-[13px] text-[#333] bg-transparent py-[10px]" />
                  <button type="button" className="bg-white border border-[#333] rounded-tl-[20px] rounded-br-[20px] px-[15px] py-[8px] text-[13px] font-bold uppercase text-[#333] hover:bg-[#000] hover:text-white transition-all duration-300 whitespace-nowrap">Đăng ký</button>
                </div>
              </form>
            </div>
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

        {/* Footer Bottom */}
        <div className="text-[16px] text-[#888] pt-[30px] mt-[50px] border-t border-[#d1d2d4] pb-[20px] text-center xl:text-left">
          &copy; 2026 LUXE Fashion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
