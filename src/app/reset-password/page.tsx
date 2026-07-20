'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    // Simulate API call
    alert("Cập nhật mật khẩu thành công!");
    router.push('/login');
  };

  return (
    <div className="container-luxe w-full px-[15px] min-[1200px]:px-[85px] mx-auto mt-[40px] mb-[60px]">
      <div className="flex justify-center">
        <div className="w-full max-w-[600px]">
          
          <div className="text-center mb-[40px]">
            <h1 className="text-[24px] font-semibold text-[#221f20] mb-[15px] font-['Montserrat',sans-serif]">
              Tạo mật khẩu mới
            </h1>
            <p className="text-[14px] text-[#6c6d70] leading-[24px]">
              Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto">
            <div className="mb-[20px]">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[48px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors placeholder-[#a3a3a3] font-['Montserrat',sans-serif]" 
                placeholder="Mật khẩu mới" 
              />
            </div>

            <div className="mb-[25px]">
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[48px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors placeholder-[#a3a3a3] font-['Montserrat',sans-serif]" 
                placeholder="Nhập lại mật khẩu mới" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#222] text-white py-[14px] font-semibold text-[15px] border border-[#222] rounded-tl-[24px] rounded-br-[24px] hover:bg-white hover:text-[#222] transition-colors uppercase mb-[20px]"
            >
              CẬP NHẬT MẬT KHẨU
            </button>
            
            <div className="text-center">
              <Link href="/login" className="text-[#6c6d70] text-[14px] hover:text-[#222] underline underline-offset-4 transition-colors">
                Quay lại Đăng nhập
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
