const btndropdown = document.getElementById('toggleon');




function toggleMenuon(){
        const dropdownmenu = document.getElementById('botao__dropdown--main');
        dropdownmenu.classList.add('active');
}

btndropdown.addEventListener('touchstart', toggleMenuon);

