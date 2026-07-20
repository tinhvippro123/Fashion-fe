'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function LoyaltyPage() {
  const [points, setPoints] = useState(1250);
  const [history] = useState([
    { id: 1, action: 'Mua hàng đơn #12345', link: '/account/orders/12345', points: '+150', date: '19/07/2026', type: 'earn' },
    { id: 2, action: 'Đổi Voucher 50K', points: '-500', date: '15/07/2026', type: 'spend' },
    { id: 3, action: 'Mua hàng đơn #12300', link: '/account/orders/12300', points: '+300', date: '10/07/2026', type: 'earn' },
    { id: 4, action: 'Đánh giá sản phẩm', link: '/account/orders', points: '+50', date: '05/07/2026', type: 'earn' },
  ]);

  const vouchers = [
    { id: 1, title: 'Voucher 50K', pointsReq: 500, desc: 'Áp dụng cho mọi đơn hàng từ 200K' },
    { id: 2, title: 'Voucher 100K', pointsReq: 900, desc: 'Áp dụng cho mọi đơn hàng từ 500K' },
    { id: 3, title: 'Freeship 30K', pointsReq: 300, desc: 'Áp dụng cho phí vận chuyển toàn quốc' },
  ];

  const handleRedeem = (pointsReq: number, title: string) => {
    if (points >= pointsReq) {
      setPoints(points - pointsReq);
      toast.success(`Đổi ${title} thành công! Mã Voucher đã được lưu vào ví.`);
    } else {
      toast.error('Bạn không đủ điểm để đổi Voucher này.');
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-[20px] font-bold text-[#221f20] uppercase mb-[20px]">
        Điểm thưởng & Loyalty
      </h2>
      
      {/* Tier & Points Overview */}
      <div className="bg-[#fcf8f2] border border-[#f7941d]/20 rounded-lg p-[25px] flex flex-col md:flex-row justify-between items-center mb-[30px] shadow-sm">
        <div className="flex items-center gap-[20px] mb-[20px] md:mb-0">
          <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#f7941d] to-[#e10600] rounded-full flex items-center justify-center shadow-md">
            <i className="fas fa-crown text-[32px] text-white"></i>
          </div>
          <div>
            <h3 className="text-[24px] font-bold text-[#222]">Hạng GOLD</h3>
            <p className="text-[#666] text-[14px]">Mua thêm <span className="font-bold text-[#e10600]">2.500.000đ</span> để lên hạng PLATINUM</p>
          </div>
        </div>
        <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-[#ddd] pt-[20px] md:pt-0 md:pl-[30px]">
          <p className="text-[#666] text-[14px] uppercase font-bold tracking-[1px] mb-[5px]">Điểm tích lũy hiện tại</p>
          <div className="text-[40px] font-bold text-[#e10600] leading-none">{points}</div>
          <p className="text-[#999] text-[13px] mt-[5px]">1 Điểm = 1 VNĐ khi thanh toán</p>
        </div>
      </div>

      {/* Vouchers Section */}
      <div className="mb-[40px]">
        <h3 className="text-[18px] font-bold text-[#222] mb-[15px]">
          Đổi Điểm Nhận Ưu Đãi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {vouchers.map(v => (
            <div key={v.id} className="border border-[#e7e8e9] rounded-[8px] p-[20px] relative hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 bg-[#e10600] text-white text-[12px] font-bold px-[10px] py-[4px] rounded-bl-[8px] rounded-tr-[8px]">
                {v.pointsReq} Điểm
              </div>
              <div className="flex items-center gap-[15px] mb-[15px] pt-[5px]">
                <div className="w-[45px] h-[45px] bg-[#f8f9fa] rounded-full flex items-center justify-center text-[#f7941d] shrink-0 border border-[#eee]">
                  <i className="fas fa-ticket-alt text-[20px]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#222] text-[16px]">{v.title}</h4>
                </div>
              </div>
              <p className="text-[#666] text-[13px] mb-[20px] min-h-[40px]">
                {v.desc}
              </p>
              <button 
                onClick={() => handleRedeem(v.pointsReq, v.title)}
                disabled={points < v.pointsReq}
                className={`w-full py-[10px] rounded-[4px] font-bold text-[14px] uppercase transition-colors ${
                  points >= v.pointsReq 
                    ? 'bg-[#000] text-white hover:bg-[#333]' 
                    : 'bg-[#eee] text-[#999] cursor-not-allowed'
                }`}
              >
                Đổi ngay
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* History Section */}
      <div>
        <h3 className="text-[18px] font-bold text-[#222] mb-[15px]">
          Lịch Sử Giao Dịch Điểm
        </h3>
        <div className="border border-[#e7e8e9] rounded-[8px] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#f8f9fa] border-b border-[#e7e8e9]">
              <tr>
                <th className="py-[12px] px-[15px] text-[14px] text-[#222] font-semibold">Thời gian</th>
                <th className="py-[12px] px-[15px] text-[14px] text-[#222] font-semibold">Hoạt động</th>
                <th className="py-[12px] px-[15px] text-[14px] text-[#222] font-semibold text-right">Biến động</th>
              </tr>
            </thead>
            <tbody>
              {history.map(item => (
                <tr key={item.id} className="border-b border-[#e7e8e9] last:border-b-0 hover:bg-[#fafafa]">
                  <td className="py-[12px] px-[15px] text-[14px] text-[#666]">{item.date}</td>
                  <td className="py-[12px] px-[15px] text-[14px] text-[#222]">
                    {item.link ? (
                      <Link href={item.link} className="hover:text-[#e10600] transition-colors hover:underline">
                        {item.action}
                      </Link>
                    ) : (
                      <span>{item.action}</span>
                    )}
                  </td>
                  <td className={`py-[12px] px-[15px] text-[14px] font-bold text-right ${item.type === 'earn' ? 'text-[#28a745]' : 'text-[#e10600]'}`}>
                    {item.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
