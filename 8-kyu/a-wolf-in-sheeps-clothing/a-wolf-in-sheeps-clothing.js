function warnTheSheep(queue) {
  let wolf = queue.indexOf('wolf') ;
  let closeToMe = wolf === queue.length-1;
  let sheep = queue.length - wolf - 1;
​
  if(closeToMe) {
    return "Pls go away and stop eating my sheep"
  } else {
     return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
  }
}
​
console.log(warnTheSheep([ "sheep", "sheep", "sheep", "wolf", "sheep"]));