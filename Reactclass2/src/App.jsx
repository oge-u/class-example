// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <p>This is JSX.</p>
//     </div>
//   );
// }

// export default App;



// import Greeting from "./Welcome";

// function App() {
//   return (
//     <div>
//       <Greeting name="Oge" />
//       <Greeting name="John" />

//     </div>
//   );
// }

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//        <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }


// export default App;



// import ProductCard from "./productcard";

// function App() {
  

//   return (
//     <div>
//     <ProductCard name="Laptop" price="250000" />
//     <ProductCard name="Headphones" price="15000" />
//     <ProductCard name="Keyboard" price="10000" />

//     </div>
//   );
// }


// export default App;


// import Header from "./components/Header";
// import ProfileCard from "./components/ProfileCard";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <div>
//       <Header />

//       <div style={{ display: "flex" }}>
//         <ProfileCard
//           name="Oge Eucharia"
//           age="24"
//           country="Nigeria"
//           image="https://randomuser.me/api/portraits/women/44.jpg"
//         />


// <ProfileCard
//           name="John Doe"
//           age="29"
//           country="USA"
//           image="https://randomuser.me/api/portraits/men/32.jpg"
//         />

//         <ProfileCard
//           name="Maria Silva"
//           age="27"
//           country="Brazil"
//           image="https://randomuser.me/api/portraits/women/55.jpg"
//         />
//       </div>

//       <Counter />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>decrease</button>
//     </div>
//   );
// }

// export default Counter


// import { useState, useEffect } from "react";

// function App() {
//   const [message, setMessage] = useState("Loading...");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMessage("Welcome to React!");
//     }, 0);

//     return () => clearTimeout(timer);
//   }, []);

//   return <h2>{message}</h2>;
// }

// export default App;



// import { useState, useEffect } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h2>Users List</h2>
//       {users.map(user => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }


// export default App



// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link> | 
//         <Link to="/about">About</Link> | 
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>

      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
