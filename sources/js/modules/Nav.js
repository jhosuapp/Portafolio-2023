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
        getBtnOpenMenu.addEventListener('click', ()=>{
            getCtnMenu.classList.toggle('animation-tx');
            getCtnMenu.classList.toggle('active');
            getBtnOpenMenu.classList.toggle('active');
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
        }
    }
})();

const getChildsNav = ()=>{
    Nav.NavChilds();
}

export { getChildsNav }
