// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat (cat){
    cats.push(cat)
}
function destructivelyPrependCat(cat){
    cats.unshift(cat)
}

function destructivelyRemoveLastCat(cat){
    cats.pop()

}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(cat){
   return [...cats, cat]
   //addedcat.push(cat)

}

function prependCat (cat){
    return [cat, ...cats]
}
function removeLastCat(){
    const copyCat = [...cats]
       copyCat.pop()
       return copyCat
}

function removeFirstCat(){
    const anotherC = [...cats]
    anotherC.shift()
    return anotherC
}