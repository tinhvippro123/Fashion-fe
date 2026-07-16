'use client';

import React, { use } from 'react';
import Link from 'next/link';

export default function AccountOrderTrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);

  return (
    <>
           {/* Header */}
           <div className="flex justify-between items-center mb-[20px] gap-[10px]">
             <h3 className="flex items-center text-[15px] md:text-[20px] font-semibold text-[#222] uppercase mb-0 whitespace-nowrap">
               <Link href="/account/orders" className="text-[#222] mr-[8px] md:mr-[12px] hover:text-[#555] text-[14px] md:text-[18px]">
                 <i className="fas fa-chevron-left"></i>
               </Link>
               Theo dõi đơn hàng
             </h3>
             <span className="text-[#6c6d70] text-[12px] md:text-[14px] flex items-center whitespace-nowrap">
                <i className="fas fa-sync-alt mr-[4px] md:mr-[8px]"></i> Đã hủy đơn hàng
             </span>
           </div>

           <div className="flex flex-col lg:flex-row gap-[30px] xl:gap-[60px]">
             {/* Left Column */}
             <div className="w-full lg:w-7/12 xl:w-8/12 overflow-hidden">

               {/* Horizontal Progress Bar */}
               <div className="mb-[50px] border border-[#e1e1e1] px-[15px] lg:px-[40px] py-[30px]" style={{ borderRadius: '20px 0 20px 0' }}>
                 <div className="w-full relative">
                    {/* Background Line */}
                    <div className="absolute top-[6px] left-[7px] right-[7px] h-[2px] bg-[#222] z-[1]"></div>
                    
                    <div className="flex justify-between relative z-[2] h-[50px]">
                      {/* Step 1 */}
                      <div className="relative w-[14px]">
                        <div className="w-[14px] h-[14px] rounded-full bg-[#222] mx-auto"></div>
                        <div className="text-[12px] text-[#6c6d70] text-left leading-tight absolute top-[25px] left-[-5px] w-max">Đơn hàng đã đặt</div>
                      </div>
                      {/* Step 2 */}
                      <div className="relative w-[14px]">
                        <div className="w-[14px] h-[14px] rounded-full bg-white border-[2px] border-[#e1e1e1] mx-auto"></div>
                      </div>
                      {/* Step 3 */}
                      <div className="relative w-[14px]">
                        <div className="w-[14px] h-[14px] rounded-full bg-white border-[2px] border-[#e1e1e1] mx-auto"></div>
                      </div>
                      {/* Step 4 */}
                      <div className="relative w-[14px]">
                        <div className="w-[14px] h-[14px] rounded-full bg-white border-[2px] border-[#e1e1e1] mx-auto"></div>
                      </div>
                      {/* Step 5 */}
                      <div className="relative w-[14px]">
                        <div className="w-[14px] h-[14px] rounded-full bg-[#222] mx-auto"></div>
                        <div className="text-[12px] text-[#6c6d70] text-right leading-tight absolute top-[25px] right-[-5px] w-max">Đã hủy</div>
                      </div>
                    </div>
                 </div>
               </div>
               
               {/* Vertical Timeline */}
               <h4 className="font-semibold text-[18px] text-[#222] mb-[30px]">Chi tiết trạng thái đơn hàng</h4>
               
               <div className="pl-[8px] mb-[50px]">
                 <div className="border-l-[2px] border-[#222] relative h-[120px]">
                   
                   {/* Timeline Item 1 */}
                   <div className="absolute top-0 left-[-8px] w-[14px] h-[14px] rounded-full bg-[#222]"></div>
                   <div className="pl-[30px] flex items-start top-[-2px] relative gap-[50px]">
                      <span className="text-[14px] text-[#222] w-[140px]">Đơn hàng đã đặt</span>
                      <span className="text-[14px] text-[#6c6d70]">08-12-2025 23:37:27</span>
                   </div>

                   {/* Intermediate dots */}
                   <div className="absolute top-[30px] left-[-6px] w-[10px] h-[10px] rounded-full bg-[#e1e1e1]"></div>
                   <div className="absolute top-[60px] left-[-6px] w-[10px] h-[10px] rounded-full bg-[#e1e1e1]"></div>
                   <div className="absolute top-[90px] left-[-6px] w-[10px] h-[10px] rounded-full bg-[#e1e1e1]"></div>
                 </div>

                 <div className="relative">
                   {/* Timeline Item 2 */}
                   <div className="absolute top-0 left-[-8px] w-[14px] h-[14px] rounded-full bg-[#222]"></div>
                   <div className="pl-[30px] flex items-start top-[-2px] relative gap-[50px]">
                      <span className="text-[14px] text-[#222] w-[140px]">Đã hủy</span>
                      <span className="text-[14px] text-[#6c6d70]">08-12-2025 23:37:46</span>
                   </div>
                 </div>
               </div>

               {/* Product Item */}
               <div className="border-t border-[#e1e1e1] pt-[30px]">
                 <div className="flex gap-[16px]">
                   <img 
                      src="/uploads/0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp" 
                      alt="Đầm Tweed kem tay dài" 
                      className="w-[160px] h-[213px] object-cover shrink-0"
                   />
                   <div className="flex-1 min-w-0 flex flex-col justify-between">
                     <div>
                       <h5 className="text-[18px] text-[#222] mb-[15px]">Đầm Tweed kem tay dài</h5>
                       <div className="text-[15px] text-[#6c6d70] space-y-[10px]">
                         <p>Màu sắc: Trắng ngà</p>
                         <p>Size: S</p>
                         <p>Số lượng: 1</p>
                         <p>SKU: (#4810B03780020023)</p>
                       </div>
                     </div>
                     <button 
                       className="border border-[#222] text-[#222] bg-white px-[30px] py-[10px] text-[14px] uppercase hover:bg-[#222] hover:text-white transition-colors w-fit"
                       style={{ borderRadius: '20px 0 20px 0' }}
                     >
                       MUA LẠI
                     </button>
                   </div>
                 </div>
               </div>

             </div>
             
             {/* Right Column (Sidebar Summary) */}
             <div className="w-full lg:w-5/12 xl:w-4/12 shrink-0">

               <div className="bg-[#f8f9fa] p-[30px] rounded-[4px]">
                 {/* Section 1 */}
                 <div className="border-b border-[#e1e1e1] pb-[20px] mb-[20px]">
                   <h4 className="text-[18px] text-[#222] mb-[20px]">Tóm tắt đơn hàng</h4>
                   <div className="space-y-[12px] text-[14px]">
                     <div className="flex justify-between">
                       <span className="text-[#6c6d70]">Ngày tạo đơn</span>
                       <span className="text-[#222]">08/12/2025</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-[#6c6d70]">Tạm tính</span>
                       <span className="text-[#222]">2.090.000 ₫</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-[#6c6d70]">Phí vận chuyển</span>
                       <span className="text-[#222]">0 ₫</span>
                     </div>
                     <div className="flex justify-between pt-[8px]">
                       <span className="text-[#6c6d70]">Tổng tiền</span>
                       <span className="text-[16px] font-bold text-[#222]">2.090.000 ₫</span>
                     </div>
                   </div>
                 </div>

                 {/* Section 2 */}
                 <div className="border-b border-[#e1e1e1] pb-[20px] mb-[20px]">
                   <h5 className="font-semibold text-[15px] text-[#222] mb-[10px]">Hình thức thanh toán</h5>
                   <p className="text-[14px] text-[#6c6d70]">Thanh toán bằng thẻ tín dụng</p>
                 </div>

                 {/* Section 3 */}
                 <div className="border-b border-[#e1e1e1] pb-[20px] mb-[20px]">
                   <h5 className="font-semibold text-[15px] text-[#222] mb-[10px]">Đơn vị vận chuyển</h5>
                   <p className="text-[14px] text-[#6c6d70]">Chuyển phát nhanh</p>
                 </div>

                 {/* Section 4 */}
                 <div>
                   <h5 className="font-semibold text-[15px] text-[#222] mb-[10px]">Địa chỉ</h5>
                   <div className="text-[14px] text-[#6c6d70] space-y-[8px]">
                     <p className="text-[#222]">Lê Tính</p>
                     <p>369/27 Nguyễn Thị Đặng, Tân Thới Hiệp, 12, Hồ Chí Minh</p>
                     <p>Điện thoại: 0348336882</p>
                   </div>
                 </div>

               </div>
             </div>
           </div>
    </>
  );
}
