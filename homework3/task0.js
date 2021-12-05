function sayHello(x) {
    if (x == "Oleg" || x == "Viktor") {
        console.log("Hello, " + x);
    } else if (x == "Mark") {
        console.log("Hi, " + x)
    } else {
        console.log("I don't know, who is " + x)
    }
} 
sayHello("Mark");
sayHello("Oleg");
sayHello("Viktor");
sayHello("Vlad");

// можно на switch 

function sayHello2(a) {
    switch (a) {
    case "Mark":
        console.log("Hi, " + a);
        break;
    case "Oleg":
        console.log("Hello, " + a);
        break;
    case "Viktor":
        console.log("Hello, " + a);
        break;
    default:
        console.log("I don't know, who is " + a);
}
}
sayHello2("Mark");
sayHello2("Oleg");
sayHello2("Viktor");
sayHello2("Vlad");
