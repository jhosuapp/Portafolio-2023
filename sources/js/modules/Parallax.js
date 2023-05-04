const Parallax = (()=>{

    const ConfigParallax = ()=>{
    }

    //=============================================================/
    //CREAMOS EFECTO PARALLAX PARA CUANDO SE HAGA HOVER EN IMÁGENES
    //=============================================================/

    // const ParallaxHover = ()=>{
    //     const getBody = document.querySelector('body');
    //     const getImageWithEfect = document.querySelector('#parallax-hover');

    //     getBody.addEventListener('mousemove', (e)=>{
    //         const positionX = e.clientX;
    //         const positionY = e.clientY;
    //         const getWidthScreen = window.screen.width / 2;
    //         const getHeightScreen = window.screen.height / 2;
    //         let positionXEqual = positionX;
    //         let positionYEqual = positionY;
    //         console.log(positionXEqual + 'XXXXXXXXXXXXXXXXXXXXX')
    //         console.log(positionYEqual + 'YYYYYYYYYYYYYYYYYYYYY')
    //         // rotateX(22.7128deg) rotateY(5.3804deg)
    //         if(positionX > getWidthScreen){
    //             if(positionY > getHeightScreen){
    //                 getImageWithEfect.style.transform =  `perspective(400px) rotateX(-${(positionXEqual / 4000) * 4}deg) rotateY(${(positionYEqual / 500) * 4}deg)`;
    //             }else{
    //                 getImageWithEfect.style.transform =  `perspective(400px) rotateX(${(positionXEqual / 400) * 4}deg) rotateY(${(positionYEqual / 500) * 4}deg)`;
    //             }
    //         }else{
    //             if(positionY > getHeightScreen){
    //                 getImageWithEfect.style.transform =  `perspective(400px) rotateX(${(positionXEqual / 4000) * 4}deg) rotateY(-${(positionYEqual / 500) * 4}deg)`;
    //             }else{
    //                 getImageWithEfect.style.transform =  `perspective(400px) rotateX(${(positionXEqual / 200) * 4}deg) rotateY(-${(positionYEqual / 500) * 4}deg)`;
    //             }
    //         }

    //     });
    // }

    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/

    return {
        ParallaxChilds : function(){
            try { ParallaxHover(); } catch (error) {  }
        }
    }

})();


const getChildsParallax = ()=>{
    Parallax.ParallaxChilds();
}

export { getChildsParallax }