
const mainContainer = document.getElementById('root')

const reactElement = {
    type : "a" ,
    props : {
        href :"https://www.google.com/" ,
        target : "_blank"
    },
    content:'Click me to navigate google page'
}
function customRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement .type)
    // domElement.innerHTML = reactElement.content
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // mainContainer.appendChild(domElement)


     const domElement = document.createElement(reactElement .type)
     domElement.innerHTML = reactElement.content
     for (const prop in reactElement.props) {
        if (prop == 'content') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        
     }
       mainContainer.appendChild(domElement)
}
customRender(reactElement, mainContainer)