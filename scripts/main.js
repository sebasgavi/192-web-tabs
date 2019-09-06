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
}

window.addEventListener('load', handleLoad);