let i = 0;
const max = 7;

while (i < max) {
  let star = "";
  for (let j = 0; j < i + 1; j++) star += "*";
  console.log(star);
  i++;
}