let arr =[]


for (let i =0; i < 8;i++) { 
    let command = prompt('Komandani kiriting').split(',')

    if (command[0] == 'add') {
        arr.push(command[1])
    }else if(command[0] == 'del'){
        arr.shift(command[1])
    }
    else if(command == 'stop'){
        command = null
    }
}

console.log(arr);

