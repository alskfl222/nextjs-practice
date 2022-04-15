export default function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        CATEGORY <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} - {article.title} | {article.category}
            </h2>
            <p>{article.desc}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  // console.log(query)
  // console.log(req.headers.cookie)
  // res.setHeader('Set-Cookie', ['name=alskfl'])
  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();
  console.log('PRE-RENDER')

  return {
    props: {
      articles: data,
      category,
    },
  };
}
