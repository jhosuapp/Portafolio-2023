//CSS
import "../sass/main.scss";
//LIBRARY
import { getChildsAos } from './library/LibAos';
//COMPONENTS
import { getChildsNav } from './modules/Nav';

//EJECUTAMOS LAS FUNCIONES CUANDO SE HAYA CARGADO EL NAVEGADOR
window.addEventListener('load', ()=>{
    getChildsAos();
    getChildsNav();
});