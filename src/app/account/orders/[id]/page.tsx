'use client';

import React, { use } from 'react';
import Link from 'next/link';

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);

  // Mock Data
  const order = {
    id: unwrappedParams.id,
    status: "DELIVERED",
    orderDate: "08/12/2025",
    totalAmount: 2120000, // 2 items + shipping
    subTotal: 2090000,
    shippingFee: 30000,
    paymentMethod: "Thanh toán khi nhận hàng (COD)",
    shippingProvider: "Chuyển phát nhanh",
    address: {
      name: "Lê Thanh",
      phone: "0905898683",
      street: "123 Đường Nguyễn Văn Linh",
      ward: "Phường Nam Dương",
      district: "Quận Hải Châu",
      province: "Đà Nẵng"
    },
    items: [
      {
        productName: "Áo sơ mi lụa tơ tằm",
        productImage: "/uploads/03321697-61dc-4f30-8da7-d25085a78741.webp",
        unitPrice: 1045000,
        colorName: "Trắng",
        sizeName: "M",
        quantity: 1
      },
      {
        productName: "Quần âu ống suông",
        productImage: "/uploads/0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp",
        unitPrice: 1045000,
        colorName: "Đen",
        sizeName: "M",
        quantity: 1
      }
    ]
  };

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'PENDING': return <span className="text-[#ffc107]"><i className="fas fa-clock mr-[4px]"></i> CHỜ XỬ LÝ</span>;
      case 'SHIPPING': return <span className="text-[#17a2b8]"><i className="fas fa-truck mr-[4px]"></i> ĐANG GIAO HÀNG</span>;
      case 'DELIVERED': return <span className="text-[#28a745]"><i className="fas fa-check-circle mr-[4px]"></i> GIAO THÀNH CÔNG</span>;
      case 'CANCELLED': return <span className="text-[#dc3545]"><i className="fas fa-sync mr-[4px] text-[12px]"></i> ĐÃ HỦY ĐƠN HÀNG</span>;
      default: return <span>{status}</span>;
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row mx-[-15px]">
        {/* Main Content */}
        <div className="w-full lg:w-8/12 px-[15px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-[24px] border-b border-[#e1e1e1] pb-[16px]">
            <h5 className="font-bold mb-[8px] md:mb-0 uppercase text-[18px] text-[#222]">
              <Link href="/account/orders" className="text-[#222] mr-[8px] hover:text-[#555]">
                <i className="fas fa-chevron-left"></i>
              </Link>
              CHI TIẾT ĐƠN HÀNG <span className="text-[#dc3545]">LUXE{order.id}</span>
            </h5>
            <div className="text-[14px] font-bold">
              {getStatusDisplay(order.status)}
            </div>
          </div>

          {/* Items */}
          <div className="mb-[24px] border-b border-[#e1e1e1] pb-[24px]">
            {order.items.map((item, index) => (
              <div key={index} className="flex flex-row mb-[24px] last:mb-0">
                <img 
                  src={item.productImage} 
                  alt={item.productName} 
                  className="w-[100px] h-[150px] md:w-[120px] md:h-[180px] object-cover rounded-[4px] mr-[16px] md:mr-[24px] shrink-0" 
                />
                <div className="flex-1 min-w-0 flex flex-col py-[2px] md:py-[4px]">
                  <div>
                    <div className="flex justify-between mb-[4px] md:mb-[8px]">
                      <div className="font-bold text-[14px] md:text-[16px] text-[#222] pr-[8px] md:pr-[16px]">{item.productName}</div>
                      <div className="font-bold text-[14px] md:text-[16px] text-[#222] shrink-0">{item.unitPrice.toLocaleString('vi-VN')}đ</div>
                    </div>
                    <div className="text-[#6c6d70] text-[13px] md:text-[14px] mt-[4px] md:mt-[8px]">Màu sắc: <span className="text-[#222]">{item.colorName}</span></div>
                    <div className="text-[#6c6d70] text-[13px] md:text-[14px] mt-[4px]">Size: <span className="text-[#222]">{item.sizeName}</span></div>
                    <div className="text-[#6c6d70] text-[13px] md:text-[14px] mt-[4px]">Số lượng: <span className="text-[#222]">{item.quantity}</span></div>
                  </div>
                  
                  <div className="mt-auto">
                    <Link href="#" className="inline-block border border-[#222] text-[#222] text-[12px] md:text-[14px] px-[16px] md:px-[24px] py-[4px] rounded-full hover:bg-[#222] hover:text-white transition-colors uppercase font-medium">
                      Mua lại
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-start mt-[16px] pt-[8px]">
            <Link href={`/account/orders/${order.id}/tracking`} className="bg-[#222] text-white font-bold py-[8px] px-[24px] mb-[16px] rounded-tl-[12px] rounded-br-[12px] text-[14px] border border-[#222] hover:bg-white hover:text-[#222] transition-colors uppercase">
              Theo dõi đơn hàng
            </Link>
            <Link href="#" className="bg-[#222] text-white font-bold py-[8px] px-[24px] rounded-tl-[12px] rounded-br-[12px] text-[14px] border border-[#222] hover:bg-white hover:text-[#222] transition-colors uppercase">
              Thanh toán lại đơn hàng
            </Link>
          </div>
        </div>

        {/* Sidebar Right */}
        <div className="w-full lg:w-4/12 px-[15px] mt-[32px] lg:mt-0 lg:pl-[40px]">
          <div className="mb-[24px]">
            <h6 className="font-bold mb-[24px] text-[16px] text-[#222]">Tóm tắt đơn hàng</h6>
            <div className="flex justify-content-between text-[14px] mb-[16px] text-[#6c6d70]">
              <span>Ngày tạo đơn</span>
              <span className="ml-auto">{order.orderDate}</span>
            </div>
            <div className="flex justify-content-between text-[14px] mb-[16px] text-[#6c6d70]">
              <span>Tạm tính</span>
              <span className="ml-auto">{order.subTotal.toLocaleString('vi-VN')} đ</span>
            </div>
            <div className="flex justify-content-between text-[14px] mb-[24px] text-[#6c6d70]">
              <span>Phí vận chuyển</span>
              <span className="ml-auto">{order.shippingFee.toLocaleString('vi-VN')} đ</span>
            </div>
            <div className="flex justify-content-between pt-[4px] pb-[24px] mb-[24px] border-b border-[#e1e1e1]">
              <span className="text-[#222] text-[14px]">Tổng tiền</span>
              <span className="font-bold text-[#222] text-[15px] ml-auto">{order.totalAmount.toLocaleString('vi-VN')} đ</span>
            </div>

            <h6 className="font-bold mb-[16px] text-[15px] text-[#222]">Hình thức thanh toán</h6>
            <p className="text-[14px] text-[#6c6d70] pb-[24px] mb-[24px] border-b border-[#e1e1e1]">{order.paymentMethod}</p>

            <h6 className="font-bold mb-[16px] text-[15px] text-[#222]">Đơn vị vận chuyển</h6>
            <p className="text-[14px] text-[#6c6d70] pb-[24px] mb-[24px] border-b border-[#e1e1e1]">{order.shippingProvider}</p>

            <h6 className="font-bold mb-[16px] text-[15px] text-[#222]">Địa chỉ</h6>
            <div className="text-[14px] text-[#6c6d70]">
              <p className="mb-[16px] text-[#222] font-medium">{order.address.name}</p>
              <p className="mb-[16px]">{`${order.address.street}, ${order.address.ward}, ${order.address.district}, ${order.address.province}`}</p>
              <p className="mb-0">Điện thoại: <span className="text-[#222]">{order.address.phone}</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
