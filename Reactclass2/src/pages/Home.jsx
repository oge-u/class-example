// function Home() {
//   return <h1>Home Page</h1>;
// }
// export default Home;

import { useState } from "react";

function Home() {

  // state to track number of clicks
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to our Store</h1>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

    </div>
  );
}

export default Home;