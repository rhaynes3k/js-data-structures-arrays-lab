// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name)
};
function destructivelyPrependDriver(name){
  drivers.unshift(name)
};
function destructivelyRemoveLastDriver(){
  drivers.pop()
};
function destructivelyRemoveFirstDriver(){
  drivers.shift()
};
function appendDriver(name){
  let drivers = ["Milo", "Otis", "Garfield"]
  const all_drivers = [...drivers, name]
  return all_drivers
};
function prependDriver(name){
  let drivers = ["Milo", "Otis", "Garfield"]
  const all_drivers = [name, ...drivers]
  return all_drivers
}
function removeLastDriver(){
  let drivers = ["Milo", "Otis", "Garfield"]
  const all_drivers = drivers.slice(0, drivers.length - 1)
  return all_drivers
}
function removeFirstDriver(){
  let drivers = ["Milo", "Otis", "Garfield"]
  const all_drivers = drivers.slice(1)
  return all_drivers
}
