'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateSupportPage() {
  const router = useRouter();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [category, setCategory] = useState('');
  
  const categories = [
    { value: 'Tai khoan', label: 'Tài khoản' },
    { value: 'Don hang', label: 'Đơn hàng' },
    { value: 'Thanh toan', label: 'Thanh toán' },
    { value: 'Giao nhan', label: 'Giao nhận' },
    { value: 'Khac', label: 'Khác' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) {
      alert("Vui lòng chọn danh mục hỗ trợ!");
      return;
    }
    // Logic for submitting the form would go here
    alert("Yêu cầu hỗ trợ đã được gửi thành công!");
    router.push('/account/support');
  };

  return (
    <>
      <div className="flex justify-between items-center border-b border-[#e1e1e1] pb-[16px] mb-[24px]">
        <h5 className="font-bold mb-0 uppercase text-[20px] text-[#222]">
          Yêu cầu hỗ trợ của bạn
        </h5>
        <Link 
          href="/account/support/create" 
          className="bg-[#222] text-white px-[24px] py-[8px] flex items-center text-[14px] font-medium transition-colors hover:bg-white hover:text-[#222] border border-[#222]"
          style={{ borderRadius: '20px 0 20px 0', letterSpacing: '0.5px' }}
        >
          <span className="border-[1.5px] border-current rounded-full w-[16px] h-[16px] inline-flex justify-center items-center mr-[8px]">
            <i className="fas fa-plus text-[9px]"></i>
          </span>
          GỬI <span className="hidden md:inline ml-1">YÊU CẦU HỖ TRỢ</span>
        </Link>
      </div>

      <div className="text-center mt-[48px] mb-[24px]">
        <h5 className="font-bold mb-[8px] text-[18px] text-[#222]">Gửi yêu cầu hỗ trợ của bạn</h5>
        <p className="text-[#6c6d70] mb-[24px] text-[14px]">
          Xin vui lòng cho chúng tôi biết bạn đang gặp khó khăn gì,<br />
          chúng tôi luôn sẵn sàng trợ giúp bạn
        </p>
      </div>
      
      <div className="flex justify-center mb-[48px]">
        <div className="w-full md:w-[75%] lg:w-[66.666667%]">
          <form onSubmit={handleSubmit}>
            
            {/* Custom Dropdown */}
            <div className="mb-[24px] relative">
              <div 
                className={`w-full border rounded-[4px] px-[15px] py-[12px] h-auto text-[14px] cursor-pointer flex items-center justify-between bg-white z-20 relative transition-colors ${isCategoryOpen ? 'border-[#222] text-[#222]' : 'border-[#e1e1e1] text-[#6c6d70] hover:border-[#222]'}`}
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span>{category ? categories.find(c => c.value === category)?.label : 'Danh mục hỗ trợ'}</span>
                <i className={`fas fa-chevron-down text-[12px] transition-transform duration-300 ${isCategoryOpen ? 'rotate-180 text-[#222]' : 'text-[#6c6d70]'}`}></i>
              </div>
              
              <div 
                className={`absolute top-full left-0 w-full bg-white border-[#e1e1e1] rounded-[4px] overflow-hidden transition-all duration-300 z-30 shadow-[0_5px_15px_rgba(0,0,0,0.1)] ${isCategoryOpen ? 'max-h-[300px] border mt-1 opacity-100' : 'max-h-0 border-0 mt-0 opacity-0'}`}
              >
                <ul className="list-none m-0 p-0">
                  {categories.map((c) => (
                    <li 
                      key={c.value}
                      className={`px-[15px] py-[10px] text-[14px] cursor-pointer transition-colors hover:bg-[#f8f9fa] hover:text-[#222] ${category === c.value ? 'bg-[#f8f9fa] font-semibold text-[#222]' : 'text-[#6c6d70]'}`}
                      onClick={() => {
                        setCategory(c.value);
                        setIsCategoryOpen(false);
                      }}
                    >
                      {c.label}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Hidden input for HTML form submission */}
              <input type="hidden" name="category" value={category} />
            </div>
            
            <div className="mb-[24px]">
              <input 
                type="text" 
                name="topic" 
                className="w-full border border-[#e1e1e1] rounded-[4px] px-[15px] py-[12px] h-auto text-[14px] text-[#222] placeholder-[#6c6d70] focus:outline-none focus:border-[#222]" 
                placeholder="Chủ đề" 
                required 
              />
            </div>
            
            <div className="mb-[24px]">
              <textarea 
                name="content" 
                className="w-full border border-[#e1e1e1] rounded-[4px] px-[15px] py-[12px] text-[14px] text-[#222] placeholder-[#6c6d70] resize-y focus:outline-none focus:border-[#222]" 
                placeholder="Nhập yêu cầu của bạn" 
                rows={5} 
                required 
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#222] text-white rounded-[4px] py-[14px] font-semibold text-[14px] border border-[#222] tracking-[0.5px] transition-colors hover:bg-white hover:text-[#222]"
            >
              GỬI YÊU CẦU
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
