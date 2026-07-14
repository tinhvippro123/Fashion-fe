export interface ProductImage {
  imageUrl: string;
}

export interface ProductColor {
  id: number;
  isActive: boolean;
  color: {
    name: string;
    hexCode: string;
  };
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface ProductVariant {
  id: number;
  size: {
    name: string;
  };
  stock: number;
}

export interface ProductDetail {
  id: number;
  name: string;
  basePrice: number;
  description: string;
  category: {
    name: string;
    slug: string;
    parent?: {
      name: string;
      slug: string;
    };
  };
  productColors: ProductColor[];
}

export const mockProductDetail: ProductDetail = {
  id: 9377,
  name: "ĐẦM LỤA CỔ V DẬP LY",
  basePrice: 1250000,
  description: "Đầm lụa dáng xòe, cổ V tinh tế, tay ngắn, eo xếp ly nhẹ nhàng.\nSử dụng chất liệu lụa cao cấp, mềm mại, thoáng mát, mang lại cảm giác thoải mái khi mặc.\nPhù hợp mặc đi làm, đi chơi hay dạo phố cùng bạn bè.",
  category: {
    name: "Đầm",
    slug: "dam",
    parent: {
      name: "Nữ",
      slug: "nu"
    }
  },
  productColors: [
    {
      id: 1,
      isActive: true,
      color: { name: "Đen", hexCode: "#000000" },
      variants: [
        { id: 1, size: { name: "S" }, stock: 5 },
        { id: 2, size: { name: "M" }, stock: 0 },
        { id: 3, size: { name: "L" }, stock: 3 },
      ],
      images: [
        { imageUrl: "03321697-61dc-4f30-8da7-d25085a78741.webp" },
        { imageUrl: "0b6e2df0-0401-4eb0-a440-1cbf06651b8d.webp" },
        { imageUrl: "0c6249e5-6b99-4739-b277-1440bdeb0561.png" },
        { imageUrl: "121a23af-e7f7-4e5a-8e96-65f25b8a4a3f.webp" },
        { imageUrl: "13dddff3-1a53-4b41-8b70-7c0b2ff37345.webp" },
      ]
    },
    {
      id: 2,
      isActive: true,
      color: { name: "Trắng", hexCode: "#FFFFFF" },
      variants: [
        { id: 4, size: { name: "S" }, stock: 2 },
        { id: 5, size: { name: "M" }, stock: 10 },
      ],
      images: [
        { imageUrl: "121a23af-e7f7-4e5a-8e96-65f25b8a4a3f.webp" },
        { imageUrl: "13dddff3-1a53-4b41-8b70-7c0b2ff37345.webp" },
      ]
    },
    {
      id: 3,
      isActive: true,
      color: { name: "Vàng", hexCode: "#FFFF00" },
      variants: [
        { id: 7, size: { id: 1, name: "S" }, stock: 10 },
        { id: 8, size: { id: 2, name: "M" }, stock: 20 },
        { id: 9, size: { id: 3, name: "L" }, stock: 15 },
      ]
    },
    {
      id: 4,
      isActive: true,
      color: { name: "Xám nhạt", hexCode: "#E0E0E0" },
      variants: [
        { id: 10, size: { id: 1, name: "S" }, stock: 12 },
        { id: 11, size: { id: 2, name: "M" }, stock: 18 },
        { id: 12, size: { id: 3, name: "L" }, stock: 5 },
      ]
    }
  ]
};
