//  var httpRequest = new XMLHttpRequest();
// httpRequest.open('Get','https://jsonplaceholder.typicode.com/comments');
//  httpRequest.send();
//  var data=[];


//  httpRequest.addEventListener('readystatechange',function(){
//  if(httpRequest.readyState==4)
// {
//     data = JSON.parse(httpRequest.response)
//     console.log(data);
//  }
   
//  })
// async function getPasta()
//  {
//     var response = await fetch('https://jsonplaceholder.typicode.com/comments');
//     var recipts = await response.json();
//      console.log('pastaaa',recipts);
//  }
//  function finish()
//  {
//     console.log('finish');
//  }
//  async function getAllRecipts()
//  {
//     await getPasta();
//     finish();
//  }
//  getAllRecipts()

// function sayHello(name='user', age='25', salary='5000')
// {
//      console.log(`hello ${name} your age ${age} your salary${salary}`);
// }
// sayHello('marwa','25','10000')

var httpRequest= new XMLHttpRequest();
httpRequest.open("Get",'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();
var data=[];
httpRequest.addEventListener("readystatechange",function(){
    if(httpRequest.readyState==4)
    {
       data=JSON.parse(httpRequest.response);
       display()
    }
})
function display()
{
    var cols=``;
    for(var i=0;i<data.length;i++)
    {
       cols+=`
               <div class="col-md-3">
                  <div>
                  <h3>${data[i].name}</h3>
                  <h4>${data[i].email}</h4>
                  <p>${data[i].body}</p>
                  </div>
               </div>
             `
    }
    document.getElementById('contRow').innerHTML=cols
}