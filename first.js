//  let Name = "oge";
//   console.log(Name)

//  Name = 'favour';
//  console.log(Name)

// const age = 40;
//  console.log(age)



// let firstName = 'ISREAL';
// let grade = 20;
// let isStudent = false;

// let empty;

//  console.log(typeof firstName)
//  console.log(typeof grade)
//  console.log(typeof isStudent)
//  console.log(typeof empty )


//  let Age = 22;
//  if (Age >= 18) {
//    console.log("Adult");
//  } else {
//    console.log("Minor");
//  }


//  let day = "Friday";
//  switch (day) {
//    case "Monday":
//      console.log("Start of the week");
//      break;
//   case "Friday":
//      console.log("Weekend loading...");
//      break;
//    default:
//      console.log("Regular day");
//  }



//  for (let i = 1; i < 5; i++) {
//    console.log("Number " + i);
//  }


//  let count = 1;
//    while (count < 3) {
//      console.log("Count " + count);
//    count++;
//  }


// document.getElementById('btn').addEventListener('click', () => {
//   alert("Button Clicked!");
// });


// document.getElementById('greetBtn').addEventListener('click', () => {
//   document.getElementById('message').innerText = "Hello, welcome!";
//   });





// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('Error:', error));



async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  } catch (error) {
console.log('Error:', error);
  }
}
getUsers();










