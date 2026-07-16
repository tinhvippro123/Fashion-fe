'use client';

import React from 'react';

interface LoginHistory {
  id: number;
  device: string;
  software: string;
  loginType: string;
  address: string;
  ipAddress: string;
  loginTime: string;
}

export default function LoginHistoryPage() {
  // Mock Data
  const loginHistories: LoginHistory[] = [
    {
      id: 1,
      device: "Windows (desktop)",
      software: "Website luxefashion.com",
      loginType: "Mặc định",
      address: "-",
      ipAddress: "127.0.0.1",
      loginTime: "2026-07-15 14:40:05"
    },
    {
      id: 2,
      device: "iOS (mobile)",
      software: "Trình duyệt Safari",
      loginType: "Mặc định",
      address: "-",
      ipAddress: "192.168.1.5",
      loginTime: "2026-07-14 09:12:30"
    },
    {
      id: 3,
      device: "Mac OS (desktop)",
      software: "Website luxefashion.com",
      loginType: "Mặc định",
      address: "-",
      ipAddress: "113.190.233.10",
      loginTime: "2026-07-10 20:15:45"
    }
  ];

  return (
    <>
      <h5 className="font-bold mb-[24px] uppercase text-[20px] text-[#222]">
        Lịch sử đăng nhập
      </h5>

      <div className="overflow-x-hidden">
        {loginHistories.length === 0 ? (
          <div className="py-[48px] text-[#6c6d70] text-center">
            Chưa có lịch sử đăng nhập nào được ghi nhận.
          </div>
        ) : (
          <table className="w-full text-center align-middle text-[14px] border-collapse">
            <thead className="hidden md:table-header-group border-b-2 border-[#f2f2f2]">
              <tr>
                <th className="font-bold uppercase pb-[12px] pt-0 px-[15px] text-[#222]">Thiết bị</th>
                <th className="font-bold uppercase pb-[12px] pt-0 px-[15px] text-[#222]">Phần mềm</th>
                <th className="font-bold uppercase pb-[12px] pt-0 px-[15px] text-[#222]">Kiểu đăng nhập</th>
                <th className="font-bold uppercase pb-[12px] pt-0 px-[15px] text-[#222]">Địa chỉ</th>
                <th className="font-bold uppercase pb-[12px] pt-0 px-[15px] text-[#222]">IP</th>
                <th className="font-bold uppercase pb-[12px] pt-0 px-[15px] text-[#222]">Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {loginHistories.map(history => (
                <tr 
                  key={history.id}
                  className="block md:table-row mb-[25px] md:mb-0 border border-[#e1e1e1] md:border-0 rounded-[8px] md:rounded-none shadow-[0_4px_15px_rgba(0,0,0,0.06)] md:shadow-none overflow-hidden bg-white"
                >
                  <td 
                    data-label="Thiết bị" 
                    className="block md:table-cell py-[12px] md:py-[16px] pr-[15px] md:px-[15px] text-right md:text-center text-[#6c6d70] relative pl-[45%] border-b-[2px] md:border-b-[1px] border-[#e1e1e1] md:border-[#f2f2f2] bg-[#f8f9fa] md:bg-transparent
                    before:content-[attr(data-label)] before:absolute before:left-[15px] before:w-[40%] before:text-left before:font-semibold before:text-[#111] before:whitespace-nowrap md:before:hidden"
                  >
                    {history.device}
                  </td>
                  <td 
                    data-label="Phần mềm" 
                    className="block md:table-cell py-[12px] md:py-[16px] pr-[15px] md:px-[15px] text-right md:text-center text-[#6c6d70] relative pl-[45%] border-b border-[#f2f2f2] md:border-b-[1px]
                    before:content-[attr(data-label)] before:absolute before:left-[15px] before:w-[40%] before:text-left before:font-semibold before:text-[#111] before:whitespace-nowrap md:before:hidden"
                  >
                    {history.software}
                  </td>
                  <td 
                    data-label="Kiểu đăng nhập" 
                    className="block md:table-cell py-[12px] md:py-[16px] pr-[15px] md:px-[15px] text-right md:text-center text-[#6c6d70] relative pl-[45%] border-b border-[#f2f2f2] md:border-b-[1px]
                    before:content-[attr(data-label)] before:absolute before:left-[15px] before:w-[40%] before:text-left before:font-semibold before:text-[#111] before:whitespace-nowrap md:before:hidden"
                  >
                    {history.loginType}
                  </td>
                  <td 
                    data-label="Địa chỉ" 
                    className="block md:table-cell py-[12px] md:py-[16px] pr-[15px] md:px-[15px] text-right md:text-center text-[#6c6d70] relative pl-[45%] border-b border-[#f2f2f2] md:border-b-[1px]
                    before:content-[attr(data-label)] before:absolute before:left-[15px] before:w-[40%] before:text-left before:font-semibold before:text-[#111] before:whitespace-nowrap md:before:hidden"
                  >
                    {history.address}
                  </td>
                  <td 
                    data-label="IP" 
                    className="block md:table-cell py-[12px] md:py-[16px] pr-[15px] md:px-[15px] text-right md:text-center text-[#6c6d70] relative pl-[45%] border-b border-[#f2f2f2] md:border-b-[1px]
                    before:content-[attr(data-label)] before:absolute before:left-[15px] before:w-[40%] before:text-left before:font-semibold before:text-[#111] before:whitespace-nowrap md:before:hidden"
                  >
                    {history.ipAddress}
                  </td>
                  <td 
                    data-label="Thời gian" 
                    className="block md:table-cell py-[12px] md:py-[16px] pr-[15px] md:px-[15px] text-right md:text-center text-[#6c6d70] relative pl-[45%] md:border-b-[1px] md:border-[#f2f2f2] border-0
                    before:content-[attr(data-label)] before:absolute before:left-[15px] before:w-[40%] before:text-left before:font-semibold before:text-[#111] before:whitespace-nowrap md:before:hidden"
                  >
                    {history.loginTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
