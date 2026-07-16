'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AccountSidebar from '@/components/account/AccountSidebar';
import { useAuthStore } from '@/store/useAuthStore';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();

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
      <div className="text-[#6c6d70] text-[14px] border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
        <Link href="/" className="text-[#6c6d70] no-underline hover:text-[#222] transition-colors">Trang chủ</Link> 
        <span className="mx-[8px]">-</span> 
        <span className="text-[#222]">Tài khoản của tôi</span>
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
