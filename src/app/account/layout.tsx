'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import AccountSidebar from '@/components/account/AccountSidebar';
import { useAuthStore } from '@/store/useAuthStore';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuthStore();

  const getBreadcrumbTitle = () => {
    if (pathname.includes('/account/profile')) return 'Tài khoản của tôi';
    if (pathname.includes('/account/addresses')) return 'Danh sách địa chỉ';
    if (pathname.includes('/account/faq')) return 'Thông tin câu hỏi';
    if (pathname.includes('/account/login-history')) return 'Lịch sử đăng nhập';
    if (pathname.includes('/account/orders')) return 'Quản lý đơn hàng';
    if (pathname.includes('/account/recently-viewed')) return 'Sản phẩm đã xem';
    if (pathname.includes('/account/wishlist')) return 'Sản phẩm yêu thích';
    if (pathname.includes('/account/loyalty')) return 'Điểm thưởng (Loyalty)';
    if (pathname.includes('/account/support')) return 'Hỗ trợ - LUXE';
    return 'Tài khoản';
  };

  useEffect(() => {
    // Wait for hydration or basic check
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <div className="container-luxe w-full px-[15px] min-[1200px]:px-[85px] mx-auto mb-[50px]">
      
      {/* Breadcrumb */}
      <div className="text-[14px] font-bold uppercase border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
        <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">Trang chủ</Link> 
        <span className="mx-[8px]">-</span> 
        <span>{getBreadcrumbTitle()}</span>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <div className="mb-[24px] shrink-0 lg:mr-[24px] xl:mr-[40px]">
           <AccountSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
            {children}
        </div>
        
      </div>
    </div>
  );
}
