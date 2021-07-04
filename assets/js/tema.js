let $ = document.querySelector.bind(document);

$('#mudar').addEventListener('click',(e)=>{
    e.preventDefault();
    let temaAtual = $('#tema').value;


    if(temaAtual === 'Claro'){
        $('body').classList.remove('bg-dark');
        
        // h2
        document.querySelectorAll('h2').forEach(element=>{
            element.classList.remove('text-light');
        })

        // cards
        document.querySelectorAll('.card').forEach(element=>{
            element.classList.remove('bg-dark');
            element.classList.remove('text-light');
        })

        // rodapé
        $('footer').classList.remove('bg-light');
        $('footer').classList.remove('bg-dark');
        document.querySelectorAll('.titulo').forEach(element=>{
            element.classList.remove('text-light')
        })

    }
    
    if(temaAtual === 'Escuro'){
        $('body').classList.add('bg-dark');
        
        // h2
        document.querySelectorAll('h2').forEach(element=>{
            element.classList.add('text-light');
        })

        // cards
        document.querySelectorAll('.card').forEach(element=>{
            element.classList.add('bg-dark');
            element.classList.add('text-light');
        })

        // rodapé
        $('footer').classList.add('bg-light');
        $('footer').classList.add('bg-dark');
        document.querySelectorAll('.titulo').forEach(element=>{
            element.classList.add('text-light')
        })
       
    }

})