// Write your code here!
const removeMain = document.getElementById('main');
removeMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Mbolonzi is the champion";
newHeader.className = "victorious";

// const element1 = document.createElement("div")

// document.body.append(element1);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element1.append(ul);

// li.textContent = "Hi there!";
// console.log(li.textContent);


// const main = document.getElementById("main");
// main.innerHTML =
//   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// const element = document.getElementById("main");
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";

// element.textContent = "You've changed what's on the screen!";

// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;
// element.className = "pet-listing dog";

// element.classList.remove("dog");
// element.classList.add("cat", "sale");

// someElement.removeChild(someChildElement);

// const ul1 = document.getElementsByTagName("ul")[0];
// const secondChild = ul1.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// ul.remove();