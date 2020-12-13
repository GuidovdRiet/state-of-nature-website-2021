function Event({ date, description, title }) {
  console.log(date);

  return <div className="post">{date && date}</div>;
}

export default Event;
