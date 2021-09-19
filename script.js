
// function changeColor(params) {
//     document.getElementById("main").style.background = "red";
// }

// let firstEl = Number(document.getElementById("firstEl").innerText);

// if(firstEl === 1) {
//     document.getElementById("firstEl").style.display = "block";
// }

// const variableOne = "variableOne";
// const variableTwo = "variableTwo";

// let numberOne = 10;
// let numberTwo = 20;

// if((numberOne === 10 || numberOne === 15) && numberTwo) {
//     console.log(numberOne);
// } else {
//     console.log("else");
// }

// switch (numberOne) {
//     case 10:
//         console.log(numberOne);
//         break;

//     default:
//         console.log("default");
//         break;
// }


// const ternarY = numberOne === 10 ? console.log(numberOne) : console.log("ternary");

// const name = "Armen", suerName = "Balayan";
// var age = 25;
// let gender = {
//     mail: true,
//     femail: false
// }

const USERS = [
    {
        name: "Armen",
        suerName: "Balayan",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    },
    {
        name: "Armen1",
        suerName: "Balayan1",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    },
    {
        name: "Armen2",
        suerName: "Balayan2",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    },
    {
        name: "Armen3",
        suerName: "Balayan3",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    },
    {
        name: "Armen4",
        suerName: "Balayan4",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    },
    {
        name: "Armen5",
        suerName: "Balayan5",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    },
    {
        name: "Armen6",
        suerName: "Balayan6",
        age: 25,
        gender: "mail",
        avatar: "https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png",
        country: "Vanadzor"
    }
]




for(let i = 0; i < USERS.length; i++) {
    let obj = {
        name: USERS[i].name,
        suerName: USERS[i].suerName
    }
    // console.log(obj, ">>>>For")
}

// let i = 0;
// while( i < USERS.length) {
//     if(i === USERS.length -1) {
//         console.log(USERS[i])
//     }
//     i++;
// }

// do {
//     console.log(i, ">>>Do")
// } while(i < 0) {
//     console.log(i)
//     i++;
// }





// console.log(USERS)






// console.log(USERS,">>>>>USERS<<<<")


const country = ["Armenia", "France", "Egipt", "Ispan"];

for(let i = 0; i < country.length; i++) {
    if(country[i] === "Armenia"){
        // alert(country[i]);
    }
}

for(let name of country) {
    // name === "Armenia" && alert(name);
}

country.map((name, index) => {
    name === "Armenia" && alert(`name: ${name} , index: ${index} `)
})

country.map((name, index) => {
    name === "Armenia" && alert(`name: ${name} , index: ${index} `)
})

country.push("Es")
console.log(country.pop(),"countrycountrycountrycountry")
country.pop();












