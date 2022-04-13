import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>HELLO!</h1>
      <Link href='/blog'>
        <a>BLOG</a>
      </Link>
      <Link href='/product'>
        <a>PRODUCT</a>
      </Link>
      <Link href='/docs'>
        <a>DOCS</a>
      </Link>
    </div>
  );
}

export default Home;
