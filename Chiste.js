

fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019")

.then(res => res.json())
.then(data => {
  let element =document.getElementById("cont")
  element.innerHTML= `
  <p> Estado del cielo: ${data.stateSky.description}</p>
  <p> Temperatura mínima: ${data.temperaturas.min}</p>
  `;
  console.log(data)
 
})


async function tomaChiste() 
{
 let response = await fetch("https://icanhazdadjoke.com/", 
  {
    headers: {
        "Accept": "application/json"
    }})
  let data = await response.json()
  let element =document.getElementById("myData")
  element.innerHTML= `<p> Chiste: ${data.joke}</p>`

  console.log (data.joke);
  
}

// async function tomaChiste2() 
// {
//    let response = await fetch("https://api.chucknorris.io/jokes/random", 
//   {
//     headers: {
//         "Accept": "application/json"
//     }})
//   let data = await response.json()
//   let element =document.getElementById("myData")
//   element.innerHTML= `<p> Chiste: ${data.value}</p>`

//   console.log (data.value);
// }


