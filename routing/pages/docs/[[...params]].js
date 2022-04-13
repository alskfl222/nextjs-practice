import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length > 0) {
    return (
      <div>
        <h1>DOC :D</h1>
        <p>total params : {params.length}</p>
        {params.map((param, idx) => (
          <p>
            parameter {idx + 1}: {param}
          </p>
        ))}
      </div>
    );
  }
  return <h1>DOC HOMEPAGE :D</h1>;
}

export default Doc;
