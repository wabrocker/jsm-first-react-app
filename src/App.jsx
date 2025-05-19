import { useState, useEffect } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [title, hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count || null}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Matrix" />
    </div>
  );
};

export default App;
