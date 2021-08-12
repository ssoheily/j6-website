// get elemant ex: tag  p, h1, div, ....

// let header = document.getElementById("header")

// header.style.color =  'blue'

// let content=document.getElementsByClassName("content")
// content[1].style.fontSize = '25px'
// console.log(content)

// let paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)
// console.log(paragraphs[0].innerText)
// paragraphs[0].innerText="edited : paragraph edited by js"

// let header= document.querySelector("#header")
// header.style.color="red"

// let paragraph= document.querySelector("p")

// paragraph.style.color="yellow"

// let content = document.querySelector(".content")
// content.style.color ="green"

// let paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(paragraph => {
// 	paragraph.style.color = 'red'
// })

// let contents = document.querySelectorAll(".content")
// contents.forEach( content  =>   {
// 	content.style.color =  'green'
// })

let costom_query= document.querySelector("div.content:nth-child(2) > ul:nth-child(2) > li:nth-child(3)")
costom_query.style.color = 'blue'
costom_query.style.fontSize = '20px' 
