import { createHeader } from "./header.js";
import { createFooter } from "./footer.js";
import { createListItem } from "./view.js";

const app = document.getElementById("app");

const input = document.createElement("input");
input.id = "nameInput";
input.placeholder = "이름을 입력하세요";

const add_btn = document.createElement("add_btn");
add_btn.id = "addBtn";
add_btn.innerText = "등록";

const del_btn = document.createElement("del_btn");
del_btn.id = "delBtn";
del_btn.innerText = "삭제";

const list = document.createElement("ul");
list.id = "guestList";

const guestbook = [];

// 이벤트 추가
add_btn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    guestbook.push({ name });
    list.appendChild(createListItem(name, guestbook.length - 1));
    console.log(guestbook);
    input.value = "";
  }
});

del_btn.addEventListener("click", () => {
  // 2. <li> 목록 선택
  const items = list.getElementsByTagName('li');
  
  // 3. <li> 목록 중 첫번째 item 삭제
  if(items.length > 0)  {
    items[0].remove();
  }
  else {
    alert('삭제할 대상이 존재하지 않습니다.');
  }
});


app.appendChild(createHeader());
app.appendChild(input);
app.appendChild(add_btn);
app.appendChild(del_btn);
app.appendChild(list);
app.appendChild(createFooter());