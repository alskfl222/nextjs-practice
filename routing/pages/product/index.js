import Link from 'next/link';
import { useRouter } from 'next/router';

function Product({ productId = 1 }) {
  const router = useRouter();
  const handleClick = () => {
    console.log('CLICKED');
    router.push('/product/100')
    // router.replace('/product/100')
  };
  return (
    <div>
      <h1>PRODUCT MAIN!!</h1>
      <h2>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h2>
      <button onClick={handleClick}>GO TO Product 100</button>
    </div>
  );
}

export default Product;
