import { useRouter } from 'next/router';

export default function Todo({ todo }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>DOING something...</div>;
  }
  return (
    <h2>
      {todo.id} {todo.userId} {todo.title}
    </h2>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/todos/${params.todoId}`);
  const data = await res.json();
  return {
    props: {
      todo: data,
    },
  };
}
 
export async function getStaticPaths() {
  return {
    paths: [
      { params: { todoId: '1' } },
      { params: { todoId: '2' } },
      { params: { todoId: '3' } },
    ],
    fallback: true,
  };
}
