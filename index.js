// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name){
    cats.push('Ralph');
    return (cats);
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name){
    cats.pop('Garfield');
    return (cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
    return (cats);
}
function appendCat(name){
    return [...cats, name];  

}
function prependCat(name){
    return [name,...cats];   
}
function removeLastCat(){
    return cats.slice(0, cats.length -1)
}
function removeFirstCat(){
    return cats.slice(1)
}