'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { useCartStore } from '@/features/cart-and-order/stores/cart.store';
import { useAuthStore } from '@/features/users/stores/auth.store';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const [searchKeyword, setSearchKeyword] = useState('');
  const userMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchKeyword.trim())}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    
    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const { totalItems, toggleMiniCart } = useCartStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  
  const toggleSubMenu = (menu: string) => {
    setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };


  return (
    <>
      <header className="sticky top-0 z-[1020] bg-white py-[17px] w-full" style={{ position: 'sticky', WebkitPosition: 'sticky' } as React.CSSProperties}>
        <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto flex items-center justify-between relative after:content-[''] after:absolute after:bottom-[-17px] min-[1200px]:after:left-[85px] min-[1200px]:after:right-[85px] after:left-[15px] after:right-[15px] after:h-[1px] after:bg-[#e1e1e1]">
          
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center h-full">
            {/* NỮ Menu */}
            <div className="group flex items-center h-full">
              <span className="h-full flex items-center text-[12px] font-semibold text-[#333] group-hover:text-[#000] mr-[14px] uppercase tracking-[0.5px] transition-colors relative cursor-pointer">
                NỮ
              </span>
              
              {/* Mega Menu Dropdown NỮ */}
              <div className="absolute left-[85px] right-[85px] top-full w-auto bg-white border border-[#f1f1f1] shadow-[0_10px_20px_rgba(0,0,0,0.05)] py-[30px] px-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000] hidden xl:flex before:content-[''] before:absolute before:-top-[20px] before:left-0 before:w-full before:h-[20px] before:bg-transparent before:z-[1001]">
                <div className="w-[250px] shrink-0 pr-[50px] border-r border-[#eee]">
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
                <div className="flex-1 flex flex-wrap gap-[30px] pl-[50px] content-start">
                  <div className="w-[200px] min-w-[180px] mb-[30px]">
                    <Link href="#" className="block font-bold text-[#333] text-[14px] uppercase mb-[15px] hover:text-[#000] transition-colors">ÁO</Link>
                    <div className="flex flex-col space-y-2">
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo sơ mi</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo thun</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo kiểu</Link>
                      <Link href="#" className="text-[13px] text-[#6c757d] hover:text-[#000] transition-colors">Áo len</Link>
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

            {/* NAM Menu */}
            <div className="group flex items-center h-full">
              <span className="h-full flex items-center text-[12px] font-semibold text-[#333] group-hover:text-[#000] mr-[14px] uppercase tracking-[0.5px] transition-colors relative cursor-pointer">
                NAM
              </span>

              {/* Mega Menu Dropdown NAM */}
              <div className="absolute left-[85px] right-[85px] top-full w-auto bg-white border border-[#f1f1f1] shadow-[0_10px_20px_rgba(0,0,0,0.05)] py-[30px] px-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[1000] hidden xl:flex before:content-[''] before:absolute before:-top-[20px] before:left-0 before:w-full before:h-[20px] before:bg-transparent before:z-[1001]">
                <div className="w-[250px] shrink-0 pr-[50px] border-r border-[#eee]">
                  <Link href="/danh-muc/hang-nam-moi-ve" className="block font-bold mb-3 text-[#ff0000] text-[14px] hover:text-[#000] uppercase transition-colors">
                    NEW ARRIVAL
                  </Link>
                  <Link href="/danh-muc/nam" className="block font-bold mb-3 text-[#333] text-[14px] hover:text-[#000] uppercase transition-colors">
                    ALL ITEMS
                  </Link>
                  <Link href="/flash-sale" className="block font-bold text-[#ff0000] text-[14px] hover:text-[#000] uppercase transition-colors">
                    HOT ITEMS - SALE 50%
                  </Link>
                </div>
                <div className="flex-1 flex flex-wrap gap-[30px] pl-[50px] content-start">
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

            <Link href="/flash-sale" className="text-[12px] font-semibold text-[#ff0000] hover:text-[#ff0000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
              BIG SALE THÁNG 12
            </Link>
            <Link href="/danh-muc" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
              BỘ SƯU TẬP
            </Link>
            <Link href="/blogs" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
              TIN TỨC
            </Link>
            <Link href="/pages/ve-chung-toi" className="text-[12px] font-semibold text-[#333] hover:text-[#000] py-[10px] mr-[14px] uppercase tracking-[0.5px] transition-colors">
              VỀ CHÚNG TÔI
            </Link>
          </nav>

          {/* Left: Mobile Hamburger Button */}
          <button onClick={toggleMobileMenu} className="block xl:hidden bg-transparent border-none text-[#000] text-[20px] cursor-pointer">
            <i className="fas fa-bars"></i>
          </button>

          {/* Center: Logo - Absolutely Centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/client/img/logo.png" alt="Luxe Fashion" className="h-[40px] w-auto block mx-auto" />
          </Link>

          {/* Right: Search and User Actions */}
          <div className="flex items-center gap-[20px] ml-auto">
            
            {/* Desktop Search Box */}
            <form onSubmit={handleSearch} className="hidden xl:flex items-center relative w-[250px] border border-[#e1e1e1] rounded px-[12px] py-[6px]">
              <button type="submit" className="bg-transparent border-none text-[#333] p-0 mr-[12px]">
                <i className="fas fa-search"></i>
              </button>
              <input 
                type="text" 
                name="keyword" 
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="TÌM KIẾM SẢN PHẨM" 
                className="w-full border-none outline-none bg-transparent font-light text-[13px] text-[#333]" 
                autoComplete="off"
              />
            </form>

            {/* Contact Icon (Desktop Only) */}
            <Link href="/contact" className="hidden xl:block text-[#333] text-[18px] relative transition-colors" title="Liên hệ">
              <i className="fas fa-headset"></i>
            </Link>

            {/* User Icon & Dropdown (Desktop Only) */}
            {isAuthenticated ? (
              <div className="hidden xl:block relative" ref={userMenuRef}>
                <button onClick={toggleUserMenu} className="bg-transparent border-none p-0 text-[#333] text-[18px] cursor-pointer transition-colors">
                  <i className="far fa-user"></i>
                </button>
                
                {/* User Dropdown Menu */}
                <div className={`absolute top-full right-0 w-[250px] bg-white border border-[#e1e1e1] rounded shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-[1050] mt-[10px] transition-all duration-200 ${isUserMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="p-3 border-b border-[#eee] bg-[#f8f9fa] rounded-t font-semibold text-[14px]">
                    Xin chào, <b className="font-bold">{user?.name}</b>
                  </div>
                  <ul className="list-none p-0 m-0">
                    {user?.isAdmin && (
                      <li><a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-cogs w-[20px] text-center mr-3"></i> Trang quản trị</a></li>
                    )}
                    <li><Link href="/account/profile" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="far fa-user w-[20px] text-center mr-3"></i> Thông tin tài khoản</Link></li>
                    <li><Link href="/account/orders" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-sync-alt w-[20px] text-center mr-3"></i> Quản lý đơn hàng</Link></li>
                    <li><Link href="#" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-map-marker-alt w-[20px] text-center mr-3"></i> Sổ địa chỉ</Link></li>
                    <li><Link href="/account/recently-viewed" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-glasses w-[20px] text-center mr-3"></i> Sản phẩm đã xem</Link></li>
                    <li><Link href="/account/wishlist" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="far fa-heart w-[20px] text-center mr-3"></i> Sản phẩm yêu thích</Link></li>
                    <li><Link href="/account/faq" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="fas fa-headphones-alt w-[20px] text-center mr-3"></i> Hỏi đáp sản phẩm</Link></li>
                    <li><Link href="/account/support" className="block px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors border-b border-[#f5f5f5]"><i className="far fa-hand-point-right w-[20px] text-center mr-3"></i> Hỗ trợ - LUXE</Link></li>
                    <li><button onClick={() => { logout(); setIsUserMenuOpen(false); }} className="w-full text-left px-4 py-[10px] text-[14px] text-[#333] hover:bg-[#f8f9fa] transition-colors bg-transparent border-none cursor-pointer"><i className="fas fa-sign-out-alt w-[20px] text-center mr-3"></i> Đăng xuất</button></li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link href="/login" className="hidden xl:block text-[#333] text-[18px] relative transition-colors">
                <i className="far fa-user"></i>
              </Link>
            )}

            {/* Cart Icon (All devices) */}
            <div className="text-[#000] text-[18px] relative cursor-pointer" onClick={() => toggleMiniCart()}>
              <i className="fas fa-shopping-bag text-[24px]"></i>
              {totalItems > 0 && (
                <span className="absolute -top-[5px] -right-[10px] bg-[#ff0000] text-white text-[11px] font-bold px-[6px] py-[2px] rounded-full leading-none flex items-center justify-center">
                  {totalItems}
                </span>
              )}
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
            <li>
              <div className="flex justify-between items-center mb-4">
                <Link href="/blogs" className="text-[#333] font-bold block w-full text-[14px] no-underline uppercase">TIN TỨC</Link>
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

    </>
  );
}
