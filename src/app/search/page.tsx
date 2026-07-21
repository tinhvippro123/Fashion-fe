import Link from 'next/link';
import FilterSidebar from '@/features/catalog/components/category/FilterSidebar';
import ProductGrid from '@/features/catalog/components/category/ProductGrid';

export default async function SearchPage({ 
  searchParams
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  
  const pageParam = resolvedSearchParams.page;
  const currentPage = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const keyword = typeof resolvedSearchParams.keyword === 'string' ? resolvedSearchParams.keyword : '';
  
  const title = keyword ? `KẾT QUẢ TÌM KIẾM CHO: "${keyword.toUpperCase()}"` : 'KẾT QUẢ TÌM KIẾM';

  return (
    <div className="w-full min-[1200px]:px-[85px] px-[15px] mx-auto mb-[80px]">
      {/* Breadcrumbs */}
      <div className="text-[14px] font-bold uppercase border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
        <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">Trang chủ</Link>
        <span className="mx-[8px]">-</span>
        <span>Tìm kiếm</span>
      </div>

      <div className="flex flex-wrap relative">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-full lg:w-[25%] px-[15px] mb-[30px] lg:mb-0">
          <FilterSidebar />
        </div>

        {/* Product Grid Area */}
        <div className="w-full lg:w-[75%]">
          <ProductGrid title={title} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}
