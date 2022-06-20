let towD = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
          ] 
let bigHero = {
    charecters: [
            { name: "Hiro", voice: "Ryan Potter" },
            { name: "Baymax", voice: "Scott Adsit" },
            { name: "Go Go Tamago", voice: "Jamie Chung" },
            { name: "Fred", voice: "T.J. Miller" }
    ]
}

// let rows = towD.length;
// for (let i = 0; i < rows; i++){
//     let items = towD[i].length;
//     console.log(i, items);
//     for (let j = 0; j < items; j++){
//         console.log(towD[i][j])
//     }
// }

let chars = bigHero.charecters;
for (let i = 0; i < chars.length; i++){
    for (let item in chars[i]) {
        console.log(item + " : "+ chars[i][item], +", "+chars[i][item]);
    }
//     console.log(chars[i].name+" : "+chars[i].voice)
}


