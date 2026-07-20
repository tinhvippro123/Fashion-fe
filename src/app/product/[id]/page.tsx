import Link from 'next/link';
import { mockProductDetail } from '@/types/product';
import ProductDetailClient from '@/components/product/ProductDetailClient';
import SizeGuideModal from '@/components/product/SizeGuideModal';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;
  
  // In a real app, fetch product by ID here
  const product = mockProductDetail;

  return (
    <div className="w-full">
      {/* Breadcrumb Area */}
      <div className="container-luxe px-[15px] min-[1200px]:px-[85px] mx-auto">
        <div className="text-[14px] font-bold uppercase border-b border-[#e1e1e1] pt-[20px] pb-[21px] mb-[40px]">
          <Link href="/" className="text-[#333] hover:text-[#000] transition-colors">
            Trang chủ
          </Link>
          <span className="mx-[8px]">-</span>
          {product.category.parent && (
            <>
              <Link href={`/danh-muc/${product.category.parent.slug}`} className="text-[#333] hover:text-[#000] transition-colors">
                {product.category.parent.name}
              </Link>
              <span className="mx-[8px]">-</span>
            </>
          )}
          <Link href={`/danh-muc/${product.category.slug}`} className="text-[#333] hover:text-[#000] transition-colors">
            {product.category.name}
          </Link>
          <span className="mx-[8px]">-</span>
          <span className="truncate max-w-[200px] sm:max-w-[400px] inline-block align-bottom">{product.name}</span>
        </div>
      </div>

      {/* Main Product Content */}
      <div className="container-luxe px-[15px] min-[1200px]:px-[85px] mx-auto mb-[60px]">
        <ProductDetailClient product={product} />
      </div>

      {/* Modals */}
      <SizeGuideModal />
    </div>
  );
}
