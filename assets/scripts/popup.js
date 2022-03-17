function iniciaModal(modalID){
    var modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) =>{
            if(e.target.className == 'fechar' || e.target.id == modalID){
                modal.classList.remove('mostrar');
            }
        });
    }
}

const popupm1 = document.querySelector('#botao1');
const popup1 = document.querySelector('#botao1-1');
popup1.addEventListener('click', () => iniciaModal('modal1'));
popupm1.addEventListener('click', () => iniciaModal('modal1'));

const popupm2 = document.querySelector('#botao2');
const popup2 = document.querySelector('#botao2-2');
popupm2.addEventListener('click', () => iniciaModal('modal2'));
popup2.addEventListener('click', () => iniciaModal('modal2'));

const popupm3 = document.querySelector('#botao3');
const popup3 = document.querySelector('#botao3-3');
popupm3.addEventListener('click', () => iniciaModal('modal3'));
popup3.addEventListener('click', () => iniciaModal('modal3'));

const popupm4 = document.querySelector('#botao4');
const popup4 = document.querySelector('#botao4-4');
popupm4.addEventListener('click', () => iniciaModal('modal4'));
popup4.addEventListener('click', () => iniciaModal('modal4'));

const popupm5 = document.querySelector('#botao5');
const popup5 = document.querySelector('#botao5-5');
popupm5.addEventListener('click', () => iniciaModal('modal5'));
popup5.addEventListener('click', () => iniciaModal('modal5'));

const popupm6 = document.querySelector('#botao6');
const popup6 = document.querySelector('#botao6-6');
popupm6.addEventListener('click', () => iniciaModal('modal6'));
popup6.addEventListener('click', () => iniciaModal('modal6'));

const popupm7 = document.querySelector('#botao7');
const popup7 = document.querySelector('#botao7-7');
popupm7.addEventListener('click', () => iniciaModal('modal7'));
popup7.addEventListener('click', () => iniciaModal('modal7'));
