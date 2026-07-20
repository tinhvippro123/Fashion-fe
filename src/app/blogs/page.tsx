import Link from 'next/link';

const MOCK_BLOGS = [
  {
    id: 1,
    slug: 'xu-huong-thoi-trang-thu-dong-2026',
    title: 'Xu hướng thời trang Thu Đông 2026: Sự trở lại của Minimalism',
    excerpt: 'Phong cách tối giản (Minimalism) đang quay trở lại mạnh mẽ trong bộ sưu tập Thu Đông năm nay. Hãy cùng khám phá cách phối đồ chuẩn xu hướng.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    date: '20/07/2026',
    author: 'LUXE Fashion',
    category: 'Xu hướng thời trang'
  },
  {
    id: 2,
    slug: 'cach-phoi-do-voi-ao-blazer-nu',
    title: '5 Cách phối đồ với áo Blazer nữ chuẩn thanh lịch chốn công sở',
    excerpt: 'Áo blazer là item không thể thiếu trong tủ đồ của các quý cô công sở. Bài viết này sẽ mách bạn 5 cách mix&match ấn tượng nhất.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    date: '18/07/2026',
    author: 'Minh Thư',
    category: 'Mẹo phối đồ'
  },
  {
    id: 3,
    slug: 'bao-quan-do-da-dung-cach',
    title: 'Bí quyết bảo quản đồ da luôn bền đẹp như mới',
    excerpt: 'Đồ da mang lại vẻ sang trọng nhưng lại đòi hỏi sự chăm sóc kỹ lưỡng. Đừng bỏ lỡ những mẹo vệ sinh và bảo quản cực dễ làm này.',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
    date: '15/07/2026',
    author: 'LUXE Fashion',
    category: 'Hướng dẫn bảo quản'
  },
  {
    id: 4,
    slug: 'ra-mat-bo-suu-tap-moi',
    title: 'LUXE Fashion chính thức ra mắt Bộ sưu tập Summer Vibes',
    excerpt: 'Đón chào mùa hè sôi động cùng bộ sưu tập mới nhất từ LUXE Fashion với các chất liệu thoáng mát và họa tiết tươi trẻ.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
    date: '10/07/2026',
    author: 'LUXE News',
    category: 'Tin tức cửa hàng'
  }
];

export default function BlogsPage() {
  return (
    <div className="w-full bg-[#f8f9fa] pb-[60px]">
      <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto">
        {/* Breadcrumb */}
        {/* Breadcrumb */}
        <div className="text-[14px] font-bold uppercase border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
          <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">Trang chủ</Link>
          <span className="mx-[8px]">-</span>
          <span>Tin tức thời trang</span>
        </div>

        <div className="text-center mb-[40px]">
          <h1 className="text-[32px] font-bold uppercase tracking-[2px] text-[#000] mb-[10px]">
            TIN TỨC & XU HƯỚNG
          </h1>
          <p className="text-[#6c757d] text-[16px] max-w-[600px] mx-auto">
            Cập nhật những xu hướng thời trang mới nhất, mẹo phối đồ và tin tức từ LUXE Fashion.
          </p>
        </div>

        {/* CATEGORY FILTER & SEARCH */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] mb-[40px] bg-white p-[15px] rounded-[8px] shadow-sm">
          <ul className="flex flex-wrap gap-[10px]">
            {['Tất cả', 'Xu hướng thời trang', 'Mẹo phối đồ', 'Tin tức cửa hàng', 'Lookbook'].map((cat, idx) => (
              <li key={cat}>
                <button 
                  className={`px-[20px] py-[8px] rounded-[30px] text-[14px] font-medium transition-colors ${idx === 0 ? 'bg-[#000] text-white' : 'bg-[#f5f5f5] text-[#555] hover:bg-[#e1e1e1]'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="relative w-full md:w-[300px]">
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết..." 
              className="w-full border border-[#e1e1e1] rounded-[30px] py-[10px] pl-[20px] pr-[45px] text-[14px] outline-none focus:border-[#000] transition-colors"
            />
            <button className="absolute right-[15px] top-[50%] -translate-y-[50%] text-[#999] hover:text-[#000]">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* FEATURED / PINNED POST */}
        <div className="mb-[60px]">
          <h2 className="text-[20px] font-bold uppercase border-l-[4px] border-[#e10600] pl-[12px] mb-[20px] text-[#000] flex items-center gap-2">
            <i className="fas fa-thumbtack text-[#e10600]"></i> Bài viết nổi bật
          </h2>
          <article className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group flex flex-col md:flex-row">
            <Link href={`/blogs/${MOCK_BLOGS[0].slug}`} className="block relative md:w-[60%] overflow-hidden">
              <img 
                src={MOCK_BLOGS[0].image} 
                alt={MOCK_BLOGS[0].title}
                className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-[20px] left-[20px] bg-[#e10600] text-white text-[13px] font-bold px-[15px] py-[6px] rounded-[4px] uppercase tracking-wider shadow-lg">
                <i className="fas fa-thumbtack mr-2"></i>Đã ghim
              </div>
            </Link>
            <div className="p-[30px] md:p-[40px] md:w-[40%] flex flex-col justify-center bg-white">
              <div className="mb-[15px]">
                <span className="text-[#f7941d] font-bold text-[13px] uppercase tracking-[1px]">
                  {MOCK_BLOGS[0].category}
                </span>
              </div>
              <h3 className="text-[24px] md:text-[32px] font-bold text-[#000] mb-[20px] leading-[1.3]">
                <Link href={`/blogs/${MOCK_BLOGS[0].slug}`} className="hover:text-[#e10600] transition-colors">
                  {MOCK_BLOGS[0].title}
                </Link>
              </h3>
              <div className="flex items-center gap-4 text-[13px] text-[#666] mb-[20px]">
                <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> {MOCK_BLOGS[0].date}</span>
                <span className="w-[4px] h-[4px] bg-[#ccc] rounded-full"></span>
                <span className="flex items-center gap-2"><i className="far fa-user"></i> {MOCK_BLOGS[0].author}</span>
              </div>
              <p className="text-[#555] text-[15px] leading-[1.6] mb-[30px]">
                {MOCK_BLOGS[0].excerpt}
              </p>
              <div>
                <Link 
                  href={`/blogs/${MOCK_BLOGS[0].slug}`}
                  className="inline-block bg-[#000] text-white font-bold text-[14px] uppercase tracking-[1px] px-[30px] py-[12px] hover:bg-[#e10600] transition-colors rounded-[4px]"
                >
                  Đọc tiếp
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* REGULAR POSTS GRID */}
        <h2 className="text-[20px] font-bold uppercase border-l-[4px] border-[#000] pl-[12px] mb-[20px] text-[#000]">
          Tất cả bài viết
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {MOCK_BLOGS.slice(1).map((blog) => (
            <article key={blog.id} className="bg-white rounded-[8px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-shadow duration-300 group flex flex-col">
              <Link href={`/blogs/${blog.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-[15px] left-[15px] bg-[#000] text-white text-[12px] font-bold px-[10px] py-[4px] rounded-[4px]">
                  {blog.category}
                </div>
              </Link>
              <div className="p-[20px] flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[13px] text-[#999] mb-[10px]">
                  <span className="flex items-center gap-1"><i className="far fa-calendar-alt"></i> {blog.date}</span>
                  <span className="flex items-center gap-1"><i className="far fa-user"></i> {blog.author}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#000] mb-[12px] leading-[1.4] line-clamp-2">
                  <Link href={`/blogs/${blog.slug}`} className="hover:text-[#f7941d] transition-colors">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-[#666] text-[14px] leading-[1.6] line-clamp-3 mb-[20px] flex-grow">
                  {blog.excerpt}
                </p>
                <div>
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    className="inline-block text-[#000] font-bold text-[14px] uppercase tracking-[1px] border-b-[2px] border-[#000] pb-[2px] hover:text-[#f7941d] hover:border-[#f7941d] transition-colors"
                  >
                    Đọc tiếp
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
