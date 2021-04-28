// Print the total population of countries using reduce function//

//1. Create a request variable
var request = new XMLHttpRequest ();
//2. create a connection
request.open('GET','https://restcountries.eu/rest/v2/all', true);
//3. Send the connection
request.send();
//4. Register a event listner. Once a data is ready load the data.
request.onload = function (){
    var data = JSON.parse(this.response);
   let b = data.reduce((acc,x) =>{
       return acc+ x.population;
   },0)
console.log(b)
    
}