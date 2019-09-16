function handleLoad() {
    var buttons = document.querySelectorAll('.tabs__btn');
    var items = document.querySelectorAll('.tabs__item');

    var prev = null;
    var prevIndex = null;

    function iterateButtons (btn, index) {
        
        function handleClick(){
            if(prev != null){
                prev.classList.remove('btline--active');                
                items[prevIndex].classList.remove('tabs__item--active');
            }
            btn.classList.add('btline--active');
            items[index].classList.add('tabs__item--active');

            prev = btn;
            prevIndex = index;
        }

        btn.addEventListener('click', handleClick);
    }
    buttons.forEach(iterateButtons);

    // rango para opacidad
    var range = document.querySelector('input');
    var tabs = document.querySelector('.tabs');
    function handleRange () {
        tabs.style.opacity = range.value / 100;
    }
    range.addEventListener('input', handleRange);


    var modalBtn = document.querySelector('button');
    var modal = document.querySelector('.modal');
    var wrapper = document.querySelector('.wrapper');
    function handleOpenModal(){
        wrapper.classList.add('wrapper--active');
        document.body.classList.add('noscroll');
        modal.classList.add('modal--active');
    }
    modalBtn.addEventListener('click', handleOpenModal);

    function handleCloseModal(event){
        if(event.target == modal){
            wrapper.classList.remove('wrapper--active');
            document.body.classList.remove('noscroll');
            modal.classList.remove('modal--active');
        }
    }
    modal.addEventListener('click', handleCloseModal);
}

window.addEventListener('load', handleLoad);