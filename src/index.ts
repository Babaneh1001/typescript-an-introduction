type Menu = { 
  id: number, 
  name: string, 
  price: number 
}

type PizzaDetail = string | number;

let person1 = {
  name: "Joe",
  age: 42,
  isStudent: true,
}

let person2 = {
  name: "Jill",
  age: 66,
  isStudent: false,
}

/**
* Challenge: create an array of people objects and
* manually type it as an array of Person types
*/

let people = [person1, person2]

let ages: number[] = [10, 20, 30, 40]


const menu: Menu[] = [
  { id: 1, name: "Pepperoni", price: 8 },
  { id: 2, name: "Cheese", price: 9 },
  { id: 3, name: "Barbeque", price: 10 },
  { id: 4, name: "CutterCheese", price: 11 }
]

// Lesson 18: Type Narrowing


/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
*/

// mine
function getPizzaDetail(identifier: PizzaDetail) {
  /**
   * Challenge: write the code to check if the parameter is a string
   * or a number, and use the menu.find() method accordingly
  */

  if(typeof identifier === "string") {
    let newMenu = menu.find((item) => item.name === identifier)
    return newMenu
  } else if (typeof identifier === "number") {
    let newMenu = menu.find((item) => item.id === identifier)
    return newMenu
  } else {
    throw new TypeError("Parameter must be of type string or number");
  }
}

// tutor
export function getPizzzaDetail(identifier: string | number): Menu | undefined {
  if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } else if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier);  
  } else {
    throw new TypeError("Parameter `identifier` must either be a string or number")
  }

}

// Lesson 20: Function return types --- telling a function what exactly should be returned { function (): functionReturnType }
type UserRole = "guest" | "member" | "admin";

type User = {
  username: string
  role: UserRole
}

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" }
];

function fetchUserDetails(username: string): User {
  const user = users.find(user => user.username === username);
  if(!user) {
    throw new Error(`User wuth username ${username} not found`)
  }
  return user
}

function updateUser(id: number, updates: any) {
  // Find the user in the array by the id
  // Use Object.assign to updadte the found user in the place
  // Check MDn if you need help with using Object.assign 

  if (typeof id !== "number") {
    throw new Error(`id must be a number`)
  }
  else {
     
  }
}