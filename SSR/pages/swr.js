import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('http://localhost:4000/dashboard');
  const data = await res.json();
  return data;
};

export default function SWR() {
  const { data, error } = useSWR('dashboard', fetcher);
  if (error) return 'ERROR!!';
  if (!data) return 'LOADING >>>';
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>posts - {data.posts}</h2>
      <h2>likes - {data.likes}</h2>
      <h2>followers - {data.followers}</h2>
      <h2>following - {data.following}</h2>
    </div>
  );
}
