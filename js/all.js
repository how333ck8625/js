var body = document.body;


function goRocket(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case 49:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            document.querySelector('.rocket-1').style.right = '2000px';
            break;
        case 50:
            document.querySelector('.rocket-2').style.bottom = '2000px';
            document.querySelector('.rocket-2').style.left = '2000px';
            break;     
        case 51:
            document.querySelector('.rocket-3').style.bottom = '2000px';
            document.querySelector('.rocket-3').style.right = '2000px';
            break;
                             
    }
}





body.addEventListener('keydown',goRocket,false)