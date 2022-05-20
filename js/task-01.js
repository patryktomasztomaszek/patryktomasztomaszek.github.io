const task01 = () => {
  let result = "";
  const item = document.querySelectorAll(".item");
  result += `Number of categories: ${item.length}\n`;
  item.forEach((item) => {
    result += `\nCategory: ${item.querySelector("h2").innerHTML}\nElements: ${
      item.querySelectorAll("li").length
    }\n`;
  });
  console.log(result);
};
task01();
