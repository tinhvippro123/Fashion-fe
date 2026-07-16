'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  useEffect(() => {
    setIsMounted(true);
    // Fetch provinces
    fetch('https://provinces.open-api.vn/api/?depth=1')
      .then(res => res.json())
      .then(data => setProvinces(data));
  }, []);

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.options[e.target.selectedIndex].dataset.code;
    setSelectedProvince(e.target.value);
    setSelectedDistrict('');
    setSelectedWard('');
    setWards([]);
    
    if (code) {
      fetch(`https://provinces.open-api.vn/api/p/${code}?depth=2`)
        .then(res => res.json())
        .then(data => setDistricts(data.districts));
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.options[e.target.selectedIndex].dataset.code;
    setSelectedDistrict(e.target.value);
    setSelectedWard('');
    
    if (code) {
      fetch(`https://provinces.open-api.vn/api/d/${code}?depth=2`)
        .then(res => res.json())
        .then(data => setWards(data.wards));
    } else {
      setWards([]);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  if (!isMounted) return null;

  const totalAmount = totalPrice;
  const shippingFee = 0; // Default free shipping
  const finalTotal = totalAmount + shippingFee;

  return (
    <div className="pb-[80px]">
      <div className="container-luxe px-[15px] min-[1200px]:px-[85px] mx-auto mt-4">
        
        {/* Progress Bar Container */}
        <div className="max-w-[800px] mx-auto px-[20px] md:px-[40px]">
          {/* Progress Bar */}
          <div className="flex justify-between relative mb-[40px] md:mb-[50px] mt-[20px] md:mt-[30px]">
            {/* Background Line */}
            <div className="absolute top-[5px] md:top-[7px] left-[50px] right-[50px] h-[2px] bg-[#e0e0e0] z-[1]"></div>
            {/* Active Progress Line */}
            <div className="absolute top-[5px] md:top-[7px] left-[50px] w-[calc(50%-50px)] h-[2px] bg-[#222] z-[1]"></div>
            
            <div className="relative z-[2] text-center w-[100px]">
              <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] mx-auto rounded-full bg-[#222] mb-[5px] md:mb-[10px] relative z-10"></div>
              <span className="text-[12px] md:text-[14px] whitespace-nowrap text-[#333] relative z-10 bg-white px-1">Giỏ hàng</span>
            </div>
            <div className="relative z-[2] text-center w-[100px]">
              <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] mx-auto rounded-full bg-[#222] mb-[5px] md:mb-[10px] relative z-10"></div>
              <span className="text-[12px] md:text-[14px] whitespace-nowrap text-[#333] relative z-10 bg-white px-1">Đặt hàng</span>
            </div>
            <div className="relative z-[2] text-center w-[100px]">
              <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] mx-auto rounded-full bg-white border-[2px] border-[#e0e0e0] mb-[5px] md:mb-[10px] relative z-10"></div>
              <span className="text-[#999] text-[12px] md:text-[14px] whitespace-nowrap relative z-10 bg-white px-1">Hoàn thành đơn</span>
            </div>
          </div>
        </div>

          <form action="#" method="post" onSubmit={(e) => {
            e.preventDefault();
            router.push('/order-success');
          }}>
            <div className="flex flex-col lg:flex-row -mx-[15px]">
            
            {/* Left Column: Checkout Form */}
            <div className="w-full flex-1 px-[15px]">
              <div className="flex flex-col lg:flex-row -mx-[15px]">
                
                {/* Shipping Address */}
                <div className="w-full lg:w-[58.333333%] px-[15px] mb-4">
                  <h5 className="font-bold text-[20px] mb-4">Địa chỉ giao hàng</h5>

                  <div className="flex gap-[15px] mb-[30px]">
                    <button type="button" className="flex-1 py-[15px] text-center font-bold text-[14px] tracking-[1px] uppercase bg-[#222] text-white rounded-tl-[20px] rounded-br-[20px] hover:bg-black transition-colors">ĐĂNG NHẬP</button>
                    <button type="button" className="flex-1 py-[15px] text-center font-bold text-[14px] tracking-[1px] uppercase bg-white text-[#222] border border-[#222] rounded-tl-[20px] rounded-br-[20px] hover:bg-[#f9f9f9] transition-colors">ĐĂNG KÝ</button>
                  </div>
                  <p className="text-[13px] text-[#6c757d] mb-4">
                    Đăng nhập/Đăng ký tài khoản để được tích điểm và nhận thêm nhiều ưu đãi.
                  </p>
                  
                  <div className="mb-3 mt-3 font-bold">
                    <i className="fas fa-check-circle mr-1"></i> Địa chỉ nhận hàng
                  </div>

                  <div className="flex flex-col md:flex-row gap-[15px] mb-3">
                    <input type="text" name="receiverName" className="w-full md:w-1/2 border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] py-[10px] h-[45px] text-[14px] outline-none focus:border-[#222] transition-colors" placeholder="Họ tên" required />
                    <input type="text" name="phone" className="w-full md:w-1/2 border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] py-[10px] h-[45px] text-[14px] outline-none focus:border-[#222] transition-colors" placeholder="Số điện thoại" required />
                  </div>

                  <div className="flex flex-col md:flex-row gap-[15px] mb-3">
                    <select name="province" value={selectedProvince} onChange={handleProvinceChange} className="w-full md:w-1/2 border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] h-[45px] text-[14px] outline-none focus:border-[#222] transition-colors bg-white" required>
                      <option value="">Tỉnh/Thành phố</option>
                      {provinces.map(p => (
                        <option key={p.code} value={p.name} data-code={p.code}>{p.name}</option>
                      ))}
                    </select>
                    <select name="district" value={selectedDistrict} onChange={handleDistrictChange} className="w-full md:w-1/2 border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] h-[45px] text-[14px] outline-none focus:border-[#222] transition-colors bg-white" required>
                      <option value="">Quận/Huyện</option>
                      {districts.map(d => (
                        <option key={d.code} value={d.name} data-code={d.code}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <select name="ward" value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} className="w-full border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] h-[45px] text-[14px] outline-none focus:border-[#222] transition-colors bg-white" required>
                      <option value="">Phường xã</option>
                      {wards.map(w => (
                        <option key={w.code} value={w.name}>{w.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <input type="text" name="street" className="w-full border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] py-[10px] h-[45px] text-[14px] outline-none focus:border-[#222] transition-colors" placeholder="Địa chỉ (Ví dụ: 123 đường Lê Lợi)" required />
                  </div>

                  <div className="mt-3">
                    <textarea name="note" className="w-full border border-[#ddd] rounded-tl-[4px] rounded-br-[4px] px-[15px] py-[10px] h-[80px] text-[14px] outline-none focus:border-[#222] transition-colors resize-none" placeholder="Ghi chú thêm (Optional)"></textarea>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="w-full lg:w-[41.666667%] px-[15px] mb-4">
                  <h5 className="font-bold text-[20px] mb-[20px]">Phương thức giao hàng</h5>
                  
                  <div className="bg-white border border-[#eaeaea] rounded-tl-[30px] rounded-br-[30px] p-[30px]">
                    <div className="flex items-center">
                      <label className="flex items-center cursor-pointer mb-0">
                        <div className="relative w-[18px] h-[18px] mr-[12px] flex-shrink-0 mt-[2px]">
                          <input type="radio" name="shippingMethod" defaultChecked className="peer appearance-none w-full h-full border border-[#ccc] rounded-full checked:bg-[#222] checked:border-[#222] cursor-pointer transition-colors m-0" />
                          <svg className="absolute top-[4px] left-[4px] w-[10px] h-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-[#333] text-[15px] font-medium">Chuyển phát nhanh</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center mt-[40px]">
                    <h5 className="font-bold text-[16px] mb-0 mr-3">Bạn có muốn nhận hoá đơn VAT không ?</h5>
                    <div className="relative inline-block w-[40px] h-[20px] ml-[10px]">
                      <input type="checkbox" id="vatSwitch" className="peer opacity-0 w-0 h-0" />
                      <label htmlFor="vatSwitch" className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-colors rounded-[20px] peer-checked:bg-[#28a745] before:absolute before:content-[''] before:h-[16px] before:w-[16px] before:left-[2px] before:bottom-[2px] before:bg-white before:transition-transform before:rounded-full peer-checked:before:translate-x-[20px]"></label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-4">
                <h5 className="font-bold text-[20px] mb-3">Phương thức thanh toán</h5>
                
                <div className="bg-white border border-[#eaeaea] rounded-tl-[30px] rounded-br-[30px] p-[30px]">
                  <p className="text-[#888] text-[14px] mb-[30px]">
                    Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không bao giờ được lưu lại.
                  </p>

                  <div className="mb-[25px] flex items-center">
                    <div className="relative w-[18px] h-[18px] mr-[12px] flex-shrink-0 mt-[2px]">
                      <input type="radio" id="pay-visa" name="paymentMethod" value="VISA" className="peer appearance-none w-full h-full border border-[#ccc] rounded-full checked:bg-[#222] checked:border-[#222] cursor-pointer transition-colors m-0" />
                      <svg className="absolute top-[4px] left-[4px] w-[10px] h-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <label htmlFor="pay-visa" className="cursor-pointer text-[#333] text-[15px] flex items-center">
                      Thanh toán bằng thẻ tín dụng 
                      <span className="ml-[12px] flex items-center gap-[8px]">
                        <span className="border border-[#eee] px-[8px] py-[2px] bg-white rounded-[4px] flex items-center justify-center shadow-sm">
                          <i className="fab fa-cc-visa text-blue-700 text-[32px] leading-none"></i>
                        </span>
                        <span className="border border-[#eee] px-[8px] py-[2px] bg-white rounded-[4px] flex items-center justify-center shadow-sm">
                          <i className="fab fa-cc-mastercard text-red-600 text-[32px] leading-none"></i>
                        </span>
                      </span>
                    </label>
                  </div>

                  <div className="mb-[25px] flex items-start">
                    <div className="relative w-[18px] h-[18px] mr-[12px] flex-shrink-0 mt-[3px]">
                      <input type="radio" id="pay-atm" name="paymentMethod" value="ATM" className="peer appearance-none w-full h-full border border-[#ccc] rounded-full checked:bg-[#222] checked:border-[#222] cursor-pointer transition-colors m-0" />
                      <svg className="absolute top-[4px] left-[4px] w-[10px] h-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <label htmlFor="pay-atm" className="cursor-pointer text-[#333] text-[15px]">
                      Thanh toán bằng thẻ ATM
                      <div className="text-[13.5px] text-[#999] mt-[8px]">Hỗ trợ thanh toán online hơn 38 ngân hàng phổ biến Việt Nam.</div>
                    </label>
                  </div>

                  <div className="mb-[25px] flex items-center">
                    <div className="relative w-[18px] h-[18px] mr-[12px] flex-shrink-0 mt-[2px]">
                      <input type="radio" id="pay-momo" name="paymentMethod" value="MOMO" className="peer appearance-none w-full h-full border border-[#ccc] rounded-full checked:bg-[#222] checked:border-[#222] cursor-pointer transition-colors m-0" />
                      <svg className="absolute top-[4px] left-[4px] w-[10px] h-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <label htmlFor="pay-momo" className="cursor-pointer text-[#333] text-[15px]">
                      Thanh toán bằng Momo
                    </label>
                  </div>

                  <div className="flex items-center">
                    <div className="relative w-[18px] h-[18px] mr-[12px] flex-shrink-0 mt-[2px]">
                      <input type="radio" id="pay-cod" name="paymentMethod" value="COD" className="peer appearance-none w-full h-full border border-[#ccc] rounded-full checked:bg-[#222] checked:border-[#222] cursor-pointer transition-colors m-0" defaultChecked />
                      <svg className="absolute top-[4px] left-[4px] w-[10px] h-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <label htmlFor="pay-cod" className="cursor-pointer text-[#333] text-[15px]">
                      Thanh toán khi giao hàng
                    </label>
                  </div>
                </div>

              </div>

              {/* Show items in cart */}
              <div className="mt-[30px] mb-[20px]">
                <details className="group" open>
                  <summary className="inline-flex items-center justify-center cursor-pointer list-none font-semibold text-[14px] tracking-[1px] bg-[#222] text-white px-[30px] py-[15px] rounded-tl-[20px] rounded-br-[20px] hover:bg-black transition-colors uppercase">
                    HIỂN THỊ SẢN PHẨM
                  </summary>
                  
                  <div className="mt-[30px]">
                    <h4 className="font-bold text-[24px] mb-[20px]">Giỏ hàng của bạn</h4>
                    
                    <div className="hidden xl:flex items-center pb-[24px] mb-[20px] border-b border-[#eee] font-semibold text-[12px] text-[#6c6d70] uppercase">
                      <div className="flex-1">TÊN SẢN PHẨM</div>
                      <div className="w-[120px] text-center">CHIẾT KHẤU</div>
                      <div className="w-[150px] text-center">SỐ LƯỢNG</div>
                      <div className="w-[120px] text-left pl-[20px]">TỔNG TIỀN</div>
                    </div>

                    <div className="pt-[20px]">
                      {items.map((item, index) => {
                        const hasDiscount = item.product.discountPercent && item.product.discountPercent > 0;
                        const discountAmount = hasDiscount ? (item.product.basePrice * (item.product.discountPercent || 0)) / 100 : 0;
                        const finalPrice = item.product.basePrice - discountAmount;
                        const lineTotal = finalPrice * item.quantity;
                        
                        return (
                          <div key={index} className="flex relative items-stretch border-b border-[#eee] py-[20px] last:border-b-0">
                            
                            {/* Image */}
                            <div className="w-[90px] h-[129px] xl:w-[150px] xl:h-[215px] mr-[15px] xl:mr-[30px] flex-shrink-0 bg-[#f8f9fa]">
                              {item.color.images && item.color.images.length > 0 ? (
                                <img 
                                  src={item.color.images[0].imageUrl.startsWith('http') ? item.color.images[0].imageUrl : `/uploads/${item.color.images[0].imageUrl}`} 
                                  alt={item.product.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : null}
                            </div>
                            
                            {/* Info Container */}
                            <div className="flex-1 flex flex-col justify-between min-w-[150px] xl:min-w-[200px] pt-[5px] xl:pt-[10px] pr-[10px] xl:pr-0">
                                <div>
                                    <h6 className="font-normal text-[#373737] text-[14px] xl:text-[16px] leading-[22px] xl:leading-[24px] mb-[5px]">{item.product.name}</h6>
                                    <div className="text-[13px] xl:text-[14px] text-[#6c6d70] mb-[10px]">
                                      Màu sắc: <span>{item.color.color.name}</span> &nbsp;&nbsp; Size: <span>{item.variant.size.name}</span>
                                    </div>
                                </div>
                                
                                {/* Mobile-only Discount & Quantity */}
                                <div className="xl:hidden mt-[15px] flex justify-between items-end">
                                  <div>
                                    {hasDiscount && (
                                      <div className="flex flex-col">
                                        <span className="text-[14px] text-[#666]">-{formatPrice(discountAmount)}</span>
                                        <span className="text-[13px] font-bold text-[#dc3545] mt-[2px]">( -{item.product.discountPercent || 0}% )</span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex items-center justify-center w-[80px] h-[36px] border border-[#e5e5e5] rounded-tl-[15px] rounded-br-[15px] bg-white">
                                    <span className="text-[14px] text-[#333] font-normal">{item.quantity}</span>
                                  </div>
                                </div>
                            </div>
                            
                            {/* Desktop-only Columns */}
                            <div className="w-[120px] text-center hidden xl:block pt-[10px]">
                              {hasDiscount ? (
                                <div className="flex flex-col items-center">
                                  <span className="text-[14px] text-[#666]">-{formatPrice(discountAmount)}</span>
                                  <span className="text-[13px] font-bold text-[#dc3545] mt-[2px]">( -{item.product.discountPercent || 0}% )</span>
                                </div>
                              ) : (
                                <span className="text-[#999]">-</span>
                              )}
                            </div>

                            {/* Quantity */}
                            <div className="hidden xl:flex w-[150px] justify-center pt-[10px]">
                              <div className="flex items-center justify-center w-[120px] h-[40px] border border-[#e5e5e5] rounded-tl-[15px] rounded-br-[15px] bg-white">
                                <span className="text-[15px] text-[#222] font-normal">{item.quantity}</span>
                              </div>
                            </div>

                            {/* Total Price */}
                            <div className="hidden xl:block w-[120px] text-left pl-[20px] pt-[10px]">
                              <span className="font-bold text-[#222] text-[16px]">{formatPrice(lineTotal)}</span>
                            </div>
                            
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </details>
              </div>

            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-[420px] lg:min-w-[420px] px-[15px] lg:px-0 lg:ml-[3rem] mt-[40px] lg:mt-0 flex-shrink-0">
              <div className="bg-[#f7f8f9] p-[22px] rounded-[4px] lg:sticky lg:top-[100px] w-full">
                <div className="text-[20px] md:text-[22px] font-normal text-[#222] mb-[20px]">
                  Tóm tắt đơn hàng
                </div>

                <div className="flex justify-between items-center mb-[15px] text-[15px] text-[#6c6d70] leading-[24px]">
                  <span>Tổng tiền hàng</span> 
                  <span>{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between items-center mb-[15px] text-[15px] text-[#6c6d70] leading-[24px]">
                  <span>Tạm tính</span> 
                  <span>{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between items-center mb-[15px] text-[15px] text-[#6c6d70] leading-[24px]">
                  <span>Phí vận chuyển</span> 
                  <span>{formatPrice(shippingFee)}</span>
                </div>

                <div className="flex justify-between items-center py-[15px] border-t border-[#e1e1e1] text-[16px] text-[#6c6d70] leading-[24px]">
                  <span>Tiền thanh toán</span> 
                  <span className="font-bold text-[#000]">{formatPrice(finalTotal)}</span>
                </div>

                <hr className="my-[10px] border-transparent" />

                <div className="flex justify-between items-center mb-[15px]">
                  <div className="font-semibold text-[16px] text-[#222]">Mã phiếu giảm giá</div>
                  <div className="flex items-center">
                    <div className="w-[1px] h-[16px] bg-[#e1e1e1] mx-[15px]"></div>
                    <button type="button" onClick={() => setShowVoucherModal(true)} className="text-[#6c6d70] text-[15px] hover:text-[#222] transition-colors bg-transparent border-none cursor-pointer p-0 font-normal">Mã của tôi</button>
                  </div>
                </div>
                
                <div className="flex mb-4 gap-[10px]">
                  <input type="text" className="flex-1 border border-[#e1e1e1] rounded-[4px] px-[15px] h-[45px] text-[14px] outline-none focus:border-[#222]" placeholder="Mã giảm giá" />
                  <button type="button" className="bg-white text-[#222] border border-[#222] px-[20px] font-bold text-[14px] rounded-tl-[20px] rounded-br-[20px] hover:bg-[#f9f9f9] transition-colors whitespace-nowrap">ÁP DỤNG</button>
                </div>
                
                <div className="mb-[25px]">
                  <select className="w-full border border-[#e1e1e1] rounded-[4px] px-[15px] h-[45px] text-[14px] outline-none focus:border-[#222] bg-white text-[#6c6d70]">
                    <option>Mã nhân viên hỗ trợ</option>
                  </select>
                </div>

                <button type="submit" className="block w-full bg-[#222] text-white text-center py-[15px] font-bold text-[16px] uppercase tracking-[1px] rounded-tl-[20px] rounded-br-[20px] hover:bg-black transition-colors">
                  HOÀN THÀNH
                </button>
              </div>
            </div>

          </div>
        </form>

      </div>

      {/* Voucher Modal */}
      {showVoucherModal && (
        <div className="fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-[15px]" onClick={() => setShowVoucherModal(false)}>
          <div className="bg-white w-full max-w-[600px] rounded-[4px] overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-[20px] border-b border-[#e1e1e1]">
              <h3 className="font-bold text-[16px] text-[#222] m-0">Danh sách mã Voucher</h3>
              <button type="button" onClick={() => setShowVoucherModal(false)} className="text-[#666] hover:text-[#222] bg-transparent border-none cursor-pointer text-[20px]">
                <i className="fa-regular fa-xmark"></i>
              </button>
            </div>
            <div className="p-[30px] text-[#6c6d70] text-[14px]">
              Rất tiếc, bạn không còn mã giảm giá nào !
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
