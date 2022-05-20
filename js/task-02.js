const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const task02 = () => {
  let ingredientList = "";
  const list = document.querySelector("#ingredients");
  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.className = "item";
    li.textContent = ingredient;
    list.append(li);
  });
};
task02();
