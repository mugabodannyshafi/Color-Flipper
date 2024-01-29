const button = document.querySelector('#button')
const colorCode = document.querySelector('#color')
const container = document.querySelector('.container')
const colors = [
    {
        colorCode: `#0c4a6e`
    },
    {
        colorCode: `#581c87`
    }
    ,
    {
        colorCode: `#881337`
    }
    ,
    {
        colorCode: `#fda4af`
    }
    ,
    {
        colorCode: `#500724`
    }
    ,
    {
        colorCode: `#8b5cf6`
    }
    ,
    {
        colorCode: `#164e63`
    }
    ,
    {
        colorCode: `#166534`
    }
    ,
    {
        colorCode: `#fef08a`
    }
    ,
    {
        colorCode: `#052e16`
    }
]
button.addEventListener('click', () => {
    
    let random = Math.floor(Math.random() * colors.length)

    colorCode.innerText = colors[random].colorCode;
    document.body.style.background = `${colors[random].colorCode}`
})