const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((t) => {
    t.addEventListener('click', (e) => {
        const acordeon = t.parentElement

       const isOpen =  acordeon.classList.contains('open')

       if(isOpen){
        acordeon.classList.remove('open')
       }else{
        acordeon.classList.add('open')
       }
       
    })
})