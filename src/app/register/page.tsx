'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Fetch Provinces
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/?depth=1')
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch((err) => console.error("Error fetching provinces", err));
  }, []);

  // Fetch Districts when Province changes
  useEffect(() => {
    if (selectedProvince) {
      const province = provinces.find(p => p.name === selectedProvince);
      if (province) {
        fetch(`https://provinces.open-api.vn/api/p/${province.code}?depth=2`)
          .then((res) => res.json())
          .then((data) => {
            setDistricts(data.districts || []);
            setWards([]);
            setSelectedDistrict('');
          })
          .catch((err) => console.error("Error fetching districts", err));
      }
    } else {
      setDistricts([]);
      setWards([]);
      setSelectedDistrict('');
    }
  }, [selectedProvince, provinces]);

  // Fetch Wards when District changes
  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find(d => d.name === selectedDistrict);
      if (district) {
        fetch(`https://provinces.open-api.vn/api/d/${district.code}?depth=2`)
          .then((res) => res.json())
          .then((data) => setWards(data.wards || []))
          .catch((err) => console.error("Error fetching wards", err));
      }
    } else {
      setWards([]);
    }
  }, [selectedDistrict, districts]);

  return (
    <div className="container-luxe w-full px-[15px] min-[1200px]:px-[85px] mx-auto mt-[40px] mb-[30px]">
      <div className="max-w-[1170px] mx-auto w-full">
        <h2 className="text-[24px] font-semibold text-[#221f20] text-center mb-[40px] font-['Montserrat',sans-serif] uppercase">Đăng ký</h2>
        
        <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col lg:flex-row -mx-[15px]">
            
            {/* Left Col: Customer Info */}
            <div className="w-full lg:w-1/2 px-[15px] mb-[40px] lg:mb-0 lg:pr-[28px] lg:border-r lg:border-[#e1e1e1]">
              <h5 className="font-semibold text-[20px] text-[#221f20] mb-[25px] font-['Montserrat',sans-serif]">Thông tin khách hàng</h5>
              
              <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                <div className="w-full sm:w-1/2">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Họ:<span className="text-[#ff0000]">*</span></label>
                  <input type="text" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3]" placeholder="Họ..." required />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Tên:<span className="text-[#ff0000]">*</span></label>
                  <input type="text" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3]" placeholder="Tên..." required />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                <div className="w-full sm:w-1/2">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Email:<span className="text-[#ff0000]">*</span></label>
                  <input type="email" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3]" placeholder="Email..." required />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Điện thoại:<span className="text-[#ff0000]">*</span></label>
                  <input type="text" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3]" placeholder="Điện thoại..." required />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                <div className="w-full sm:w-1/2">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Ngày sinh:<span className="text-[#ff0000]">*</span></label>
                  <input type="date" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#a3a3a3] outline-none focus:border-[#222] bg-white" placeholder="Ngày sinh..." required />
                </div>
                <div className="w-full sm:w-1/2 relative">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Giới tính:<span className="text-[#ff0000]">*</span></label>
                  <select className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#222] outline-none focus:border-[#222] bg-white appearance-none cursor-pointer">
                    <option value="nu">Nữ</option>
                    <option value="nam">Nam</option>
                    <option value="khac">Khác</option>
                  </select>
                  <div className="absolute right-[15px] top-[45px] pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#221F20" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                <div className="w-full sm:w-1/2 relative">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Tỉnh/TP:<span className="text-[#ff0000]">*</span></label>
                  <select 
                    className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] bg-white appearance-none cursor-pointer" 
                    required
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                  >
                    <option value="">Chọn Tỉnh/Tp</option>
                    {provinces.map(p => <option key={p.code} value={p.name}>{p.name}</option>)}
                  </select>
                  <div className="absolute right-[15px] top-[45px] pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#221F20" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 relative">
                  <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Quận/Huyện:<span className="text-[#ff0000]">*</span></label>
                  <select 
                    className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] bg-white appearance-none cursor-pointer" 
                    required
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                  >
                    <option value="">Chọn Quận/Huyện</option>
                    {districts.map(d => <option key={d.code} value={d.name}>{d.name}</option>)}
                  </select>
                  <div className="absolute right-[15px] top-[45px] pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#221F20" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-[20px] relative">
                <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Phường/Xã:<span className="text-[#ff0000]">*</span></label>
                <select className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] bg-white appearance-none cursor-pointer" required>
                  <option value="">Chọn Phường/Xã</option>
                  {wards.map(w => <option key={w.code} value={w.name}>{w.name}</option>)}
                </select>
                <div className="absolute right-[15px] top-[45px] pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#221F20" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="mb-[20px]">
                <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Địa chỉ:<span className="text-[#ff0000]">*</span></label>
                <textarea className="w-full h-[100px] p-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3] resize-none" placeholder="" required></textarea>
              </div>
            </div>

            {/* Right Col: Password Info */}
            <div className="w-full lg:w-1/2 px-[15px] lg:pl-[28px] pt-[20px] lg:pt-0">
              <h5 className="font-semibold text-[20px] text-[#221f20] mb-[25px] font-['Montserrat',sans-serif]">Thông tin mật khẩu</h5>
              
              <div className="mb-[20px]">
                <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Mật khẩu:<span className="text-[#ff0000]">*</span></label>
                <input type="password" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3]" placeholder="Mật khẩu..." required />
              </div>

              <div className="mb-[20px]">
                <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Nhập lại mật khẩu:<span className="text-[#ff0000]">*</span></label>
                <input type="password" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder-[#a3a3a3]" placeholder="Nhập lại mật khẩu..." required />
              </div>

              <div className="mb-[20px]">
                <label className="block text-[14px] text-[#6c6d70] mb-[8px] font-['Montserrat',sans-serif]">Mời nhập các ký tự trong hình vào ô sau:<span className="text-[#ff0000]">*</span></label>
                <input type="text" className="w-full h-[50px] px-[15px] border border-[#e1e1e1] rounded-[8px] text-[14px] text-[#6c6d70] outline-none focus:border-[#222] placeholder" placeholder="Mã xác thực..." required />
              </div>

              <div className="mb-[25px]">
                <div className="inline-block px-[20px] py-[10px] bg-white border border-[#e1e1e1] text-[24px] tracking-[5px] font-serif italic text-[#221f20]">
                  i x k 8 0
                </div>
              </div>

              <div className="mb-[15px] flex items-center">
                <input type="checkbox" id="termAgree" className="w-[16px] h-[16px] mr-[10px] cursor-pointer border-[#e1e1e1] rounded-[4px]" required />
                <label htmlFor="termAgree" className="text-[14px] text-[#6c6d70] cursor-pointer font-['Montserrat',sans-serif]">
                  Đồng ý với các <Link href="#" className="text-[#ff0000]">điều khoản</Link> của LUXE
                </label>
              </div>
              
              <div className="mb-[30px] flex items-center">
                <input type="checkbox" id="newsAgree" className="w-[16px] h-[16px] mr-[10px] cursor-pointer border-[#e1e1e1] rounded-[4px]" />
                <label htmlFor="newsAgree" className="text-[14px] text-[#6c6d70] cursor-pointer font-['Montserrat',sans-serif]">
                  Đăng ký nhận bản tin
                </label>
              </div>

              <button type="submit" className="w-full bg-[#222] text-white py-[15px] font-semibold text-[15px] uppercase border border-[#222] rounded-tl-[24px] rounded-br-[24px] hover:bg-white hover:text-[#222] transition-colors text-center font-['Montserrat',sans-serif]">
                ĐĂNG KÝ
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
