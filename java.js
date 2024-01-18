/*let name = "Chifatso";
let age = 20;
let b = false;
let mark = 85;
console.log(name);
console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (b));
console.log("My name is " + name + " and my age is " + age + ".");
if (age > 18) {
    console.log("Allowed to drive");
}
else {
    console.log("Not allowed to drive");
}
console.log("for");

for (let i = 0; i < age; i++) {
    console.log(i += 2);
}
console.log("while");
while (age != 0) {
    console.log(age -= 2);
}*/




let b = document.getElementById("b1");
b.addEventListener("click", function () {
    let heading = document.getElementById("i1");
    console.log(heading);
    heading.innerHTML = "This is me now!";
    let para = document.getElementById("i2");
    para.innerHTML = "Hey my name is Chifatso Manda and I'm 20 years of age!";

    let para2 = document.getElementById("i3");
    para2.innerHTML = "Hey I have four siblings and they are Kampamba mutale, Tisamale Manda, Patrick Banda and Lusubilo Manda";

    let heading2 = document.getElementById("i4");
    heading2.innerHTML = "My Family!"


})
let btn = document.getElementById("b2");
btn.addEventListener("click", function () {
    let age = 20;
    if (age > 18) {
        console.log("You can drive!");
    }
    else {
        console.log("You cannot drive!");
    }
})

let d = document.getElementById("d1");
d.addEventListener("click", function () {
    console.log("I am going to improve my skills with constant practice!");
})

let s = document.getElementById("s1");
s.addEventListener("submit", function (e) {
    e.preventDefault();
})
