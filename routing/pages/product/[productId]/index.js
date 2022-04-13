import { useRouter } from 'next/router'

function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId
  return <h1>PRODUCT {productId} DETAIL!</h1>;
}

export default ProductDetail;