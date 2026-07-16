'use client';

import React, { useState, useEffect } from 'react';

type AddressType = 'HOME' | 'OFFICE';

interface Address {
  id: string;
  receiverName: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  street: string;
  addressType: AddressType;
  isDefault: boolean;
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      receiverName: "Lê Tính",
      phone: "0905898683",
      province: "Thành phố Đà Nẵng",
      district: "Quận Hải Châu",
      ward: "Phường Nam Dương",
      street: "123 Đường Nguyễn Văn Linh",
      addressType: "HOME",
      isDefault: true
    },
    {
      id: "2",
      receiverName: "Nguyễn Văn A",
      phone: "0912345678",
      province: "Thành phố Hà Nội",
      district: "Quận Hoàn Kiếm",
      ward: "Phường Tràng Tiền",
      street: "45 Phố Tràng Tiền",
      addressType: "OFFICE",
      isDefault: false
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc muốn xóa địa chỉ này?')) {
      setAddresses(addresses.filter(a => a.id !== id));
    }
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(a => ({
      ...a,
      isDefault: a.id === id
    })));
  };

  const openEditModal = (id: string) => {
    setEditingId(id);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[24px] pb-[4px]">
        <h5 className="font-bold uppercase mb-0 text-[18px] text-[#222]">SỔ ĐỊA CHỈ</h5>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#222] text-white font-medium py-[8px] px-[16px] flex items-center hover:bg-[#333] transition-colors"
          style={{ borderRadius: '15px 0 15px 0' }}
        >
          <i className="fas fa-plus-circle mr-[8px]"></i> THÊM ĐỊA CHỈ
        </button>
      </div>

      <div className="flex flex-wrap mx-[-15px]">
        {addresses.map(addr => (
          <div key={addr.id} className="w-full lg:w-1/2 px-[15px] mb-[24px]">
            <div 
              className="border border-[#e1e1e1] p-[24px] h-full relative bg-white flex flex-col"
              style={{ borderRadius: '40px 0 40px 0' }}
            >
              <div className="mb-[24px]">
                <div className="flex justify-between items-center">
                  <h6 className="mb-0 text-[16px] font-medium text-[#111]">
                    {addr.receiverName}
                  </h6>

                  <div className="flex items-center shrink-0">
                    {addresses.length > 1 && (
                      <button 
                        onClick={() => handleDelete(addr.id)}
                        className="text-[#6c6d70] mr-[16px] text-[15px] hover:text-[#222]"
                      >
                        Xóa
                      </button>
                    )}
                    
                    <button 
                      onClick={() => openEditModal(addr.id)}
                      className="text-[#222] mr-[16px] text-[15px] hover:underline"
                    >
                      Sửa
                    </button>
                       
                    {addr.isDefault ? (
                      <span 
                        className="bg-[#222] text-white text-[14px] px-[16px] py-[8px] cursor-default pointer-events-none"
                        style={{ borderRadius: '20px 0 20px 0' }}
                      >
                        Mặc định
                      </span>
                    ) : (
                      <button 
                        onClick={() => handleSetDefault(addr.id)}
                        className="border border-[#222] text-[#222] text-[14px] px-[16px] py-[8px] hover:bg-[#f8f9fa]"
                        style={{ borderRadius: '20px 0 20px 0' }}
                      >
                        Đặt mặc định
                      </button>
                    )}
                  </div>
                </div>
                <div className="font-normal text-[#6c6d70] text-[14px] mt-[4px]">
                  ({addr.addressType === 'HOME' ? 'Nhà/chung cư' : 'Cơ quan/công ty'})
                </div>
              </div>
              
              <div className="text-[#555]">
                <p className="mb-[8px] text-[15px]">Điện thoại: &nbsp;<span>{addr.phone}</span></p>
                <p className="mb-0 text-[15px]">Địa chỉ: &nbsp;<span>{`${addr.street}, ${addr.ward}, ${addr.district}, ${addr.province}`}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAddModalOpen && (
        <AddressModal 
          isOpen={isAddModalOpen} 
          onClose={() => setIsAddModalOpen(false)} 
          title="Thêm địa chỉ" 
          onSubmit={(data) => {
            const newId = Math.random().toString(36).substr(2, 9);
            const isFirst = addresses.length === 0;
            setAddresses([...addresses, { ...data, id: newId, isDefault: isFirst || data.isDefault }]);
            setIsAddModalOpen(false);
          }}
        />
      )}

      {isEditModalOpen && editingId && (
        <AddressModal 
          isOpen={isEditModalOpen} 
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingId(null);
          }} 
          title="Sửa địa chỉ" 
          initialData={addresses.find(a => a.id === editingId)}
          onSubmit={(data) => {
            setAddresses(addresses.map(a => {
              if (a.id === editingId) {
                return { ...a, ...data };
              }
              if (data.isDefault) {
                return { ...a, isDefault: false };
              }
              return a;
            }));
            setIsEditModalOpen(false);
            setEditingId(null);
          }}
        />
      )}
    </>
  );
}

// Modal Component defined here for simplicity
interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialData?: Address;
  onSubmit: (data: any) => void;
}

function AddressModal({ isOpen, onClose, title, initialData, onSubmit }: AddressModalProps) {
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    receiverName: initialData?.receiverName || '',
    phone: initialData?.phone || '',
    province: initialData?.province || '',
    provinceCode: '',
    district: initialData?.district || '',
    districtCode: '',
    ward: initialData?.ward || '',
    street: initialData?.street || '',
    addressType: initialData?.addressType || 'HOME',
    isDefault: initialData?.isDefault || false
  });

  // Fetch provinces on mount
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/?depth=1')
      .then(res => res.json())
      .then(data => {
        setProvinces(data);
        if (initialData?.province) {
          const p = data.find((x: any) => x.name === initialData.province);
          if (p) {
            setFormData(prev => ({ ...prev, provinceCode: p.code }));
            fetchDistricts(p.code);
          }
        }
      });
  }, []);

  const fetchDistricts = (pCode: string) => {
    fetch(`https://provinces.open-api.vn/api/p/${pCode}?depth=2`)
      .then(res => res.json())
      .then(data => {
        setDistricts(data.districts);
        if (initialData?.district) {
          const d = data.districts.find((x: any) => x.name === initialData.district);
          if (d) {
            setFormData(prev => ({ ...prev, districtCode: d.code }));
            fetchWards(d.code);
          }
        }
      });
  };

  const fetchWards = (dCode: string) => {
    fetch(`https://provinces.open-api.vn/api/d/${dCode}?depth=2`)
      .then(res => res.json())
      .then(data => setWards(data.wards));
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pCode = e.target.value;
    const pName = e.target.options[e.target.selectedIndex].text;
    setFormData({ ...formData, province: pName, provinceCode: pCode, district: '', districtCode: '', ward: '' });
    setDistricts([]);
    setWards([]);
    if (pCode) fetchDistricts(pCode);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dCode = e.target.value;
    const dName = e.target.options[e.target.selectedIndex].text;
    setFormData({ ...formData, district: dName, districtCode: dCode, ward: '' });
    setWards([]);
    if (dCode) fetchWards(dCode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto pt-[60px] pb-[60px]">
      <div className="bg-white w-full max-w-[800px] relative mx-[15px] my-auto">
        <div className="relative text-center border-b-0 pt-[24px]">
          <h4 className="font-bold uppercase text-[24px] text-[#222] m-0">{title}</h4>
          <button 
            type="button" 
            className="absolute right-[24px] top-[24px] text-[28px] leading-none text-[#000] opacity-50 hover:opacity-100" 
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-[48px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap mx-[-15px] mb-[16px]">
              <div className="w-full md:w-1/2 px-[15px] mb-[16px] md:mb-0">
                <input 
                  type="text" 
                  className="w-full border-b border-[#e1e1e1] pb-[10px] pt-[10px] text-[#222] focus:border-[#222] outline-none transition-colors placeholder-[#6c6d70]" 
                  placeholder="Họ tên" 
                  required 
                  value={formData.receiverName}
                  onChange={e => setFormData({...formData, receiverName: e.target.value})}
                />
              </div>
              <div className="w-full md:w-1/2 px-[15px]">
                <input 
                  type="text" 
                  className="w-full border-b border-[#e1e1e1] pb-[10px] pt-[10px] text-[#222] focus:border-[#222] outline-none transition-colors placeholder-[#6c6d70]" 
                  placeholder="Số điện thoại" 
                  required 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="flex flex-wrap mx-[-15px] mb-[16px]">
              <div className="w-full md:w-1/2 px-[15px] mb-[16px] md:mb-0">
                <select 
                  className="w-full border-b border-[#e1e1e1] pb-[10px] pt-[10px] text-[#222] focus:border-[#222] outline-none transition-colors bg-white appearance-none" 
                  required
                  value={formData.provinceCode}
                  onChange={handleProvinceChange}
                >
                  <option value="">Chọn Tỉnh/Tp</option>
                  {provinces.map(p => (
                    <option key={p.code} value={p.code}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/2 px-[15px]">
                <select 
                  className="w-full border-b border-[#e1e1e1] pb-[10px] pt-[10px] text-[#222] focus:border-[#222] outline-none transition-colors bg-white appearance-none" 
                  required
                  value={formData.districtCode}
                  onChange={handleDistrictChange}
                  disabled={!formData.provinceCode}
                >
                  <option value="">Quận/Huyện</option>
                  {districts.map(d => (
                    <option key={d.code} value={d.code}>{d.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-[16px]">
              <select 
                className="w-full border-b border-[#e1e1e1] pb-[10px] pt-[10px] text-[#222] focus:border-[#222] outline-none transition-colors bg-white appearance-none" 
                required
                value={formData.ward}
                onChange={e => setFormData({...formData, ward: e.target.value})}
                disabled={!formData.districtCode}
              >
                <option value="">Phường xã</option>
                {wards.map(w => (
                  <option key={w.code} value={w.name}>{w.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-[24px]">
              <input 
                type="text" 
                className="w-full border-b border-[#e1e1e1] pb-[10px] pt-[10px] text-[#222] focus:border-[#222] outline-none transition-colors placeholder-[#6c6d70]" 
                placeholder="Địa chỉ cụ thể (Số nhà, tên đường...)" 
                required 
                value={formData.street}
                onChange={e => setFormData({...formData, street: e.target.value})}
              />
            </div>

            <div className="flex items-center mb-[32px] mt-[32px]">
              <label className="flex items-center cursor-pointer mr-[40px]">
                <input 
                  type="radio" 
                  name="addressType" 
                  value="HOME" 
                  className="mr-[8px]" 
                  checked={formData.addressType === 'HOME'}
                  onChange={() => setFormData({...formData, addressType: 'HOME'})}
                />
                <span className="font-bold text-[#222]">Nhà/chung cư</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="addressType" 
                  value="OFFICE" 
                  className="mr-[8px]" 
                  checked={formData.addressType === 'OFFICE'}
                  onChange={() => setFormData({...formData, addressType: 'OFFICE'})}
                />
                <span className="font-bold text-[#222]">Cơ quan/công ty</span>
              </label>
            </div>

            {initialData && (
              <div className="flex items-center mb-[32px]">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-[8px]"
                    checked={formData.isDefault}
                    onChange={e => setFormData({...formData, isDefault: e.target.checked})}
                  />
                  <span className="text-[#222]">Đặt làm mặc định</span>
                </label>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-[#222] text-white py-[16px] font-bold hover:bg-[#333] transition-colors uppercase"
              style={initialData ? { borderRadius: '4px 0 4px 0' } : { borderRadius: '15px 0' }}
            >
              {initialData ? 'SỬA ĐỊA CHỈ' : 'THÊM ĐỊA CHỈ'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
