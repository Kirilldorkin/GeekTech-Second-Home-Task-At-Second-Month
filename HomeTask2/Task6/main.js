let arr = [1, true, false, undefined];
arr.splice(0, 1, "Sasha");
arr.splice(1, 1, "Alina");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

