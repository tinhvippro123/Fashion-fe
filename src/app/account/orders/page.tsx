'use client';

import React from 'react';
import Link from 'next/link';

export default function OrdersPage() {
  const mockOrders = [
    {
      id: "7891",
      orderDate: "08/12/2025 14:30:00",
      items: [
        { quantity: 1, productName: "Áo sơ mi lụa tơ tằm", colorName: "Trắng" },
        { quantity: 2, productName: "Quần âu ống suông", colorName: "Đen" }
      ],
      totalAmount: 2090000,
      status: "DELIVERED",
    },
    {
      id: "7892",
      orderDate: "10/12/2025 09:15:00",
      items: [
        { quantity: 1, productName: "Đầm xòe hoa nhí", colorName: "Xanh" }
      ],
      totalAmount: 850000,
      status: "PENDING",
    },
    {
      id: "7893",
      orderDate: "11/12/2025 18:45:00",
      items: [
        { quantity: 1, productName: "Chân váy chữ A", colorName: "Be" }
      ],
      totalAmount: 550000,
      status: "SHIPPING",
    },
    {
      id: "7894",
      orderDate: "15/12/2025 10:20:00",
      items: [
        { quantity: 1, productName: "Áo khoác blazer", colorName: "Nâu" }
      ],
      totalAmount: 1550000,
      status: "CANCELLED",
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING': return <i className="fas fa-clock mr-[4px] text-[#ffc107]"></i>;
      case 'SHIPPING': return <i className="fas fa-truck mr-[4px] text-[#17a2b8]"></i>;
      case 'DELIVERED': return <i className="fas fa-check-circle mr-[4px] text-[#28a745]"></i>;
      case 'CANCELLED': return <i className="fas fa-sync mr-[4px] text-[#6c757d] text-[12px]"></i>;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'PENDING': return 'Chờ xử lý';
      case 'SHIPPING': return 'Đang giao';
      case 'DELIVERED': return 'Đã giao';
      case 'CANCELLED': return 'Đã hủy đơn hàng';
      default: return status;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-[24px]">
        <h5 className="font-bold mb-[16px] md:mb-0 uppercase text-[18px] text-[#222]">QUẢN LÝ ĐƠN HÀNG</h5>

        <div className="flex items-center self-end md:self-auto">
          <label className="text-[#6c6d70] text-[14px] mr-[8px] mb-0 whitespace-nowrap">Trạng thái đơn hàng:</label> 
          <select className="border border-[#e7e8e9] rounded-[4px] p-[4px_10px] text-[14px] text-[#495057] outline-none focus:border-[#222] w-[150px] bg-white">
            <option>Tất cả</option>
            <option>Chờ xác nhận</option>
            <option>Đang giao</option>
            <option>Đã hủy</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-[14px] border-b border-[#dee2e6]">
          <thead className="bg-white border-y border-[#dee2e6] hidden xl:table-header-group">
            <tr className="text-[#6c6d70] uppercase font-bold text-[12px]">
              <th className="py-[16px] px-[8px] font-bold">Mã đơn hàng</th>
              <th className="py-[16px] px-[8px] font-bold">Ngày</th>
              <th className="py-[16px] px-[8px] font-bold w-[35%]">Sản phẩm</th>
              <th className="py-[16px] px-[8px] font-bold text-right">Tổng tiền</th>
              <th className="py-[16px] px-[8px] font-bold">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {mockOrders.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-[48px] text-[#6c6d70]">Bạn chưa có đơn hàng nào.</td>
              </tr>
            ) : (
              mockOrders.map((order) => (
                <tr key={order.id} className="flex flex-wrap xl:table-row border-b border-[#e1e1e1] py-[16px] xl:py-0">
                  {/* Mobile Layout: Flex wrap. Desktop Layout: Table row */}
                  
                  <td className="align-middle px-[8px] py-[4px] xl:py-[16px] w-auto xl:w-auto font-bold xl:font-normal text-left xl:text-left order-1 xl:order-none shrink-0">
                    <Link href={`/account/orders/${order.id}`} className="text-[#222] font-bold underline underline-offset-4 hover:text-[#555]">
                      LUXE{order.id}
                    </Link>
                  </td>

                  <td className="align-middle px-[8px] py-[4px] xl:py-[16px] text-[#6c6d70] text-[12px] xl:text-[14px] text-right xl:text-left flex-1 xl:flex-none order-2 xl:order-none">
                    {order.orderDate}
                  </td>

                  <td className="align-middle px-[8px] py-[8px] xl:py-[16px] w-full xl:w-auto order-3 xl:order-none">
                    {order.items.map((item, index) => (
                      <div key={index} className="text-[12px] xl:text-[14px] mb-[4px] text-[#222]">
                        <span>{item.quantity}x</span> <span className="font-medium">{item.productName}</span><span className="text-[#6c6d70]">, {item.colorName}</span>
                      </div>
                    ))}
                  </td>

                  <td className="align-middle px-[8px] py-[8px] xl:py-[16px] font-bold text-[#222] w-auto xl:w-auto text-left xl:text-right order-4 xl:order-none shrink-0">
                    {order.totalAmount.toLocaleString('vi-VN')} đ
                  </td>

                  <td className="align-middle px-[8px] py-[8px] xl:py-[16px] text-[12px] xl:text-[14px] w-auto xl:w-auto text-right xl:text-left flex-1 xl:flex-none order-5 xl:order-none text-[#222]">
                    <span className="whitespace-nowrap">
                      {getStatusIcon(order.status)} {getStatusText(order.status)}
                    </span>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Mock */}
      <div className="flex justify-center mt-[48px]">
        <nav>
          <ul className="flex list-none">
            <li className="mx-[4px]">
              <Link href="#" className="flex items-center justify-center w-[30px] h-[30px] rounded-tl-[10px] rounded-br-[10px] bg-[#222] text-white font-medium text-[14px] hover:bg-[#333] transition-colors">
                1
              </Link>
            </li>
            <li className="mx-[4px]">
              <Link href="#" className="flex items-center justify-center w-[30px] h-[30px] rounded-tl-[10px] rounded-br-[10px] bg-white text-[#222] font-medium text-[14px] hover:bg-[#f8f9fa] transition-colors border border-[#e7e8e9]">
                2
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
