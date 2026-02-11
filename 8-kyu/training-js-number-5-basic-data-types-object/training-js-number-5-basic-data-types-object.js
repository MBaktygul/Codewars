function animal(obj){
  const animals = [
    {
      name: 'dog',
      legs: 4,
      color: 'white'
    },
    {
      name: 'cock',
      legs: 2,
      color: 'red'
    },
    {
      name: 'rabbit',
      legs: 4,
      color: 'gray'
    }
  ];
​
  
  return 'This ' + obj.color + ' ' +  obj.name + ' has ' + obj.legs + ' legs.';
}
​
​