const Parallax = (()=>{

    const ConfigParallax = ()=>{
    }

    //=============================================================/
    //CREAMOS EFECTO PARALLAX QUE SIGUE AL CURSOR DEL MOUSE
    //=============================================================/

    const ParallaxCursor = ()=>{
        const getCursorParallax = document.querySelector('#parallax-cursor');
        const getBody = document.querySelector('body');

        getBody.addEventListener('mousemove', (e)=>{
            getCursorParallax.style.left = `${e.clientX}px`;
            getCursorParallax.style.top = `${e.clientY}px`;
        });
    }

    //=============================================================/
    //CREAMOS EFECTO PARALLAX PARA CUANDO SE HAGA HOVER EN IMÁGENES
    //=============================================================/
    const ParallaxHover = ()=>{
        let myPanel = document.querySelector("body");
        let subpanel = document.querySelector("#panel-container");
    
        myPanel.onmousemove = transformPanel;
        myPanel.onmouseenter = handleMouseEnter;
        myPanel.onmouseleave = handleMouseLeave;
    
        let mouseX, mouseY;
    
        let transformAmount = 5;
    
        function transformPanel(mouseEvent) {
            mouseX = mouseEvent.pageX;
            mouseY = mouseEvent.pageY;
    
            const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
            const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;
    
            const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
            const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));
    
            subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
        }
    
        function handleMouseEnter() {
            setTimeout(() => {
                subpanel.style.transition = "";
            }, 100);
            subpanel.style.transition = "transform 0.1s";
        }
    
        function handleMouseLeave() {
            subpanel.style.transition = "transform 0.1s";
            setTimeout(() => {
                subpanel.style.transition = "";
            }, 100);
    
            subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
        }
    }
    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/

    return {
        ParallaxChilds : function(){
            try { ParallaxHover(); } catch (error) {  }
            try { ParallaxCursor(); } catch (error) {  }
        }
    }

})();


const getChildsParallax = ()=>{
    Parallax.ParallaxChilds();
}

export { getChildsParallax }