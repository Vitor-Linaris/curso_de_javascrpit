export default function calculate() {
  const resultsInput = document.getElementById("result");
  resultsInput.value = "ERROR";
  resultsInput.classList.add("error");

  const result = eval(input.value);

  resultsInput.value = result;
  resultsInput.classList.remove("error");
}
