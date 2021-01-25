nums = [5, 12, 89, 45, 18, 8];

for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    if(num % 2 == 0){
        console.log(num, ': is enen number');
    } else{
        console.log(num, ': is odd number');
    }
    // Alternative Way!
    if(num % 2){
        console.log(num, ': is odd number');
    } else{
        console.log(num, ': is enen number');
    }

}


// Writing Function 

function evenfy(num){
    if(num % 2){
        console.log(num, ': is odd number');
    } else{
        console.log(num, ': is enen number');
    }
}

// writing more function

function evenfyAll(arr) {
    for (let i = 0; i < arr.length; i++){
        const arrVal = arr[i];
        evenfy(arrVal)
    }
}

friends_age = [13, 17,19,20,18, 25, 30];
for (let i = 0; i < friends_age.length; i++){
    const age = friends_age[i];
    console.log(age);
}

/// using function 

for (let i = 0; i < friends_age.length; i++){
    const age = friends_age[i];
    evenfy(age)
}

evenfyAll(nums);