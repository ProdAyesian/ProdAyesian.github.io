console.log("If you see this then it works")

const hours = new Date().getHours() // get the current hour
//const hours = 19
minutes = new Date().getMinutes().toString().padStart(2, '0') // get the current minute

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


const Leftside = document.querySelector(".Leftpage")
const welcome = document.createElement('div'); welcome.id = "Welcome"
let Time = document.querySelector("#welcome")


Leftside.append(welcome)
welcome.append(
    h1 = document.createElement('h1'),
    p = document.createElement('p')
)
/*
This here is some code that displays
the hour and minutes.
Commented out because I dont know how to dynamically
update the time. Sadge 😭😭😭

//sets when it am or pm
if (Time >= 0 || Time < 12)
{
    h1.textContent = hours + ":" + minutes + "am"
}
if (Time >= 12 || Time < 24)
{
    h1.textContent = (hours - 12) + ":" + minutes + "pm"
}
*/

//sets the time of day
if(Time = isMorning)
{
    p.textContent = "Good morning"
    welcome.setAttribute(
        "style",
        "text-shadow: 0px 0px 0px white, 3px 0px 3px rgb(255, 134, 28); border: solid 3px black; background-image: linear-gradient(180deg, rgb(255, 238, 194), rgb(255, 191, 107)); color: transparent;"
    )

}
if(Time = isAfternoon)
{
    p.textContent = "Good afternoon"
    welcome.setAttribute(
        "style",
        "text-shadow: 0px 0px 1px white, 3px 0px 3px rgb(255,0,50); border: solid 3px black; background-image: linear-gradient(180deg, rgb(255,140,0), rgb(120,0,200)); color: transparent;"

    )
}
if(Time = isEvening)
{
    p.textContent = "Good evening"
    welcome.setAttribute(
        "style",
        "text-shadow: 0px 0px 2px white, 3px 0px 3px rgb(255, 0, 149); border: solid 3px black; background-image: linear-gradient(180deg, rgb(38, 48, 118), rgb(59, 0, 99)); color: transparent;"

    )
}

//Secret message
const BannerTitle = document.querySelector(".bannerTitle")

BannerTitle.addEventListener('click', () => {
    localStorage.setItem("It's a secret to everybody.", "Giggity giggity goo")
})

//git can be so annoying bruh. delete this later