import { useRouter } from 'next/router';

export default function Events({ events }) {
  const router = useRouter();
  const { category } = router.query;
  if (category) {
    events = events.filter(event => event.category === category)
  }
  function toSports() {
    router.push('/events?category=sports', undefined, { shallow: true });
  }

  return (
    <>
      <button onClick={toSports}>GO TO SPORTS</button>
      <h1>LIST of EVENTS</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} - {event.title} | {event.category}
            </h2>
            <p>{event.desc}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  // const { query } = context;
  // const { category } = query;
  // const queryString = category ? `category=${category}` : '';
  const res = await fetch(`http://localhost:4000/events`);
  const data = await res.json();

  return {
    props: {
      events: data,
    },
  };
}
