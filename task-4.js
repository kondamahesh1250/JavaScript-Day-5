var car={
    "Make":"Toyota",
    "Model":"Corolla",
    "Year":"2019",
    "Color":"Blue"
};
for(var model in car){
    console.log(`${model}: "${car[model]}"`)
}
