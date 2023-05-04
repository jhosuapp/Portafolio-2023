//CSS
import "../sass/main.scss";
//LIBRARY
import { getChildsAos } from './library/LibAos';
//MODULES
import { getChildsNav } from './modules/Nav';
import { getChildScrollSmoth } from "./modules/ScrollSmoth";
import { getChildsParallax } from "./modules/Parallax";

//EJECUTAMOS LAS FUNCIONES CUANDO SE HAYA CARGADO EL NAVEGADOR
window.addEventListener('load', ()=>{
    getChildsAos();
    getChildsNav();
    getChildScrollSmoth();
    getChildsParallax();
});