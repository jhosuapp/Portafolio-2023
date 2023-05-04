const Nav = (()=>{

    const  ConfigNav = ()=>{
    }
    //=============================/
    //LOADER GENERAL DE LA PÁGINA
    //=============================/
    const Loader = ()=>{
       const getLoader = document.querySelector('.loader');
       setTimeout(()=>{
        getLoader && getLoader.classList.add('active');
       },1500);
    }
    //=============================/
    //CONFIG PARA EL MENU PRINCIPAL
    //=============================/
    const Menu = ()=>{
        const getBtnOpenMenu = document.querySelector('#menu-open');
        const getCtnMenu = document.querySelector('#menu-ctn');
        const getBody = document.querySelector('body');

        getBtnOpenMenu.addEventListener('click', ()=>{
            getCtnMenu.classList.toggle('animation-tx');
            getCtnMenu.classList.toggle('active');
            getBtnOpenMenu.classList.toggle('active');
            getBody.classList.toggle('open-menu');
        });
    }
    const ScrollNav = ()=>{
        const getHeader = document.querySelector('header');
        let lastScrollPosition = 0;

        window.addEventListener('scroll', ()=>{

            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition > lastScrollPosition) {
                getHeader.classList.add('scrollingDown');
            } else {
                getHeader.classList.remove('scrollingDown');
            }
            lastScrollPosition = currentScrollPosition;

            if(window.scrollY > 0){
                getHeader.classList.add('scrolling');
            }else{
                getHeader.classList.remove('scrolling');
            }
        });

    }
    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/
    return{
        NavChilds : function (){
            try { ConfigNav(); } catch (error) { }            
            try { Loader(); } catch (error) { }
            try { Menu(); } catch (error) { }
            try { ScrollNav(); } catch (error) { }
        }
    }
})();

const getChildsNav = ()=>{
    Nav.NavChilds();
}

export { getChildsNav }
