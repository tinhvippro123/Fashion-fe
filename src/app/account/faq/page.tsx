'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQ {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "Câu hỏi đầu tiên của bạn ở đây nhé?",
      answer: (
        <>
          Hình thức thu tiền tận nơi (COD) : Khách hàng sẽ thanh toán tiền khi nhận hàng và thanh toán tiền hàng và cước phí vận chuyển cho nhân viên chuyển phát.<br/><br/>
          Thanh toán trực tuyến OnePay qua thẻ ATM nội địa hoặc thẻ quốc tế trực tiếp tại website.
        </>
      )
    },
    {
      id: 2,
      question: "Đây là câu hỏi yêu cầu hỗ trợ thứ 2 của bạn?",
      answer: "Nội dung hỗ trợ thứ 2."
    },
    {
      id: 3,
      question: "Tại sao thẻ tín dụng của tôi có thể bị từ chối?",
      answer: (
        <>
          Thẻ tín dụng của quý khách có thể bị từ chối vì bất kỳ lý do nào sau đây:<br/>
          - Thẻ có thể đã hết hạn. Kiểm tra xem thẻ của quý khách còn hiệu lực không.<br/>
          - Quý khách có thể đã đạt đến hạn mức tín dụng. Liên hệ với ngân hàng để kiểm tra xem quý khách có vượt quá giới hạn mua hàng được ủy quyền không.<br/>
          - Quý khách có thể đã nhập thông tin nào đó không chính xác. Kiểm tra xem quý khách đã điền đúng tất cả các trường bắt buộc chưa.
        </>
      )
    },
    {
      id: 4,
      question: "Tôi có thể đưa thông tin chi tiết của công ty mình vào hóa đơn không?",
      answer: "- Có. Chỉ cần nhấp vào tùy chọn doanh nghiệp trong thông tin chi tiết cá nhân rồi điền thông tin thuế mà chúng tôi yêu cầu."
    },
    {
      id: 5,
      question: "Có an toàn khi sử dụng thẻ tín dụng của tôi trên trang web không?",
      answer: "- Đúng, các dữ liệu được truyền đi bằng cách mã hóa theo giao thức SSL. Đối với việc thanh toán bằng thẻ tín dụng và thẻ ghi nợ, yêu cầu phải nhập số CVV (Card Verification Value, Mã Xác thực Thẻ), là mã số in trên thẻ được sử dụng như một biện pháp bảo mật trong các giao dịch thương mại điện tử."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex justify-between items-center border-b border-[#e1e1e1] pb-[16px] mb-[24px]">
        <h5 className="font-bold mb-0 uppercase text-[20px] text-[#222]">
          Q&A
        </h5>
        <Link 
          href="/account/support" 
          className="bg-[#222] text-white px-[24px] py-[8px] flex items-center text-[14px] font-medium transition-colors hover:bg-white hover:text-[#222] border border-[#222]"
          style={{ borderRadius: '20px 0 20px 0', letterSpacing: '0.5px' }}
        >
          <span className="border-[1.5px] border-current rounded-full w-[16px] h-[16px] inline-flex justify-center items-center mr-[8px]">
            <i className="fas fa-plus text-[9px]"></i>
          </span>
          GỬI <span className="hidden md:inline ml-1">CÂU HỎI</span>
        </Link>
      </div>

      <div className="mt-[24px]">
        {faqs.length === 0 ? (
          <div className="text-center py-[48px] text-[#6c6d70]">
            Hiện tại chưa có câu hỏi thường gặp nào.
          </div>
        ) : (
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id} className="border-b border-[#e1e1e1] last:border-b-0">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left bg-transparent border-none py-[20px] text-[15px] font-semibold text-[#111] flex justify-between items-center cursor-pointer outline-none transition-colors hover:text-[#000]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[16px] font-light transition-transform duration-300 w-[15px] text-center shrink-0">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out text-[#666] text-[14px] leading-[1.6] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pb-[20px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
