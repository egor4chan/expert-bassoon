window.addEventListener('scroll', () => {
    if (scrollY > 540) {


        document.getElementById('backgroud').style.opacity = '0';
        //document.getElementById('backgroud').style.zIndex = '0';

        document.getElementById('backgroud2').style.opacity = 0.7;
        //document.getElementById('backgroud2').style.zIndex = 1;
    }
    else {


        document.getElementById('backgroud2').style.opacity = '0';
        //document.getElementById('backgroud2').style.zIndex = '0';

        document.getElementById('backgroud').style.opacity = '1';
        //document.getElementById('backgroud').style.zIndex = '1';
    }
})