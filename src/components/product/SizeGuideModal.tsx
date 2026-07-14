"use client";

import React, { useState } from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'nam' | 'nu' | 'tre-em' | 'giay-kids';

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('nam');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 md:p-6 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex-1"></div>
          <h3 className="text-[20px] md:text-[24px] font-bold uppercase text-gray-900 tracking-wide text-center flex-1 whitespace-nowrap">
            BẢNG TƯ VẤN SIZE
          </h3>
          <div className="flex-1 flex justify-end">
            <button 
              onClick={onClose}
              className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
            >
              <span className="text-[28px] leading-none">&times;</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 pt-0">
          
          {/* Nav Tabs */}
          <div className="flex flex-wrap justify-center mb-6">
            <button 
              className={`px-4 py-2 font-bold text-[14px] lg:text-[15px] border-b-2 transition-colors ${activeTab === 'nam' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('nam')}
            >
              Nam
            </button>
            <button 
              className={`px-4 py-2 font-bold text-[14px] lg:text-[15px] border-b-2 transition-colors ${activeTab === 'nu' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('nu')}
            >
              Nữ
            </button>
            <button 
              className={`px-4 py-2 font-bold text-[14px] lg:text-[15px] border-b-2 transition-colors ${activeTab === 'tre-em' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('tre-em')}
            >
              Trẻ em
            </button>
            <button 
              className={`px-4 py-2 font-bold text-[14px] lg:text-[15px] border-b-2 transition-colors ${activeTab === 'giay-kids' ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
              onClick={() => setActiveTab('giay-kids')}
            >
              Giày Kids
            </button>
          </div>

          {/* Tab Content */}
          <div className="w-full">
            {activeTab === 'nam' && (
              <div className="animate-fadeIn">
                <h6 className="font-bold mb-3 text-[15px]">1. Size Áo Nam (Sơ mi, Áo phông, Áo len, Áo khoác...)</h6>
                <div className="overflow-x-auto mb-6 border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6]">SIZE</th>
                        <th className="p-2 border border-[#dee2e6]">S</th>
                        <th className="p-2 border border-[#dee2e6]">M</th>
                        <th className="p-2 border border-[#dee2e6]">L</th>
                        <th className="p-2 border border-[#dee2e6]">XL</th>
                        <th className="p-2 border border-[#dee2e6]">XXL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] font-bold">Vòng cổ</td>
                        <td className="p-2 border border-[#dee2e6]">37-38</td>
                        <td className="p-2 border border-[#dee2e6]">39-40</td>
                        <td className="p-2 border border-[#dee2e6]">41-42</td>
                        <td className="p-2 border border-[#dee2e6]">43-44</td>
                        <td className="p-2 border border-[#dee2e6]">45-46</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] font-bold">Vòng ngực</td>
                        <td className="p-2 border border-[#dee2e6]">86-90</td>
                        <td className="p-2 border border-[#dee2e6]">90-94</td>
                        <td className="p-2 border border-[#dee2e6]">94-98</td>
                        <td className="p-2 border border-[#dee2e6]">98-102</td>
                        <td className="p-2 border border-[#dee2e6]">102-106</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] font-bold">Vòng eo</td>
                        <td className="p-2 border border-[#dee2e6]">70-74</td>
                        <td className="p-2 border border-[#dee2e6]">74-78</td>
                        <td className="p-2 border border-[#dee2e6]">78-82</td>
                        <td className="p-2 border border-[#dee2e6]">82-86</td>
                        <td className="p-2 border border-[#dee2e6]">86-90</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6 className="font-bold mb-3 text-[15px] uppercase">Size Quần</h6>
                <div className="overflow-x-auto mb-6 border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6]">STT</th>
                        <th className="p-2 border border-[#dee2e6] text-left">TÊN GỌI/SIZE</th>
                        <th className="p-2 border border-[#dee2e6]">S(29)</th>
                        <th className="p-2 border border-[#dee2e6]">M(30)</th>
                        <th className="p-2 border border-[#dee2e6]">L(31)</th>
                        <th className="p-2 border border-[#dee2e6]">XL(32)</th>
                        <th className="p-2 border border-[#dee2e6]">XXL(33)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">1</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Vòng Eo</td>
                        <td className="p-2 border border-[#dee2e6]">76</td>
                        <td className="p-2 border border-[#dee2e6]">80</td>
                        <td className="p-2 border border-[#dee2e6]">84</td>
                        <td className="p-2 border border-[#dee2e6]">86</td>
                        <td className="p-2 border border-[#dee2e6]">90</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">2</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Vòng Mông</td>
                        <td className="p-2 border border-[#dee2e6]">91</td>
                        <td className="p-2 border border-[#dee2e6]">95</td>
                        <td className="p-2 border border-[#dee2e6]">99</td>
                        <td className="p-2 border border-[#dee2e6]">104</td>
                        <td className="p-2 border border-[#dee2e6]">109</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">3</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Cân nặng (kg)</td>
                        <td className="p-2 border border-[#dee2e6]">62 - 68</td>
                        <td className="p-2 border border-[#dee2e6]">68 - 70</td>
                        <td className="p-2 border border-[#dee2e6]">70 - 74</td>
                        <td className="p-2 border border-[#dee2e6]">74 - 78</td>
                        <td className="p-2 border border-[#dee2e6]">78 - 82</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">4</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Chiều Cao (cm)</td>
                        <td className="p-2 border border-[#dee2e6]">162 - 168</td>
                        <td className="p-2 border border-[#dee2e6]">168 - 172</td>
                        <td className="p-2 border border-[#dee2e6]">172 - 176</td>
                        <td className="p-2 border border-[#dee2e6]">176 - 180</td>
                        <td className="p-2 border border-[#dee2e6]">180 - 184</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6 className="font-bold mb-3 text-[15px] uppercase">Size Giày Dép</h6>
                <div className="overflow-x-auto border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6] text-left">TÊN GỌI/SIZE</th>
                        <th className="p-2 border border-[#dee2e6]">39</th>
                        <th className="p-2 border border-[#dee2e6]">40</th>
                        <th className="p-2 border border-[#dee2e6]">41</th>
                        <th className="p-2 border border-[#dee2e6]">42</th>
                        <th className="p-2 border border-[#dee2e6]">43</th>
                        <th className="p-2 border border-[#dee2e6]">44</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Chiều dài bàn chân</td>
                        <td className="p-2 border border-[#dee2e6]">20,5</td>
                        <td className="p-2 border border-[#dee2e6]">26</td>
                        <td className="p-2 border border-[#dee2e6]">26,9</td>
                        <td className="p-2 border border-[#dee2e6]">27,7</td>
                        <td className="p-2 border border-[#dee2e6]">28,5</td>
                        <td className="p-2 border border-[#dee2e6]">29,4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'nu' && (
              <div className="animate-fadeIn">
                <h6 className="font-bold mb-3 text-[15px] uppercase">Size Váy Áo Nữ</h6>
                <div className="overflow-x-auto mb-6 border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6]">STT</th>
                        <th className="p-2 border border-[#dee2e6] text-left">TÊN GỌI/SIZE</th>
                        <th className="p-2 border border-[#dee2e6]">S</th>
                        <th className="p-2 border border-[#dee2e6]">M</th>
                        <th className="p-2 border border-[#dee2e6]">L</th>
                        <th className="p-2 border border-[#dee2e6]">XL</th>
                        <th className="p-2 border border-[#dee2e6]">XXL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">1</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Vai</td>
                        <td className="p-2 border border-[#dee2e6]">36</td>
                        <td className="p-2 border border-[#dee2e6]">37</td>
                        <td className="p-2 border border-[#dee2e6]">38</td>
                        <td className="p-2 border border-[#dee2e6]">39</td>
                        <td className="p-2 border border-[#dee2e6]">40</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">2</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Ngực</td>
                        <td className="p-2 border border-[#dee2e6]">82</td>
                        <td className="p-2 border border-[#dee2e6]">86</td>
                        <td className="p-2 border border-[#dee2e6]">90</td>
                        <td className="p-2 border border-[#dee2e6]">94</td>
                        <td className="p-2 border border-[#dee2e6]">98</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">3</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Eo</td>
                        <td className="p-2 border border-[#dee2e6]">66</td>
                        <td className="p-2 border border-[#dee2e6]">70</td>
                        <td className="p-2 border border-[#dee2e6]">74</td>
                        <td className="p-2 border border-[#dee2e6]">78</td>
                        <td className="p-2 border border-[#dee2e6]">82</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">4</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Hông</td>
                        <td className="p-2 border border-[#dee2e6]">90</td>
                        <td className="p-2 border border-[#dee2e6]">94</td>
                        <td className="p-2 border border-[#dee2e6]">98</td>
                        <td className="p-2 border border-[#dee2e6]">102</td>
                        <td className="p-2 border border-[#dee2e6]">106</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6 className="font-bold mb-3 text-[15px] uppercase">Size Quần</h6>
                <div className="overflow-x-auto mb-6 border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6]">STT</th>
                        <th className="p-2 border border-[#dee2e6] text-left">TÊN GỌI/SIZE</th>
                        <th className="p-2 border border-[#dee2e6]">S(26)</th>
                        <th className="p-2 border border-[#dee2e6]">M(27)</th>
                        <th className="p-2 border border-[#dee2e6]">L(28)</th>
                        <th className="p-2 border border-[#dee2e6]">XL(29)</th>
                        <th className="p-2 border border-[#dee2e6]">XXL(30)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">1</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Vòng Eo</td>
                        <td className="p-2 border border-[#dee2e6]">66</td>
                        <td className="p-2 border border-[#dee2e6]">70</td>
                        <td className="p-2 border border-[#dee2e6]">74</td>
                        <td className="p-2 border border-[#dee2e6]">78</td>
                        <td className="p-2 border border-[#dee2e6]">82</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">2</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Vòng Mông</td>
                        <td className="p-2 border border-[#dee2e6]">90</td>
                        <td className="p-2 border border-[#dee2e6]">94</td>
                        <td className="p-2 border border-[#dee2e6]">98</td>
                        <td className="p-2 border border-[#dee2e6]">102</td>
                        <td className="p-2 border border-[#dee2e6]">106</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">3</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Vòng Bụng</td>
                        <td className="p-2 border border-[#dee2e6]">68</td>
                        <td className="p-2 border border-[#dee2e6]">72</td>
                        <td className="p-2 border border-[#dee2e6]">76</td>
                        <td className="p-2 border border-[#dee2e6]">80</td>
                        <td className="p-2 border border-[#dee2e6]">84</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">4</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Dài Quần</td>
                        <td className="p-2 border border-[#dee2e6]">96</td>
                        <td className="p-2 border border-[#dee2e6]">97</td>
                        <td className="p-2 border border-[#dee2e6]">99</td>
                        <td className="p-2 border border-[#dee2e6]">100</td>
                        <td className="p-2 border border-[#dee2e6]">101</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6 className="font-bold mb-3 text-[15px] uppercase">Size Giày Dép</h6>
                <div className="overflow-x-auto border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6] text-left">TÊN GỌI/SIZE</th>
                        <th className="p-2 border border-[#dee2e6]">34</th>
                        <th className="p-2 border border-[#dee2e6]">35</th>
                        <th className="p-2 border border-[#dee2e6]">36</th>
                        <th className="p-2 border border-[#dee2e6]">37</th>
                        <th className="p-2 border border-[#dee2e6]">38</th>
                        <th className="p-2 border border-[#dee2e6]">39</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left">Chiều dài bàn chân</td>
                        <td className="p-2 border border-[#dee2e6]">20,5</td>
                        <td className="p-2 border border-[#dee2e6]">21,5</td>
                        <td className="p-2 border border-[#dee2e6]">22 - 22,5</td>
                        <td className="p-2 border border-[#dee2e6]">23</td>
                        <td className="p-2 border border-[#dee2e6]">23,8 - 24,1</td>
                        <td className="p-2 border border-[#dee2e6]">24,5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'tre-em' && (
              <div className="animate-fadeIn">
                <h6 className="font-bold mb-3 text-[15px] uppercase">Size Váy Áo Trẻ Em</h6>
                <div className="overflow-x-auto mb-4 border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[500px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6]">STT</th>
                        <th className="p-2 border border-[#dee2e6]">CỠ / TUỔI</th>
                        <th className="p-2 border border-[#dee2e6]">4-5</th>
                        <th className="p-2 border border-[#dee2e6]">6-7</th>
                        <th className="p-2 border border-[#dee2e6]">8-9</th>
                        <th className="p-2 border border-[#dee2e6]">10-11</th>
                        <th className="p-2 border border-[#dee2e6]">12-13</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">1</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left uppercase">Chiều Cao (cm)</td>
                        <td className="p-2 border border-[#dee2e6]">110</td>
                        <td className="p-2 border border-[#dee2e6]">122</td>
                        <td className="p-2 border border-[#dee2e6]">133</td>
                        <td className="p-2 border border-[#dee2e6]">150</td>
                        <td className="p-2 border border-[#dee2e6]">155</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">2</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left uppercase">Cân Nặng (kg)</td>
                        <td className="p-2 border border-[#dee2e6]">15-20</td>
                        <td className="p-2 border border-[#dee2e6]">20-25</td>
                        <td className="p-2 border border-[#dee2e6]">23-29</td>
                        <td className="p-2 border border-[#dee2e6]">28-35</td>
                        <td className="p-2 border border-[#dee2e6]">34-43</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">3</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left uppercase">Rộng Vai</td>
                        <td className="p-2 border border-[#dee2e6]">29</td>
                        <td className="p-2 border border-[#dee2e6]">30</td>
                        <td className="p-2 border border-[#dee2e6]">31</td>
                        <td className="p-2 border border-[#dee2e6]">32</td>
                        <td className="p-2 border border-[#dee2e6]">33</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">4</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left uppercase">Vòng Ngực</td>
                        <td className="p-2 border border-[#dee2e6]">59</td>
                        <td className="p-2 border border-[#dee2e6]">65</td>
                        <td className="p-2 border border-[#dee2e6]">68</td>
                        <td className="p-2 border border-[#dee2e6]">74</td>
                        <td className="p-2 border border-[#dee2e6]">79</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">5</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left uppercase">Vòng Bụng</td>
                        <td className="p-2 border border-[#dee2e6]">54</td>
                        <td className="p-2 border border-[#dee2e6]">59</td>
                        <td className="p-2 border border-[#dee2e6]">62</td>
                        <td className="p-2 border border-[#dee2e6]">65</td>
                        <td className="p-2 border border-[#dee2e6]">69</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6]">6</td>
                        <td className="p-2 border border-[#dee2e6] font-bold text-left uppercase">Vòng Mông</td>
                        <td className="p-2 border border-[#dee2e6]">61</td>
                        <td className="p-2 border border-[#dee2e6]">66</td>
                        <td className="p-2 border border-[#dee2e6]">70</td>
                        <td className="p-2 border border-[#dee2e6]">75</td>
                        <td className="p-2 border border-[#dee2e6]">80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-[13px] mb-4">* Số đo trong "BẢNG THÔNG SỐ" là số đo cơ thể không phải số đo quần áo</p>
              </div>
            )}

            {activeTab === 'giay-kids' && (
              <div className="animate-fadeIn">
                <h6 className="font-bold mb-3 text-[15px] uppercase">Bảng Thông Số Kích Thước Giày Trẻ Em</h6>
                <div className="overflow-x-auto border border-[#dee2e6]">
                  <table className="w-full text-[14px] text-center align-middle whitespace-nowrap min-w-[300px]">
                    <thead className="bg-[#f8f9fa]">
                      <tr>
                        <th className="p-2 border border-[#dee2e6] text-left">Size Theo web</th>
                        <th className="p-2 border border-[#dee2e6]">Chiều dài</th>
                        <th className="p-2 border border-[#dee2e6]">Size số</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 4-5</td>
                        <td className="p-2 border border-[#dee2e6]">18 cm</td>
                        <td className="p-2 border border-[#dee2e6]">29</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 5-6</td>
                        <td className="p-2 border border-[#dee2e6]">19 cm</td>
                        <td className="p-2 border border-[#dee2e6]">30</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 6-7</td>
                        <td className="p-2 border border-[#dee2e6]">20 cm</td>
                        <td className="p-2 border border-[#dee2e6]">31</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 7-8</td>
                        <td className="p-2 border border-[#dee2e6]">21 cm</td>
                        <td className="p-2 border border-[#dee2e6]">32</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 8-9</td>
                        <td className="p-2 border border-[#dee2e6]">22 cm</td>
                        <td className="p-2 border border-[#dee2e6]">33</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 9-10</td>
                        <td className="p-2 border border-[#dee2e6]">23 cm</td>
                        <td className="p-2 border border-[#dee2e6]">34</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dee2e6] text-left font-medium">Size 10-11</td>
                        <td className="p-2 border border-[#dee2e6]">24 cm</td>
                        <td className="p-2 border border-[#dee2e6]">35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
