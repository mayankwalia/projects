screen = document.getElementById("result");

const solve = () => {
  result = eval(screen.value);
  screen.value = result;
};
const display = (val) => {
  screen.value += val;
};
const clearAll = () => {
  console.log("23");
  screen.value = "";
};
