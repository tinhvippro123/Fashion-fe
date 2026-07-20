'use client';

import React, { useState } from 'react';

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Mock data
  const [user, setUser] = useState({
    firstName: "Thanh",
    lastName: "Lê",
    phone: "0905898683",
    email: "thanh.le@example.com",
    gender: "FEMALE",
    dateOfBirth: "1995-01-01"
  });

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Cập nhật thông tin thành công!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setSuccessMessage('Đổi mật khẩu thành công!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <>
      <h5 className="font-bold mb-[15px] uppercase text-[18px] text-[#222]">Tài khoản của tôi</h5>

      <div className="bg-[#d1ecf1] text-[#0c5460] text-[14px] p-[12px_20px] mb-[24px]">
        "Vì chính sách an toàn thẻ, bạn không thể thay đổi SĐT, Ngày sinh, Họ tên. Vui lòng liên hệ CSKH 0905898683 để được hỗ trợ"
      </div>

      {successMessage && (
        <div className="bg-[#d4edda] text-[#155724] p-[12px_20px] mb-[24px] rounded flex items-center justify-between">
          <div><i className="fas fa-check-circle mr-[8px]"></i> {successMessage}</div>
          <button onClick={() => setSuccessMessage('')} className="text-[#155724] font-bold">&times;</button>
        </div>
      )}

      <form onSubmit={handleUpdateProfile}>
        <div className="flex flex-col lg:flex-row mx-[-15px]">
          
          {/* Left Form Column */}
          <div className="w-full lg:w-7/12 px-[15px] order-2 lg:order-1">
            
            <div className="flex flex-col md:flex-row md:items-center mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] w-full md:w-[150px] shrink-0 mb-[8px] md:mb-0">Họ</label>
              <div className="flex-1 w-full">
                <input type="text" className="w-full bg-[#f8f9fa] border-0 rounded-[4px] p-[10px_15px] text-[14px] text-[#495057] outline-none" value={user.lastName} readOnly />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] w-full md:w-[150px] shrink-0 mb-[8px] md:mb-0">Tên</label>
              <div className="flex-1 w-full">
                <input type="text" className="w-full bg-[#f8f9fa] border-0 rounded-[4px] p-[10px_15px] text-[14px] text-[#495057] outline-none" value={user.firstName} readOnly />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] w-full md:w-[150px] shrink-0 mb-[8px] md:mb-0">Số điện thoại</label>
              <div className="flex-1 w-full">
                <input type="text" className="w-full bg-[#f8f9fa] border-0 rounded-[4px] p-[10px_15px] text-[14px] text-[#495057] outline-none" value={user.phone} readOnly />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] w-full md:w-[150px] shrink-0 mb-[8px] md:mb-0">Email</label>
              <div className="flex-1 w-full">
                <input 
                  type="email" 
                  className="w-full border border-[#f0f0f0] rounded-[4px] p-[10px_15px] text-[14px] text-[#495057] outline-none focus:border-[#222] transition-colors" 
                  value={user.email} 
                  onChange={(e) => setUser({...user, email: e.target.value})} 
                />
              </div>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:items-center mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] w-full md:w-[150px] shrink-0 mb-[8px] md:mb-0">Giới tính</label>
              <div className="flex-1 w-full flex items-center">
                <label className="flex items-center mr-[24px] cursor-pointer">
                  <input type="radio" name="gender" value="MALE" checked={user.gender === 'MALE'} onChange={(e) => setUser({...user, gender: e.target.value})} className="mr-[8px] accent-[#222]" />
                  <span className="text-[14px] text-[#495057]">Nam</span>
                </label>
                <label className="flex items-center mr-[24px] cursor-pointer">
                  <input type="radio" name="gender" value="FEMALE" checked={user.gender === 'FEMALE'} onChange={(e) => setUser({...user, gender: e.target.value})} className="mr-[8px] accent-[#222]" />
                  <span className="text-[14px] text-[#495057]">Nữ</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="gender" value="OTHER" checked={user.gender === 'OTHER'} onChange={(e) => setUser({...user, gender: e.target.value})} className="mr-[8px] accent-[#222]" />
                  <span className="text-[14px] text-[#495057]">Khác</span>
                </label>
              </div>
            </div>

            <div className="hidden md:flex flex-col md:flex-row md:items-center mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] w-full md:w-[150px] shrink-0 mb-[8px] md:mb-0">Ngày sinh</label>
              <div className="flex-1 w-full">
                <input type="date" className="w-full bg-[#f8f9fa] border-0 rounded-[4px] p-[10px_15px] text-[14px] text-[#495057] outline-none" value={user.dateOfBirth} readOnly />
              </div>
            </div>

            {/* Mobile visible fields */}
            <div className="flex md:hidden flex-col mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] mb-[8px]">Giới tính</label>
              <div className="flex items-center">
                <label className="flex items-center mr-[24px] cursor-pointer">
                  <input type="radio" name="gender_mobile" value="MALE" checked={user.gender === 'MALE'} onChange={(e) => setUser({...user, gender: e.target.value})} className="mr-[8px] accent-[#222]" />
                  <span className="text-[14px] text-[#495057]">Nam</span>
                </label>
                <label className="flex items-center mr-[24px] cursor-pointer">
                  <input type="radio" name="gender_mobile" value="FEMALE" checked={user.gender === 'FEMALE'} onChange={(e) => setUser({...user, gender: e.target.value})} className="mr-[8px] accent-[#222]" />
                  <span className="text-[14px] text-[#495057]">Nữ</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="gender_mobile" value="OTHER" checked={user.gender === 'OTHER'} onChange={(e) => setUser({...user, gender: e.target.value})} className="mr-[8px] accent-[#222]" />
                  <span className="text-[14px] text-[#495057]">Khác</span>
                </label>
              </div>
            </div>

            <div className="flex md:hidden flex-col mb-[24px]">
              <label className="text-[#6c6d70] text-[14px] mb-[8px]">Ngày sinh</label>
              <div className="w-full">
                <input type="date" className="w-full bg-[#f8f9fa] border-y border-[#e7e8e9] p-[15px_15px] text-[14px] text-[#495057] outline-none" value={user.dateOfBirth} readOnly />
              </div>
            </div>

            <div className="flex mt-[16px]">
              <div className="hidden md:block w-[150px] shrink-0"></div>
              <div className="flex w-full">
                <button type="submit" className="bg-[#222] text-white px-[24px] py-[8px] mr-[16px] font-bold text-[14px] border border-[#222] rounded-tl-[20px] rounded-br-[20px] hover:bg-white hover:text-[#222] transition-colors">
                  CẬP NHẬT
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#333] px-[24px] py-[8px] font-bold text-[14px] border border-[#333] rounded-tl-[20px] rounded-br-[20px] hover:bg-[#333] hover:text-white transition-colors"
                >
                  ĐỔI MẬT KHẨU
                </button>
              </div>
            </div>

          </div>

          {/* Right Discount Table Column */}
          <div className="w-full lg:w-5/12 px-[15px] order-1 lg:order-2 mb-[24px] lg:mb-0 lg:pl-[24px]">
            <table className="w-full border border-[#dee2e6] text-center text-[14px]">
              <tbody>
                <tr className="border-b border-[#dee2e6]">
                  <td className="bg-[#f8f9fa] text-[#6c6d70] py-[16px] px-[24px] w-1/2 align-middle border-r border-[#dee2e6]">Điểm chiết khấu</td>
                  <td className="font-bold py-[16px] px-[24px] align-middle text-[#222]">0</td>
                </tr>
                <tr className="border-b border-[#dee2e6]">
                  <td className="bg-[#f8f9fa] text-[#6c6d70] py-[16px] px-[24px] align-middle border-r border-[#dee2e6]">Chiết khấu</td>
                  <td className="font-bold py-[16px] px-[24px] align-middle text-[#222]">0%</td>
                </tr>
                <tr>
                  <td className="bg-[#f8f9fa] text-[#6c6d70] py-[16px] px-[24px] align-middle border-r border-[#dee2e6]">Hạn thẻ</td>
                  <td className="font-bold py-[16px] px-[24px] align-middle text-[#222]">14/04/2027</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </form>

      {/* Change Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-[15px]">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-[500px] shadow-lg rounded-none z-10 flex flex-col">
            <div className="p-[16px] border-b-0 relative">
              <h5 className="font-bold text-center text-[20px] uppercase tracking-[1px] m-0 text-[#222]">
                Đổi mật khẩu
              </h5>
              <button 
                className="absolute top-[16px] right-[16px] text-[#aaa] hover:text-[#222] text-[24px] leading-none"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="p-[24px] pt-[16px] sm:px-[48px] sm:pb-[48px]">
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-[16px]">
                  <label className="text-[12px] text-[#6c6d70] font-bold block mb-[8px]">Mật khẩu hiện tại</label>
                  <input type="password" required className="w-full h-[40px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors" />
                </div>
                <div className="mb-[16px]">
                  <label className="text-[12px] text-[#6c6d70] font-bold block mb-[8px]">Mật khẩu mới</label>
                  <input type="password" required className="w-full h-[40px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors" />
                </div>
                <div className="mb-[24px]">
                  <label className="text-[12px] text-[#6c6d70] font-bold block mb-[8px]">Nhập lại Mật khẩu mới</label>
                  <input type="password" required className="w-full h-[40px] px-[15px] border border-[#e7e8e9] rounded-[4px] text-[14px] outline-none focus:border-[#222] transition-colors" />
                </div>
                <button type="submit" className="w-full bg-[#222] text-white font-bold py-[12px] rounded-tl-[20px] rounded-br-[20px] hover:bg-white hover:text-[#222] border border-[#222] transition-colors uppercase text-[15px]">
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
