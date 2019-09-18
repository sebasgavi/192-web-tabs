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
        setTimeout(function(){
            modal.classList.add('modal--show');
        }, 100);
    }
    modalBtn.addEventListener('click', handleOpenModal);

    function handleCloseModal(event){
        if(event.target == modal){
            wrapper.classList.remove('wrapper--active');
            document.body.classList.remove('noscroll');
            modal.classList.remove('modal--show');
            setTimeout(function(){
                modal.classList.remove('modal--active');
            }, 100);
        }
    }
    modal.addEventListener('click', handleCloseModal);




    var newElement = document.createElement('div');
    //newElement.style.background = 'black';
    newElement.classList.add('tooltip');
    newElement.innerHTML = '<h3>título</h3><p>el texto</p>';
    document.body.appendChild(newElement);
    

    var popoversArray = document.querySelectorAll('.popover');
    function iteratePopovers(popover){
        function handlePopoverClick(){
            var title = popover.getAttribute('data-title');
            var text = popover.getAttribute('data-text');
            var container = document.createElement('div');
            container.classList.add('popover__container');
            container.innerHTML = `
                <h3>${title}</h3>
                <p>${text}</p>
            `;
            popover.appendChild(container);
        }
        popover.addEventListener('click', handlePopoverClick);
    }
    popoversArray.forEach(iteratePopovers);
}

window.addEventListener('load', handleLoad);