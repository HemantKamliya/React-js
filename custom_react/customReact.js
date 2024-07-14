const mainContainer = document.getElementById('root')

const customRender=function(element,container){
    const newElement=document.createElement(element.type)
    newElement.innerHTML=ReactElement.children;
    newElement.setAttribute('href',element.props.href)
    newElement.setAttribute('target',element.props.target)
    container.appendChild(newElement)
}
const CustomRender = function (element, container) {
    const newElement = document.createElement(element.type)
    newElement.innerHTML = ReactElement.children;

    for (const prop in element.props) {
        if (prop === 'children') continue;
        newElement.setAttribute(prop, element.props[prop])

    }
    container.appendChild(newElement)

}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com/',
        target: '_blank'
    },
    children: 'Click me to open youTube'
}
customRender(ReactElement, mainContainer)