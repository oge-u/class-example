// import Welcome from "./welcome";

// function App() {
//   return (
//     <div>
//       <Welcome  name="oge"/>
//       <Welcome  name="favour"/>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick={() => setCount(count + 3)}>Increase</button>
//       <button onClick={() => setCount(count - 3)}>Decrease</button>
//     </div>
//   );
// }

// export default App;




// import ProductCard from "./productcard";

// function App() {


//   return (
//     <div>
//       <ProductCard name="Laptop" price="250000" />
//       <ProductCard name="Headphones" price="15000" />
//       <ProductCard name="Keyboard" price="10000" />

//     </div>
//   );
// }

// export default App;



import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header />

      <div style={{ display: "flex" }}>
        <ProfileCard
          name="Oge Eucharia"
          age="24"
          country="Nigeria"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
        
<ProfileCard
          name="John Doe"
          age="29"
          country="USA"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />

        <ProfileCard
          name="Maria Silva"
          age="27"
          country="Brazil"
          image="https://randomuser.me/api/portraits/women/55.jpg"
        />
      </div>

      <Counter />
    </div>
  );
}

export default App;
