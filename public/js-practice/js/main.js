import { createHeader } from "./header.js";
import { createFooter } from "./footer.js";
import { createListItem } from "./view.js";

const app = document.getElementById("app");

const input = document.createElement("input");
input.id = "nameInput";
input.placeholder = "이름을 입력하세요";

const button = document.createElement("button");
button.id = "addBtn";
button.innerText = "등록";

const list = document.createElement("ul");
list.id = "guestList";

const guestbook = [];

button.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    guestbook.push({ name });
    list.appendChild(createListItem(name, guestbook.length - 1));
    console.log(guestbook);
    input.value = "";
  }
});

app.appendChild(createHeader());
app.appendChild(input);
app.appendChild(button);
app.appendChild(list);
app.appendChild(createFooter());