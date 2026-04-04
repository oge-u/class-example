import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Friend Counter: {count}</h2>

      <button onClick={() => setCount(count + 4)}>Add Friend</button>
      <button onClick={() => setCount(count - 4)} style={{ margin: "0 10px" }}>
        Remove Friend
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
