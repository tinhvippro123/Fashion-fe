import Link from 'next/link';

// In a real app, you would fetch this from an API based on params.slug
const MOCK_BLOG = {
  id: 1,
  slug: 'xu-huong-thoi-trang-thu-dong-2026',
  title: 'Xu hướng thời trang Thu Đông 2026: Sự trở lại của Minimalism',
  content: `
    <p>Phong cách tối giản (Minimalism) đang quay trở lại mạnh mẽ trong bộ sưu tập Thu Đông năm nay. Hãy cùng khám phá cách phối đồ chuẩn xu hướng.</p>
    <h2>1. Màu sắc trung tính lên ngôi</h2>
    <p>Khác với những gam màu rực rỡ của mùa hè, thu đông năm nay chứng kiến sự lên ngôi của các gam màu trung tính như be, xám, đen và trắng. Sự kết hợp tinh tế giữa các mảng màu này không chỉ mang lại vẻ thanh lịch mà còn vô cùng dễ phối đồ.</p>
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" alt="Minimalism fashion" />
    <h2>2. Chất liệu lên tiếng</h2>
    <p>Khi màu sắc được tiết chế, chất liệu sẽ là yếu tố quyết định sự sang trọng của trang phục. Len cashmere, lụa tơ tằm hay da thật mềm mại là những lựa chọn hàng đầu cho bộ sưu tập năm nay.</p>
    <h2>3. Phụ kiện tối giản</h2>
    <p>Đừng lạm dụng quá nhiều phụ kiện. Một chiếc đồng hồ dây da bản nhỏ hay dây chuyền sợi mảnh là đủ để tạo điểm nhấn cho toàn bộ trang phục của bạn.</p>
  `,
  image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
  date: '20/07/2026',
  author: 'LUXE Fashion',
  category: 'Xu hướng thời trang',
  tags: ['Thu Đông', 'Minimalism', 'Xu hướng 2026']
};

export default function BlogDetailPage() {
  return (
    <div className="w-full bg-[#f8f9fa] pb-[80px]">
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto">
        {/* Breadcrumb */}
        <div className="text-[14px] font-bold uppercase border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
          <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">Trang chủ</Link>
          <span className="mx-[8px]">-</span>
          <Link href="/blogs" className="text-[#333] hover:text-[#000] transition-colors">Tin tức</Link>
          <span className="mx-[8px]">-</span>
          <span className="truncate max-w-[200px] sm:max-w-[400px] inline-block align-bottom">
            {MOCK_BLOG.title}
          </span>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Main Article Content */}
          <div className="w-full lg:w-[70%] lg:pr-[50px]">
            {/* Article Header */}
        <header className="mb-[40px]">
          <div className="mb-[15px]">
            <Link href="/blogs" className="text-[#f7941d] font-bold text-[13px] uppercase tracking-[1px] hover:underline">
              {MOCK_BLOG.category}
            </Link>
          </div>
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#000] leading-[1.3] mb-[20px]">
            {MOCK_BLOG.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[#666] text-[14px]">
            <span className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] rounded-full bg-[#eee] flex items-center justify-center overflow-hidden">
                <i className="fas fa-user text-[#999]"></i>
              </div>
              {MOCK_BLOG.author}
            </span>
            <span className="w-[4px] h-[4px] rounded-full bg-[#ccc]"></span>
            <span className="flex items-center gap-1"><i className="far fa-calendar-alt"></i> {MOCK_BLOG.date}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white p-[20px] md:p-[40px] rounded-[8px] shadow-[0_5px_15px_rgba(0,0,0,0.05)]">
          {/* Main Image */}
          <div className="mb-[30px] rounded-[8px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MOCK_BLOG.image} alt={MOCK_BLOG.title} className="w-full h-auto object-cover aspect-[16/9]" />
          </div>

          {/* Typography Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#000] prose-p:text-[#444] prose-p:leading-[1.8] prose-img:rounded-[8px] prose-img:w-full prose-a:text-[#f7941d]"
            dangerouslySetInnerHTML={{ __html: MOCK_BLOG.content }}
          />

          {/* Tags & Share */}
          <div className="mt-[50px] pt-[20px] border-t border-[#eee] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-[#000] mr-2">Tags:</span>
              {MOCK_BLOG.tags.map(tag => (
                <Link key={tag} href="#" className="bg-[#f5f5f5] text-[#555] text-[13px] px-[12px] py-[6px] rounded-[4px] hover:bg-[#000] hover:text-white transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#000]">Chia sẻ:</span>
              <button className="w-[35px] h-[35px] rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="w-[35px] h-[35px] rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="w-[35px] h-[35px] rounded-full bg-[#cb2027] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <i className="fab fa-pinterest-p"></i>
              </button>
            </div>
          </div>
        </article>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%] mt-[50px] lg:mt-0">
            {/* Search */}
            <div className="bg-white p-[30px] rounded-[8px] shadow-sm mb-[30px]">
              <h3 className="text-[18px] font-bold text-[#000] uppercase mb-[20px] border-b border-[#eee] pb-[15px]">Tìm kiếm</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Tìm bài viết..." 
                  className="w-full border border-[#eee] rounded-[4px] py-[12px] px-[15px] pr-[40px] text-[14px] outline-none focus:border-[#222]"
                />
                <button className="absolute right-[15px] top-[50%] -translate-y-[50%] text-[#999] hover:text-[#000]">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-[30px] rounded-[8px] shadow-sm mb-[30px]">
              <h3 className="text-[18px] font-bold text-[#000] uppercase mb-[20px] border-b border-[#eee] pb-[15px]">Danh mục</h3>
              <ul className="flex flex-col gap-3">
                {['Xu hướng thời trang', 'Mẹo phối đồ', 'Tin tức cửa hàng', 'Lookbook', 'Sự kiện'].map(cat => (
                  <li key={cat}>
                    <Link href="#" className="text-[#555] text-[15px] hover:text-[#e10600] flex justify-between items-center transition-colors">
                      <span>{cat}</span>
                      <i className="fas fa-angle-right text-[12px]"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-[30px] rounded-[8px] shadow-sm mb-[30px]">
              <h3 className="text-[18px] font-bold text-[#000] uppercase mb-[20px] border-b border-[#eee] pb-[15px]">Bài viết mới</h3>
              <div className="flex flex-col gap-[20px]">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-[15px] items-center group cursor-pointer">
                    <div className="w-[80px] h-[80px] rounded-[4px] overflow-hidden shrink-0">
                      <img src={`https://picsum.photos/150/150?random=${item + 10}`} alt="thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#333] mb-[5px] group-hover:text-[#e10600] transition-colors line-clamp-2">Cách phối đồ mùa đông chuẩn phong cách Hàn Quốc</h4>
                      <span className="text-[12px] text-[#999]">15/07/2026</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
