//1. Create a request variable
var request = new XMLHttpRequest ();
//2. create a connection
request.open('GET','https://restcountries.eu/rest/v2/all', true);
//3. Send the connection
request.send();
//4. Register a event listner. Once a data is ready load the data.
request.onload = function (){
    var data = JSON.parse(this.response);
    console.log(data);
    for (i=0;i<data.length;i++)
    {
        console.log(data[i].currencies.code.USD);
    }
 }