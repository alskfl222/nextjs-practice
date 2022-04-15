

export default function TodoList({ todos }) {
  return (
    <>
      <h1>List of TODO</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>
              {todo.id} {todo.userId} {todo.title}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  console.log('RELOAD')
  const res = await fetch('http://localhost:4000/todos')
  const data = await res.json()
  return {
    props : {
      todos: data.slice(0, 5)
    },
    revalidate: 10,
  }
}