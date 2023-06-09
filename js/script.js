// creating an array with [] and comma separated list of value
const myColors = ["red", "green", "white", "black", "tomato"]
//index of an array starts from 0
const messageList = document.getElementById("colorMessages")
messageList.children[0].textContent += myColors[3]
myColors[4] = "cyan"
messageList.children[1].textContent += myColors[4]

