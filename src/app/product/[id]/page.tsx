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
        <div className="py-[20px] border-b border-[#e1e1e1] mb-[40px] flex items-center text-[14px]">
          <Link href="/" className="text-[#6c757d] hover:text-[#000] no-underline transition-colors">
            Trang chủ
          </Link>
          <span className="mx-[8px] text-[#6c757d]">-</span>
          {product.category.parent && (
            <>
              <Link href={`/danh-muc/${product.category.parent.slug}`} className="text-[#6c757d] hover:text-[#000] no-underline transition-colors uppercase">
                {product.category.parent.name}
              </Link>
              <span className="mx-[8px] text-[#6c757d]">-</span>
            </>
          )}
          <Link href={`/danh-muc/${product.category.slug}`} className="text-[#6c757d] hover:text-[#000] no-underline transition-colors uppercase">
            {product.category.name}
          </Link>
          <span className="mx-[8px] text-[#6c757d]">-</span>
          <span className="text-[#222]">{product.name}</span>
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
