// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push (name)
};

function  destructivelyPrependCat(name){
    cats.unshift(name)
};

function destructivelyRemoveLastCat(){
    cats.pop()
};

function destructivelyRemoveFirstCat(){
    cats.shift()
};

function appendCat(name){
    const name_1 = [...cats, name];
    return name_1
};

function prependCat(name){
    const name_2 = [name,...cats];
    return name_2
};

function removeLastCat(){
    const name_3 = cats.slice(0,cats.length-1)
    return name_3
};

function removeFirstCat(){
    const name_4 = cats.slice(1)
    return name_4
};