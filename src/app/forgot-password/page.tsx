'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [inputValue, setInputValue] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue || !captcha) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    // Simulate API call
    alert("Yêu cầu lấy lại mật khẩu đã được gửi!");
  };

  return (
    <div className="container-luxe w-full px-[15px] min-[1200px]:px-[85px] mx-auto mt-[40px] mb-[60px]">
      <div className="flex justify-center">
        <div className="w-full max-w-[600px]">
          
          <div className="text-center mb-[40px]">
            <h1 className="text-[24px] font-semibold text-[#221f20] mb-[15px] font-['Montserrat',sans-serif]">
              Bạn muốn tìm lại mật khẩu?
            </h1>
            <p className="text-[14px] text-[#6c6d70] leading-[24px]">
              Vui lòng nhập lại email/số điện thoại đã đăng ký, hệ thống của chúng tôi sẽ gửi cho bạn 1 đường dẫn để thay đổi mật khẩu.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto">
            <div className="mb-[20px]">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full h-[48px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors placeholder-[#a3a3a3] font-['Montserrat',sans-serif]" 
                placeholder="Email / Số điện thoại..." 
              />
            </div>

            <div className="mb-[20px]">
              <input 
                type="text" 
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="w-full h-[48px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors placeholder-[#a3a3a3] font-['Montserrat',sans-serif]" 
                placeholder="Nhập kí tự trong hình vào ô sau" 
              />
            </div>

            {/* Simulated CAPTCHA */}
            <div className="mb-[30px]">
              <div className="inline-block border border-[#e7e8e9] px-[20px] py-[10px] bg-[#f9f9f9] select-none">
                <span className="text-[22px] font-bold text-[#333] tracking-[8px] italic" style={{ fontFamily: 'Times New Roman, serif' }}>
                  4 z w p
                </span>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#222] text-white py-[14px] font-semibold text-[15px] border border-[#222] rounded-tl-[24px] rounded-br-[24px] hover:bg-white hover:text-[#222] transition-colors uppercase mb-[20px]"
            >
              GỬI ĐI
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
