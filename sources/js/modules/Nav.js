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
    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/
    return{
        NavChilds : function (){
            try { ConfigNav(); } catch (error) { }            
            try { Loader(); } catch (error) { }
        }
    }
})();

const getChildsNav = ()=>{
    Nav.NavChilds();
}

export { getChildsNav }
