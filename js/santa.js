const santa = document.querySelector('.santa');
const modal = document.querySelector('.modal');

santa.addEventListener('click', function(){
    console.log(`
    _\\/_
     /\\
     /\\
    /  \\
    /~~\\o
   /o   \\
  /~~*~~~\\
 o/    o \\
 /~~~~~~~~\\~
/__*_______\\
     ||
   \\====/
    \\__/
    
Tryck "v" för att se vår julhälsning`);
});

document.addEventListener('keypress', function (e) {
    if (e.key === 'v') {
        modal.classList.toggle('modal-hidden');
    }
});
