let darkSwitch=document.querySelector('.dark-button');
if(darkSwitch.checked){
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

darkSwitch.addEventListener('change',(event)=>{
    document.querySelectorAll('.dark').forEach((item)=>{
        item.classList.toggle('text-light');
        item.classList.toggle('text-dark');
    });
    document.querySelectorAll('.row').forEach((item)=>{
        item.classList.toggle('dark')
    });
   
    document.querySelectorAll('.btn').forEach((button)=>{
        button.classList.toggle('btn-secondary');
        button.classList.toggle('btn-light');
    })
    
    if (darkSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
})
