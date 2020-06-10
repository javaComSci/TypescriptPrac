interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return "HELLO " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "Doe" };

document.body.textContent = greeter(user);