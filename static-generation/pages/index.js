import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link href='/users'>
        <a>USERS</a>
      </Link>
      <Link href='/posts'>
        <a>POSTS</a>
      </Link>
    </div>
  );
}
