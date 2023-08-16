
const whatIDo = [
    {
    title: "What I Do",
    subTitle:  "Web Design By anonymous",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a incidunt provident voluptates iste accusantium doloribus veritatis expedita aut nemo deleniti rem ipsam architecto aliquam, sapiente asperiores quae laboriosam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a incidunt provident voluptates iste accusantium doloribus veritatis expedita aut nemo deleniti rem ipsam architecto aliquam, sapiente asperiores quae laboriosam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a incidunt provident voluptates iste accusantium doloribus veritatis expedita aut nemo deleniti rem ipsam architecto aliquam, sapiente asperiores quae laboriosam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a incidunt provident voluptates iste accusantium doloribus veritatis expedita aut nemo deleniti rem ipsam architecto aliquam, sapiente asperiores quae laboriosam dolor.",
    buttonText: "Show more"
  }
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
    subTitle.textContent = hello.subTitle
    subTitle.className = "";

    const loremSpace = document.createElement("div")
    loremSpace.className = "div2-insideJavascript"
    
    
    const divForTitleAndSubtitle = document.createElement("div")
    divForTitleAndSubtitle.className = "divForTAndS"
    divForTitleAndSubtitle.appendChild(title)
    divForTitleAndSubtitle.appendChild(subTitle)

    const clickMe = document.createElement("button")
    clickMe.textContent = hello.buttonText
    clickMe.className = "showMoreButton"

  

    const lorem = document.createElement("p")
    lorem.textContent = hello.lorem;
    const midIndex = Math.ceil(hello.lorem.length / 2);
    const startLorem = hello.lorem.substring(0, midIndex);

    let showDescription = false

    clickMe.addEventListener("click", () => {
        showDescription = !showDescription
        lorem.textContent = showDescription ? hello.lorem : startLorem;
        clickMe.textContent = showDescription ? "show less" : hello.buttonText;
        
    })
    lorem.textContent = startLorem
    clickMe.textContent = hello.buttonText
    divContent.appendChild(divForTitleAndSubtitle)
    loremSpace.appendChild(lorem)
   divContent.appendChild(loremSpace)
   divContent.appendChild(clickMe)
    secondSection.appendChild(divContent);
   
})

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
