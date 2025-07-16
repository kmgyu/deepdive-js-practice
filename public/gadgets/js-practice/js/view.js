export function createListItem(name, index) {
  const li = document.createElement("li");
  li.innerText = `${index + 1}. ${name}`;
  
  return li;
}