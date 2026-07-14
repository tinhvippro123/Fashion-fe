# Luxe Fashion Shop - Frontend

Dự án này là phiên bản Frontend hiện đại hóa của Luxe Fashion Shop, được chuyển đổi từ kiến trúc SSR truyền thống (Spring Boot + Thymeleaf) sang kiến trúc Frontend độc lập và linh hoạt sử dụng **Next.js** và **Tailwind CSS**.

## 🏗️ Kiến Trúc Hệ Thống (Architecture)

Kiến trúc hiện tại được thiết kế cực kỳ dễ dàng để **mở rộng (scalable)** và **bảo trì (maintainable)** nhờ vào các yếu tố cốt lõi sau:

### 1. Component-Based Architecture (Kiến trúc hướng Component)
Mọi thành phần giao diện đều được bẻ nhỏ thành các "viên gạch" (React Components) độc lập, có thể tái sử dụng ở bất kỳ đâu trong ứng dụng.
- **Ví dụ**: `ProductCard`, `HomeSlider`, `Header`, `Footer`.
- **Lợi ích**: Khi cần sửa giao diện của một thẻ sản phẩm, chỉ cần sửa ở **1 file duy nhất** (`ProductCard.tsx`), toàn bộ website sẽ tự động cập nhật. Khi cần tạo trang mới, chỉ việc "lắp ráp" các component có sẵn.

### 2. Utility-First CSS với Tailwind CSS
Thay vì viết các file `.css` khổng lồ truyền thống dễ gây ra tình trạng "rác CSS" (Dead CSS) và xung đột class, hệ thống sử dụng Tailwind CSS.
- **Lợi ích**: Code HTML (JSX) và CSS nằm chung một chỗ giúp lập trình viên biết chính xác kiểu dáng của phần tử đó mà không cần tra cứu. Kích thước file CSS xuất bản (build) cực kỳ nhỏ gọn vì Tailwind sẽ tự động loại bỏ các class không sử dụng (Tree-shaking).

### 3. Next.js App Router (Thế hệ mới)
Dự án sử dụng cơ chế định tuyến (Routing) mới nhất của Next.js là **App Router** (`src/app/`).
- Hỗ trợ tốt cho cả CSR (Client-Side Rendering) và SSR (Server-Side Rendering).
- Giúp SEO cực tốt so với React thuần (SPA).
- Tối ưu hóa tốc độ tải trang nhờ Server Components và tự động phân tách mã (Code Splitting).

---

## 📁 Cấu Trúc Thư Mục (Folder Structure)

Dự án được phân chia thư mục theo chuẩn mực rõ ràng:

```text
frontend/
├── public/                  # Chứa tài nguyên tĩnh (ảnh, fonts, icon)
│   ├── client/img/          # Hình ảnh tĩnh của giao diện (banner, logo...)
│   └── uploads/             # Ảnh mock cho sản phẩm
│
├── src/
│   ├── app/                 # Next.js App Router (Định nghĩa các trang)
│   │   ├── layout.tsx       # Layout bao ngoài của toàn website (chứa Header, Footer)
│   │   ├── page.tsx         # Giao diện Trang Chủ (Home Page)
│   │   └── globals.css      # CSS toàn cục (Import Tailwind & Font)
│   │
│   └── components/          # Nơi chứa các "viên gạch" (React Components)
│       ├── common/          # Component dùng chung toàn dự án
│       │   └── ProductCard.tsx # Thẻ sản phẩm tái sử dụng
│       │
│       ├── layout/          # Component liên quan đến bố cục chính
│       │   ├── Header.tsx   # Thanh điều hướng trên cùng
│       │   └── Footer.tsx   # Chân trang
│       │
│       └── home/            # Component chỉ dùng riêng cho Trang Chủ
│           ├── HomeSlider.tsx  # Banner trượt lớn
│           └── ProductSlider.tsx # Danh sách sản phẩm trượt ngang
│
├── tailwind.config.ts       # File cấu hình màu sắc, animation, font cho Tailwind
└── package.json             # Danh sách thư viện và script khởi chạy dự án
```

## 🚀 Hướng Dẫn Khởi Chạy (Getting Started)

1. **Cài đặt thư viện**:
   ```bash
   npm install
   ```
2. **Chạy server ở chế độ phát triển**:
   ```bash
   npm run dev
   ```
3. Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

## 🔧 Định Hướng Mở Rộng Tiếp Theo (Future Scaling)

- **Tích hợp API Backend**: Sử dụng `axios` hoặc SWR/React-Query để gọi API thật từ Spring Boot, thay thế cho dữ liệu mẫu (mock data).
- **Quản lý Trạng Thái Toàn Cục (State Management)**: Tích hợp `Zustand` hoặc `Redux Toolkit` để quản lý Giỏ hàng (Cart) và Phiên đăng nhập (User Session).
- **Hệ thống Thiết kế (Design System)**: Có thể chuyển đổi các mã màu (như `#ff0000`, `#333`) thành biến màu của Tailwind trong `tailwind.config.ts` để làm giao diện sáng/tối (Dark Mode) dễ dàng.
