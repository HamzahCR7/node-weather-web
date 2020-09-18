// const home=document.querySelector('.home')
// const h1=document.querySelector('h1')
// home.addEventListener('click',()=>{
// h1.innerHTML='You are changed by JS'
// 
console.log("Client Side JAvascript");
// async function fetchData(){
//     const response=await fetch('http://puzzle.mead.io/puzzle')
//     // console.log(await response.json());
//     const data= await response.json()
//     console.log(data)
// }
// fetchData()
// async function fetchWeather() {
//     const response = await fetch('http://localhost:3000/weather?address=biharsharif')
//     const data = await response.json()

//     // console.log(data);
//     // console.log("Current Place: "+data.location.name+" "+data.current.temperature+"degree");

//     if(data.error){
//         return console.log("Error in Client Side 404")
//     }
//     console.log(data.forecast);
//     console.log(data.place);
// }
// fetchWeather()

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.getElementById('message-1')
const messageTwo=document.getElementById('message-2')
const messageThree=document.getElementById('message-3')

const messageFour=document.getElementById('message-4')
const messageFive=document.getElementById('message-5')
const lodaing=document.getElementById('loading')
const message6=document.getElementById('message-6')




// messageOne.textContent="Hello"
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    lodaing.textContent="Loading..."
    messageOne.textContent=""
  
    messageTwo.textContent=""
    messageThree.textContent=""
    messageFour.textContent=""
    messageFive.textContent=""
    message6.textContent=""



    async function fetchWeather() {
    const response = await fetch('/weather?address='+location)
    const data = await response.json()

    // console.log(data);
    // console.log("Current Place: "+data.location.name+" "+data.current.temperature+"degree");

    if(data.error){
        lodaing.textContent=""
        return messageOne.textContent=data.error
    }
    // console.log(data.place);
    // console.log(data.forecast);
    lodaing.textContent=""
    messageOne.textContent=data.place
    messageTwo.textContent=data.forecast
    messageThree.textContent=data.percipation
    messageFour.textContent=data.wind
    messageFive.textContent=data.time
    message6.textContent=data.humid+" Humidity"


   
    
    
}

fetchWeather() 
    
})
