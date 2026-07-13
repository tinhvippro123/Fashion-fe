'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  
  const toggleSubMenu = (menu: string) => {
    setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Mock authentication state for UI demonstration
  const isAuthenticated = true; 

  return (
    <>
      <header className="sticky top-0 z-50 bg-white py-[10px] lg:py-[17px]">
        <div className="w-full lg:px-[85px] px-[15px] mx-auto flex items-center justify-between relative after:content-[''] after:absolute max-[1023px]:after:-bottom-[10px] lg:after:-bottom-[17px] lg:after:left-[85px] lg:after:right-[85px] after:left-[15px] after:right-[15px] after:h-[1px] after:bg-[#e1e1e1]">
          
          {/* Left: Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center">
            {/* NỮ Menu Item */}
            <div className="group flex items-center">
              <Link href="/danh-muc/nu" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
                NỮ
              </Link>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute left-[85px] right-[85px] w-auto top-[100%] mt-[17px] bg-white border border-[#f1f1f1] shadow-[0_10px_20px_rgba(0,0,0,0.05)] py-[30px] px-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000] flex before:content-[''] before:absolute before:-top-[20px] before:left-0 before:w-full before:h-[20px] before:bg-transparent">
                <div className="w-[240px] shrink-0 pr-[40px] border-r border-[#eee] mr-[40px]">
                  <Link href="/danh-muc/hang-nu-moi-ve" className="block font-bold mb-3 text-[#ff0000] text-[14px] hover:text-[#000] uppercase transition-colors">
                    NEW ARRIVAL
                  </Link>
                  <Link href="/danh-muc/nu" className="block font-bold mb-3 text-[#333] text-[14px] hover:text-[#000] uppercase transition-colors">
                    ALL ITEMS
                  </Link>
                  <Link href="/sale" className="block font-bold text-[#ff0000] text-[14px] hover:text-[#000] uppercase transition-colors">
                    HOT ITEMS - SALE 50%
                  </Link>
                </div>
                <div className="flex-1 flex flex-wrap gap-[30px] pl-[40px] content-start">
                  <div className="w-[200px] min-w-[180px] mb-[30px]">
                    <Link href="#" className="block font-bold text-[#333] text-[14px] uppercase mb-[15px] hover:text-[#000] transition-colors">ÁO</Link>
                    <div className="flex flex-col space-y-2">
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo sơ mi</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group flex items-center">
              <Link href="/danh-muc/nam" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
                NAM
              </Link>

              {/* Mega Menu Dropdown NAM */}
              <div className="absolute left-[85px] right-[85px] w-auto top-[100%] mt-[17px] bg-white border border-[#f1f1f1] shadow-[0_10px_20px_rgba(0,0,0,0.05)] py-[30px] px-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000] flex before:content-[''] before:absolute before:-top-[20px] before:left-0 before:w-full before:h-[20px] before:bg-transparent">
                <div className="w-[240px] shrink-0 pr-[40px] border-r border-[#eee] mr-[40px]">
                  <Link href="/danh-muc/hang-nam-moi-ve" className="block font-bold mb-3 text-[#ff0000] text-[14px] hover:text-[#000] uppercase transition-colors">
                    NEW ARRIVAL
                  </Link>
                  <Link href="/danh-muc/nam" className="block font-bold mb-3 text-[#333] text-[14px] hover:text-[#000] uppercase transition-colors">
                    ALL ITEMS
                  </Link>
                  <Link href="/sale" className="block font-bold text-[#ff0000] text-[14px] hover:text-[#000] uppercase transition-colors">
                    HOT ITEMS - SALE 50%
                  </Link>
                </div>
                <div className="flex-1 flex flex-wrap gap-[30px] pl-[40px] content-start">
                  <div className="w-[200px] min-w-[180px] mb-[30px]">
                    <Link href="#" className="block font-bold text-[#333] text-[14px] uppercase mb-[15px] hover:text-[#000] transition-colors">ÁO</Link>
                    <div className="flex flex-col space-y-2">
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo sơ mi</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo thun</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo polo</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo khoác</Link>
                    </div>
                  </div>
                  <div className="w-[200px] min-w-[180px] mb-[30px]">
                    <Link href="#" className="block font-bold text-[#333] text-[14px] uppercase mb-[15px] hover:text-[#000] transition-colors">QUẦN</Link>
                    <div className="flex flex-col space-y-2">
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Quần jeans</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Quần âu</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Quần khaki</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Quần short</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/sale" className="text-[12px] font-semibold text-[#ff0000] hover:text-[#ff0000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors animate-pulse">
              BIG SALE THÁNG 12
            </Link>
            <Link href="/collection" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
              BỘ SƯU TẬP
            </Link>
            <Link href="/about" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
              VỀ CHÚNG TÔI
            </Link>
          </nav>

          {/* Left: Mobile Hamburger Button */}
          <button onClick={toggleMobileMenu} className="block lg:hidden bg-transparent border-none text-[#333] text-[20px] cursor-pointer">
            <i className="fas fa-bars"></i>
          </button>

          {/* Center: Image Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10 text-center">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/client/img/logo.png" alt="Logo" className="h-[40px] w-auto inline-block" />
            </Link>
          </div>

          {/* Right: Search Box and Icons */}
          <div className="flex items-center">
            
            {/* Desktop Search Box */}
            <form className="hidden lg:flex items-center relative w-[250px] border border-[#e1e1e1] rounded px-[12px] py-[6px]">
              <button type="submit" className="bg-transparent border-none text-[#333] p-0 mr-[12px]">
                <i className="fas fa-search"></i>
              </button>
              <input 
                type="text" 
                name="keyword" 
                placeholder="TÌM KIẾM SẢN PHẨM" 
                className="w-full border-none outline-none bg-transparent font-light text-[13px] text-[#333]" 
                autoComplete="off"
              />
            </form>

            {/* Contact Icon (Desktop Only) */}
            <Link href="/contact" className="hidden lg:block text-[#333] text-[18px] ml-[20px] relative transition-colors" title="Liên hệ">
              <i className="fas fa-headset"></i>
            </Link>

            {/* User Icon & Dropdown (Desktop Only) */}
            {isAuthenticated ? (
              <div className="hidden lg:block ml-[20px] relative">
                <button onClick={toggleUserMenu} className="bg-transparent border-none p-0 text-[#333] text-[18px] cursor-pointer transition-colors">
                  <i className="far fa-user"></i>
                </button>
                
                {/* User Dropdown Menu */}
                <div className={`absolute top-full right-0 w-[250px] bg-white border border-[#e1e1e1] rounded shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-[1050] mt-[10px] transition-all duration-200 ${isUserMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="p-3 border-b border-[#eee] bg-[#f8f9fa] rounded-t font-semibold text-[14px]">
                    Xin chào, <b className="font-bold">User</b>
                  </div>
                  <ul className="list-none p-0 m-0">
                    <li><Link href="/admin" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-cogs w-[20px] text-center mr-3"></i> Trang quản trị</Link></li>
                    <li><Link href="/account/profile" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="far fa-user w-[20px] text-center mr-3"></i> Thông tin tài khoản</Link></li>
                    <li><Link href="/account/orders" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-sync-alt w-[20px] text-center mr-3"></i> Quản lý đơn hàng</Link></li>
                    <li><button className="w-full text-left px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors bg-transparent border-none cursor-pointer"><i className="fas fa-sign-out-alt w-[20px] text-center mr-3"></i> Đăng xuất</button></li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link href="/login" className="hidden lg:block text-[#333] text-[18px] ml-[20px] relative transition-colors">
                <i className="far fa-user"></i>
              </Link>
            )}

            {/* Cart Icon (All devices) */}
            <div className="text-[#333] text-[18px] ml-[20px] relative cursor-pointer" onClick={toggleCart}>
              <i className="fas fa-shopping-bag text-[24px]"></i>
              <span className="absolute -top-[8px] -right-[10px] bg-[#333] text-white text-[10px] px-[5px] py-[2px] rounded-full leading-none flex items-center justify-center">
                3
              </span>
            </div>

          </div>

        </div>
      </header>

      {/* -------------------- OVERLAYS & SIDEBARS -------------------- */}

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[1040] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 bottom-0 left-0 w-[85%] max-w-[400px] bg-white z-[1050] transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex-grow overflow-y-auto px-[20px] pt-[15px] pb-[80px]">
          {/* Nút Đóng */}
          <div className="mb-3">
            <span className="text-[28px] cursor-pointer text-[#333] font-light leading-none inline-block" onClick={toggleMobileMenu}>&times;</span>
          </div>
          
          {/* Danh sách Menu */}
          <ul className="list-none p-0 m-0">
            {/* NỮ */}
            <li className="mb-0">
              <div 
                className="flex justify-between items-center mb-4 cursor-pointer" 
                onClick={() => toggleSubMenu('women')}
              >
                <span className="text-[#333] font-bold block w-full text-[14px] uppercase">Nữ</span>
                <span className="text-[#6c757d] text-[22px] font-light leading-none">{expandedMenus['women'] ? '–' : '+'}</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMenus['women'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-3 pb-4">
                  <Link href="/danh-muc/nu" className="block mb-4 text-[#ff0000] uppercase text-[13px]">ALL ITEMS</Link>
                  <Link href="/danh-muc/hang-nu-moi-ve" className="block mb-4 text-[#6c757d] uppercase text-[13px]">NEW ARRIVAL</Link>
                  <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleSubMenu('women_ao')}>
                    <span className="block text-[#6c757d] uppercase text-[13px]">ÁO</span>
                    <span className="text-[#6c757d] text-[20px] font-light leading-none">{expandedMenus['women_ao'] ? '–' : '+'}</span>
                  </div>
                  <div className={`pl-3 overflow-hidden transition-all duration-300 ${expandedMenus['women_ao'] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <Link href="#" className="block text-[#6c757d] mb-4 text-[13px] no-underline">Áo sơ mi</Link>
                  </div>
                </div>
              </div>
            </li>
            
            {/* NAM */}
            <li className="mb-0">
              <div 
                className="flex justify-between items-center mb-4 cursor-pointer" 
                onClick={() => toggleSubMenu('men')}
              >
                <span className="text-[#333] font-bold block w-full text-[14px] uppercase">Nam</span>
                <span className="text-[#6c757d] text-[22px] font-light leading-none">{expandedMenus['men'] ? '–' : '+'}</span>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${expandedMenus['men'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-3 pb-4">
                  <Link href="/danh-muc/nam" className="block mb-4 text-[#ff0000] uppercase text-[13px]">ALL ITEMS</Link>
                  <Link href="/danh-muc/hang-nam-moi-ve" className="block mb-4 text-[#6c757d] uppercase text-[13px]">NEW ARRIVAL</Link>
                  <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => toggleSubMenu('men_ao')}>
                    <span className="block text-[#6c757d] uppercase text-[13px]">ÁO</span>
                    <span className="text-[#6c757d] text-[20px] font-light leading-none">{expandedMenus['men_ao'] ? '–' : '+'}</span>
                  </div>
                  <div className={`pl-3 overflow-hidden transition-all duration-300 ${expandedMenus['men_ao'] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <Link href="#" className="block text-[#6c757d] mb-4 text-[13px] no-underline">Áo sơ mi</Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex justify-between items-center mb-4">
                <Link href="/sale" className="text-[#ff0000] font-bold block w-full text-[14px] no-underline uppercase animate-pulse">SUMMER SPECIAL – ƯU ĐÃI TỪ 150K</Link>
                <span className="text-[#ff0000] text-[22px] font-light leading-none">+</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center mb-4">
                <Link href="/collection" className="text-[#333] font-bold block w-full text-[14px] no-underline uppercase">BỘ SƯU TẬP</Link>
                <span className="text-[#6c757d] text-[22px] font-light leading-none">+</span>
              </div>
            </li>
            <li className="pb-4">
              <div className="flex justify-between items-center mb-4">
                <Link href="/about" className="text-[#333] font-bold block w-full text-[14px] no-underline uppercase">VỀ CHÚNG TÔI</Link>
                <span className="text-[#6c757d] text-[22px] font-light leading-none">+</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mini Cart Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[1040] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={toggleCart}
      ></div>

      {/* Mini Cart Sidebar */}
      <div className={`fixed top-0 bottom-0 right-0 w-[400px] max-w-full bg-white z-[1050] transform transition-transform duration-300 ease-in-out shadow-[-5px_0_15px_rgba(0,0,0,0.05)] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-[#e1e1e1] flex justify-between items-center bg-[#f8f9fa]">
          <h5 className="m-0 font-bold text-[16px] uppercase tracking-[1px]">Giỏ Hàng</h5>
          <span className="cursor-pointer text-[24px] leading-none" onClick={toggleCart}>&times;</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center">
          <p className="text-[#888] text-[14px]">Giỏ hàng đang trống</p>
        </div>
        <div className="p-4 border-t border-[#e1e1e1] bg-[#f8f9fa]">
          <div className="flex justify-between mb-4 font-bold text-[16px]">
            <span>Tổng cộng:</span>
            <span>0₫</span>
          </div>
          <Link href="/cart" className="block w-full bg-[#000] text-white text-center py-3 rounded-md font-bold uppercase text-[14px] tracking-[1px] hover:bg-[#333] transition-colors mb-2">Xem Giỏ Hàng</Link>
          <Link href="/checkout" className="block w-full bg-[#d9534f] text-white text-center py-3 rounded-md font-bold uppercase text-[14px] tracking-[1px] hover:bg-[#c9302c] transition-colors">Thanh Toán</Link>
        </div>
      </div>

    </>
  );
}
