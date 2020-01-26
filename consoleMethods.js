require('isomorphic-fetch');

console.table([{ name : "Tharun", language : "Javascript" },
               { name : "Jeevitha", language : "Ruby" }]);


//If you see the below example we are passing the name as the tablecolumn. So, the table print only with name property.

 console.table([{ name : "Tharun", language : "Javascript" },
               { name : "Jeevitha", language : "Ruby" }], ["name"]);


               function callApi(){
                console.time('API TIMMER')
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                  .then(response => response.json())
                  .then(json => {
                        console.timeEnd('API TIMMER') //prints time taken by the API
                        console.table(json) // prints the response of API
                  })
                }
                callApi()


function test(){
    console.count("test function")
}
test()
test()
test()
test()



console.group("URL Details");
console.log("Request URL: https://dev.to");
console.log("Request Method: GET");
console.log("Status Code: 200")
console.groupEnd("URL Details");
//Second group
console.group("Author Details");
console.log('Author name: Nikhil karkra')
console.groupEnd("Author Details");