"use client";

function fisherYatesShuffle(arr) {
  let i = arr.length;
  while (i != 0) {
    let j = Math.floor(Math.random() * i);
    i--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  let fruitsAndVegetables = fisherYatesShuffle(["squash", "cucumbers", "figs",
  "beans", "avocados", "lemons", "grapefruit", "raspberries", "cherries",
  "peaches", "celery", "apples", "strawberries", "cabbage", "peas", "limes",
  "potatoes", "broccoli", "oranges", "tomatoes", "pears", "grapes", "corn",
  "pineapples", "lettuce", "peppers", "bananas", "spinach", "onions",
  "carrots"]);

  console.log(fruitsAndVegetables);

  return <p>list comparison app</p>
}
