const lenth = 100;
const arr = Array.from({length: lenth}, (_, index) => index + 1);

for (let i = 0; i < lenth; i++) {  
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0)
    {
        arr.splice(i, 1, "FizzBuzz"); 
    } 

    else if (arr[i] % 3 === 0)
    {
        arr.splice(i, 1, "Fizz"); 
    }

    // Этот блок нужно будет удалить, если хотите выполнить  
    // программу без дополнительного условия. 
    else if (arr[i] % 5 === 0)
    {
        arr.splice(i, 1, "Buzz"); 
    }
}

console.log(arr);
