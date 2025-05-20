const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
new_string="";
for(let key in details){
    new_string += key;
    new_string += " ";
    new_string += details[key];
    new_string += " ";
   
}
console.log(new_string)