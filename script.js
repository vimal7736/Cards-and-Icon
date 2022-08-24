const panels = document.querySelectorAll('.panel')
// console.log(panels[0]); 
panels.forEach(panel =>{
    // console.log(panel)
     panel.addEventListener('mouseover',()=>{
        removeActiveClasses()
        panel.classList.add('active')
     })
} )
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active') 
    })
}


array.forEach(element => {
    
});