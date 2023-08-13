
const whatIDo = [
    {
    title: "What I Do",
    description:  "Web Design By anonymous",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a incidunt provident voluptates iste accusantium doloribus veritatis expedita aut nemo deleniti rem ipsam architecto aliquam, sapiente asperiores quae laboriosam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a incidunt provident voluptates iste accusantium doloribus veritatis expedita aut nemo deleniti rem ipsam architecto aliquam, sapiente asperiores quae laboriosam dolor."
    
  },
]
const scrollingToAboutSection = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
}

const secondSection = document.querySelector(".secondSection");

whatIDo.map(hello => {
    const divContent = document.createElement("div");
    divContent.className = "div-insideJavascript";
    const title = document.createElement("h1");
    title.textContent = hello.title;
    
    const subTitle  =  document.createElement("h4")
    subTitle.textContent = hello.description
    subTitle.className = "";

    const loremSpace = document.createElement("div")
    loremSpace.className = "div2-insideJavascript"
    loremSpace.textContent = hello.lorem
    
   
    
    const divForTitleAndSubtitle = document.createElement("div")
    divForTitleAndSubtitle.className = "divForTAndS"
    divForTitleAndSubtitle.appendChild(title)
    divForTitleAndSubtitle.appendChild(subTitle)

    

    divContent.appendChild(divForTitleAndSubtitle)
    divContent.appendChild(loremSpace)
    secondSection.appendChild(divContent);
   
})