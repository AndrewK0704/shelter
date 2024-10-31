const burger=document.querySelector('.burger');
const burgermenu=document.querySelector('.burger-menu');
const burgermenu2=document.querySelector('.burger-menu2');
const body=document.body;
const link1=document.querySelectorAll('.link1');
const line1=document.querySelectorAll('.line1');

/*--------------------------------------------------------*/

burger.addEventListener('click', () => {

    burgermenu.classList.toggle('menu-visible');
    body.classList.toggle('noscroll');
    burger.classList.toggle('burger-active');
    burgermenu2.classList.toggle('menu2-visible');
    line1[0].classList.toggle('line2');
    line1[1].classList.toggle('line2');
    line1[2].classList.toggle('line2');
})

burgermenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger-menu')){
        burgermenu.classList.toggle('menu-visible');
        body.classList.toggle('noscroll');
        burger.classList.toggle('burger-active');
        burgermenu2.classList.toggle('menu2-visible');
    }
})

link1[0].addEventListener('click', () => {

    burgermenu.classList.toggle('menu-visible');
    body.classList.toggle('noscroll');
    burger.classList.toggle('burger-active');
    burgermenu2.classList.toggle('menu2-visible');
})

link1[1].addEventListener('click', () => {

    burgermenu.classList.toggle('menu-visible');
    body.classList.toggle('noscroll');
    burger.classList.toggle('burger-active');
    burgermenu2.classList.toggle('menu2-visible');
})

link1[2].addEventListener('click', () => {

    burgermenu.classList.toggle('menu-visible');
    body.classList.toggle('noscroll');
    burger.classList.toggle('burger-active');
    burgermenu2.classList.toggle('menu2-visible');
})

link1[3].addEventListener('click', () => {

    burgermenu.classList.toggle('menu-visible');
    body.classList.toggle('noscroll');
    burger.classList.toggle('burger-active');
    burgermenu2.classList.toggle('menu2-visible');
})

/*--------------------------------------------------------*/

let data1;
let arr320=[];

async function getData() {
    const res = await fetch('../../assets/pets.json');
    const data = await res.json();
    data1=data;
}
getData();

setTimeout(function(){
    console.log(data1);

    arr320[0]=Math.floor(Math.random() * 8);
    for (let i=1; i<8;){
        arr320[i]=Math.floor(Math.random() * 8);
        let s=1;
        for(let j=0; j<arr320.length-1; j++){
            if (arr320[j]==arr320[i]){
                s=0;
            }
        }
        if(s==1){
            i++;
        }
    }
    arr320[8]=Math.floor(Math.random() * 8);
    for (let i=9; i<16;){
        arr320[i]=Math.floor(Math.random() * 8);
        let s=1;
        for(let j=8; j<arr320.length-1; j++){
            if (arr320[j]==arr320[i]){
                s=0;
            }
        }
        if(s==1){
            i++;
        }
    }
    arr320[16]=Math.floor(Math.random() * 8);
    for (let i=17; i<24;){
        arr320[i]=Math.floor(Math.random() * 8);
        let s=1;
        for(let j=16; j<arr320.length-1; j++){
            if (arr320[j]==arr320[i]){
                s=0;
            }
        }
        if(s==1){
            i++;
        }
    }
    arr320[24]=Math.floor(Math.random() * 8);
    for (let i=25; i<32;){
        arr320[i]=Math.floor(Math.random() * 8);
        let s=1;
        for(let j=24; j<arr320.length-1; j++){
            if (arr320[j]==arr320[i]){
                s=0;
            }
        }
        if(s==1){
            i++;
        }
    }
    arr320[32]=Math.floor(Math.random() * 8);
    for (let i=33; i<40;){
        arr320[i]=Math.floor(Math.random() * 8);
        let s=1;
        for(let j=32; j<arr320.length-1; j++){
            if (arr320[j]==arr320[i]){
                s=0;
            }
        }
        if(s==1){
            i++;
        }
    }
    arr320[40]=Math.floor(Math.random() * 8);
    for (let i=41; i<48;){
        arr320[i]=Math.floor(Math.random() * 8);
        let s=1;
        for(let j=40; j<arr320.length-1; j++){
            if (arr320[j]==arr320[i]){
                s=0;
            }
        }
        if(s==1){
            i++;
        }
    }

    console.log(arr320);    
    
    function start(){
        let index=0;

        function draw() {
            let div1=document.createElement('div');
            div1.classList.add('card');
            document.querySelector('.slider').appendChild(div1);

            let div11=document.createElement('div');
            div11.classList.add('pets-katrine');     
            div11.style.backgroundImage = `url(${data1[arr320[index]].img})`;
            document.querySelectorAll('.card')[document.querySelectorAll('.card').length-1].appendChild(div11);

            let p12=document.createElement('p');
            p12.classList.add('slider-text');
            p12.innerHTML = data1[arr320[index]].name;
            document.querySelectorAll('.card')[document.querySelectorAll('.card').length-1].appendChild(p12);

            let btn13=document.createElement('button');
            btn13.innerHTML='Learn more'
            btn13.classList.add('button-secondary');
            document.querySelectorAll('.card')[document.querySelectorAll('.card').length-1].appendChild(btn13);

            index++;

        }

        if(window.innerWidth>=1280){
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();

            document.querySelector('.button4-box').addEventListener('click', function () {
                
                let currentPage=Number(document.querySelector('.button3-box').innerHTML);  
            
                for (let i=0; i<8; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=currentPage*8;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    document.querySelector('.button3-box').innerHTML=currentPage+1;
                    
                    if(document.querySelector('.button3-box').innerHTML==6){
                        document.querySelector(".button4-box").disabled = true;
                        document.querySelector(".button5-box").disabled = true;
                        document.querySelector(".button4-box").classList.add('button-inactive');
                        document.querySelector(".button5-box").classList.add('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML!=1){
                        document.querySelector(".button1-box").disabled = false;
                        document.querySelector(".button2-box").disabled = false;
                        document.querySelector(".button1-box").classList.add('button-active');
                        document.querySelector(".button2-box").classList.add('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button5-box').addEventListener('click', function () {     

                for (let i=0; i<8; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=40;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    document.querySelector('.button3-box').innerHTML=6;
                    
                    
                    if(document.querySelector('.button3-box').innerHTML==6){
                        document.querySelector(".button4-box").disabled = true;
                        document.querySelector(".button5-box").disabled = true;
                        document.querySelector(".button4-box").classList.add('button-inactive');
                        document.querySelector(".button5-box").classList.add('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML!=1){
                        document.querySelector(".button1-box").disabled = false;
                        document.querySelector(".button2-box").disabled = false;
                        document.querySelector(".button1-box").classList.add('button-active');
                        document.querySelector(".button2-box").classList.add('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button2-box').addEventListener('click', function () {
                
                let currentPage=Number(document.querySelector('.button3-box').innerHTML);  
                
                for (let i=0; i<8; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=(currentPage-2)*8;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    document.querySelector('.button3-box').innerHTML=currentPage-1;
                    
                    if(document.querySelector('.button3-box').innerHTML!=6){
                        document.querySelector(".button4-box").disabled = false;
                        document.querySelector(".button5-box").disabled = false;
                        document.querySelector(".button4-box").classList.remove('button-inactive');
                        document.querySelector(".button5-box").classList.remove('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML==1){
                        document.querySelector(".button1-box").disabled = true;
                        document.querySelector(".button2-box").disabled = true;
                        document.querySelector(".button1-box").classList.remove('button-active');
                        document.querySelector(".button2-box").classList.remove('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button1-box').addEventListener('click', function () {     

                for (let i=0; i<8; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=0;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    document.querySelector('.button3-box').innerHTML=1;
                    
                    if(document.querySelector('.button3-box').innerHTML!=6){
                        document.querySelector(".button4-box").disabled = false;
                        document.querySelector(".button5-box").disabled = false;
                        document.querySelector(".button4-box").classList.remove('button-inactive');
                        document.querySelector(".button5-box").classList.remove('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML==1){
                        document.querySelector(".button1-box").disabled = true;
                        document.querySelector(".button2-box").disabled = true;
                        document.querySelector(".button1-box").classList.remove('button-active');
                        document.querySelector(".button2-box").classList.remove('button-active');
                    }
                },500)    
                            
            });

        }

        if(window.innerWidth>=768 && window.innerWidth<1280){
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();

            document.querySelector('.button4-box').addEventListener('click', function () {
                
                let currentPage=Number(document.querySelector('.button3-box').innerHTML);  
            
                for (let i=0; i<6; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=currentPage*6;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();

                    document.querySelector('.button3-box').innerHTML=currentPage+1;
                    
                    if(document.querySelector('.button3-box').innerHTML==8){
                        document.querySelector(".button4-box").disabled = true;
                        document.querySelector(".button5-box").disabled = true;
                        document.querySelector(".button4-box").classList.add('button-inactive');
                        document.querySelector(".button5-box").classList.add('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML!=1){
                        document.querySelector(".button1-box").disabled = false;
                        document.querySelector(".button2-box").disabled = false;
                        document.querySelector(".button1-box").classList.add('button-active');
                        document.querySelector(".button2-box").classList.add('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button5-box').addEventListener('click', function () {     

                for (let i=0; i<6; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=42;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    
                    document.querySelector('.button3-box').innerHTML=8;
                    
                    if(document.querySelector('.button3-box').innerHTML==8){
                        document.querySelector(".button4-box").disabled = true;
                        document.querySelector(".button5-box").disabled = true;
                        document.querySelector(".button4-box").classList.add('button-inactive');
                        document.querySelector(".button5-box").classList.add('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML!=1){
                        document.querySelector(".button1-box").disabled = false;
                        document.querySelector(".button2-box").disabled = false;
                        document.querySelector(".button1-box").classList.add('button-active');
                        document.querySelector(".button2-box").classList.add('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button2-box').addEventListener('click', function () {
                
                let currentPage=Number(document.querySelector('.button3-box').innerHTML);  
                
                for (let i=0; i<6; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=(currentPage-2)*6;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    
                    document.querySelector('.button3-box').innerHTML=currentPage-1;
                    
                    if(document.querySelector('.button3-box').innerHTML!=8){
                        document.querySelector(".button4-box").disabled = false;
                        document.querySelector(".button5-box").disabled = false;
                        document.querySelector(".button4-box").classList.remove('button-inactive');
                        document.querySelector(".button5-box").classList.remove('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML==1){
                        document.querySelector(".button1-box").disabled = true;
                        document.querySelector(".button2-box").disabled = true;
                        document.querySelector(".button1-box").classList.remove('button-active');
                        document.querySelector(".button2-box").classList.remove('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button1-box').addEventListener('click', function () {     

                for (let i=0; i<6; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=0;

                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    draw();
                    
                    document.querySelector('.button3-box').innerHTML=1;
                    
                    if(document.querySelector('.button3-box').innerHTML!=8){
                        document.querySelector(".button4-box").disabled = false;
                        document.querySelector(".button5-box").disabled = false;
                        document.querySelector(".button4-box").classList.remove('button-inactive');
                        document.querySelector(".button5-box").classList.remove('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML==1){
                        document.querySelector(".button1-box").disabled = true;
                        document.querySelector(".button2-box").disabled = true;
                        document.querySelector(".button1-box").classList.remove('button-active');
                        document.querySelector(".button2-box").classList.remove('button-active');
                    }
                },500)    
                            
            });

        }

        if(window.innerWidth<768){
            draw();
            draw();
            draw();
            
            document.querySelector('.button4-box').addEventListener('click', function () {
                
                let currentPage=Number(document.querySelector('.button3-box').innerHTML);  
            
                for (let i=0; i<3; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=currentPage*3;

                    draw();
                    draw();
                    draw();
                    
                    document.querySelector('.button3-box').innerHTML=currentPage+1;
                    
                    if(document.querySelector('.button3-box').innerHTML==16){
                        document.querySelector(".button4-box").disabled = true;
                        document.querySelector(".button5-box").disabled = true;
                        document.querySelector(".button4-box").classList.add('button-inactive');
                        document.querySelector(".button5-box").classList.add('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML!=1){
                        document.querySelector(".button1-box").disabled = false;
                        document.querySelector(".button2-box").disabled = false;
                        document.querySelector(".button1-box").classList.add('button-active');
                        document.querySelector(".button2-box").classList.add('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button5-box').addEventListener('click', function () {     

                for (let i=0; i<3; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=45;

                    draw();
                    draw();
                    draw();
                                    
                    document.querySelector('.button3-box').innerHTML=16;
                    
                    if(document.querySelector('.button3-box').innerHTML==16){
                        document.querySelector(".button4-box").disabled = true;
                        document.querySelector(".button5-box").disabled = true;
                        document.querySelector(".button4-box").classList.add('button-inactive');
                        document.querySelector(".button5-box").classList.add('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML!=1){
                        document.querySelector(".button1-box").disabled = false;
                        document.querySelector(".button2-box").disabled = false;
                        document.querySelector(".button1-box").classList.add('button-active');
                        document.querySelector(".button2-box").classList.add('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button2-box').addEventListener('click', function () {
                
                let currentPage=Number(document.querySelector('.button3-box').innerHTML);  
                
                for (let i=0; i<3; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=(currentPage-2)*3;

                    draw();
                    draw();
                    draw();
                                    
                    document.querySelector('.button3-box').innerHTML=currentPage-1;
                    
                    if(document.querySelector('.button3-box').innerHTML!=16){
                        document.querySelector(".button4-box").disabled = false;
                        document.querySelector(".button5-box").disabled = false;
                        document.querySelector(".button4-box").classList.remove('button-inactive');
                        document.querySelector(".button5-box").classList.remove('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML==1){
                        document.querySelector(".button1-box").disabled = true;
                        document.querySelector(".button2-box").disabled = true;
                        document.querySelector(".button1-box").classList.remove('button-active');
                        document.querySelector(".button2-box").classList.remove('button-active');
                    }
                },500)    
                            
            });

            document.querySelector('.button1-box').addEventListener('click', function () {     

                for (let i=0; i<3; i++){
                    document.querySelector('.card').remove();
                }

                setTimeout(function(){
                    index=0;

                    draw();
                    draw();
                    draw();
                                    
                    document.querySelector('.button3-box').innerHTML=1;
                    
                    if(document.querySelector('.button3-box').innerHTML!=16){
                        document.querySelector(".button4-box").disabled = false;
                        document.querySelector(".button5-box").disabled = false;
                        document.querySelector(".button4-box").classList.remove('button-inactive');
                        document.querySelector(".button5-box").classList.remove('button-inactive');
                    }
                    if(document.querySelector('.button3-box').innerHTML==1){
                        document.querySelector(".button1-box").disabled = true;
                        document.querySelector(".button2-box").disabled = true;
                        document.querySelector(".button1-box").classList.remove('button-active');
                        document.querySelector(".button2-box").classList.remove('button-active');
                    }
                },500)    
                            
            });

        }
    }

    start();

    window.addEventListener('resize', () => {
        location.reload();
    });

},500);