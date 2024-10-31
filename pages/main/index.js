const burger=document.querySelector('.burger');
const burgermenu=document.querySelector('.burger-menu');
const burgermenu2=document.querySelector('.burger-menu2');
const body=document.body;
const link1=document.querySelectorAll('.link1');

/*--------------------------------------------------------*/

burger.addEventListener('click', () => {

    burgermenu.classList.toggle('menu-visible');
    body.classList.toggle('noscroll');
    burger.classList.toggle('burger-active');
    burgermenu2.classList.toggle('menu2-visible');
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

async function getData() {
    const res = await fetch('../../assets/pets.json');
    const data = await res.json();
    data1=data;
}
getData();

setTimeout(function(){
    console.log(data1);

    function start(){
        let index=0;
        let step=270;
        let offset=-1;
        let arr320=[];
        
        function draw() {
            let div1=document.createElement('div');
            div1.classList.add('card');
            div1.style.left=step*offset+'px';
            document.querySelector('.slider').appendChild(div1);

            let div11=document.createElement('div');
            div11.classList.add('pets-katrine');     
            div11.style.backgroundImage = `url(${data1[arr320[index]].img})`;
            document.querySelectorAll('.card')[index].appendChild(div11);

            let p12=document.createElement('p');
            p12.classList.add('slider-text');
            p12.innerHTML = data1[arr320[index]].name;
            document.querySelectorAll('.card')[index].appendChild(p12);

            let btn13=document.createElement('button');
            btn13.innerHTML='Learn more'
            btn13.classList.add('button-secondary');
            document.querySelectorAll('.card')[index].appendChild(btn13);

            offset++;
            index++;

        }

        function drawStart() {
            let div1=document.createElement('div');
            div1.classList.add('card');
            div1.style.left=step*offset+'px';
            document.querySelector('.slider').prepend(div1);

            let div11=document.createElement('div');
            div11.classList.add('pets-katrine');     
            div11.style.backgroundImage = `url(${data1[arr320[index]].img})`;
            document.querySelectorAll('.card')[0].appendChild(div11);

            let p12=document.createElement('p');
            p12.classList.add('slider-text');
            p12.innerHTML = data1[arr320[index]].name;
            document.querySelectorAll('.card')[0].appendChild(p12);

            let btn13=document.createElement('button');
            btn13.innerHTML='Learn more'
            btn13.classList.add('button-secondary');
            document.querySelectorAll('.card')[0].appendChild(btn13);

            offset++;
            index++;
        }

        if(window.innerWidth<768){

            index=0;
            step=270;
            offset=-1;
            arr320=[];

            arr320[0]=Math.floor(Math.random() * 8);
            for (let i=1; i<3;){
                arr320[i]=Math.floor(Math.random() * 8);
                if (arr320[0]!==arr320[1] && arr320[0]!==arr320[2] && arr320[1]!==arr320[2]){
                    i++;
                }
            }
            
            draw();
            draw();
            draw();
            console.log(arr320);
            
            document.querySelector('.button-arrow2').addEventListener('click', function () {
                document.querySelector(".button-arrow2").disabled = true; 
                let cards=document.querySelectorAll('.card');
                let offset2=-1;
                for (let i=0; i<cards.length; i++){
                    cards[i].style.left=offset2*step-step+'px';
                    offset2++;
                }
                arr320[0]=arr320[1];
                arr320[1]=arr320[2];

                for (let i=2; i<3;){
                    arr320[i]=Math.floor(Math.random() * 8);
                    if (arr320[0]!==arr320[1] && arr320[0]!==arr320[2] && arr320[1]!==arr320[2]){
                        i++;
                    }
                }

                setTimeout(function(){
                    cards[0].remove();
                    index=2;
                    offset=1;
                    draw();
                    document.querySelector(".button-arrow2").disabled = false;   
                },500)
                console.log(arr320);
    
            });

            document.querySelector('.button-arrow1').addEventListener('click', function () {
                document.querySelector(".button-arrow1").disabled = true; 
                let cards=document.querySelectorAll('.card');
                let offset2=1;
                for (let i=2; i>-1; i--){
                    cards[i].style.left=offset2*step+step+'px';
                    offset2--;
                }
                arr320[2]=arr320[1];
                arr320[1]=arr320[0];

                for (let i=0; i<1;){
                    arr320[i]=Math.floor(Math.random() * 8);
                    if (arr320[0]!==arr320[1] && arr320[0]!==arr320[2] && arr320[1]!==arr320[2]){
                        i++;
                    }
                }
                setTimeout(function(){
                    cards[cards.length-1].remove();
                    index=0;
                    offset=-1;
                    drawStart();
                    document.querySelector(".button-arrow1").disabled = false;    
                },500)
                console.log(arr320);
                
            });
        
        }


        if(window.innerWidth>=768 && window.innerWidth<1280){

            index=0;
            step=310;
            offset=-2;
            arr320=[];

            arr320[0]=Math.floor(Math.random() * 8);
            for (let i=1; i<6;){
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
            
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            console.log(arr320);
            document.querySelector('.button-arrow2').addEventListener('click', function () {
                document.querySelector(".button-arrow2").disabled = true; 
                let cards=document.querySelectorAll('.card');
                let offset2=-2;
                for (let i=0; i<cards.length; i++){
                    cards[i].style.left=offset2*step-620+'px';
                    offset2++;
                }
                arr320[0]=arr320[2];
                arr320[1]=arr320[3];
                arr320[2]=arr320[4];
                arr320[3]=arr320[5];
                
                for (let i=4; i<6;){
                    arr320[i]=Math.floor(Math.random() * 8);
                    let s=1;
                    for(let j=0; j<4; j++){
                        if (arr320[j]==arr320[i] || arr320[4]==arr320[5]){
                            s=0;
                        }
                    }
                    if(s==1){
                        i++;
                    }
                }

                setTimeout(function(){
                    cards[0].remove();
                    cards[1].remove();
                    index=4;
                    offset=2;
                    draw();
                    draw();
                    document.querySelector(".button-arrow2").disabled = false;   
                },500)
                console.log(arr320);
    
            });

            document.querySelector('.button-arrow1').addEventListener('click', function () {
                document.querySelector(".button-arrow1").disabled = true; 
                let cards=document.querySelectorAll('.card');
                let offset2=3;
                for (let i=5; i>-1; i--){
                    cards[i].style.left=offset2*step+620+'px';
                    offset2--;
                }
                arr320[5]=arr320[3];
                arr320[4]=arr320[2];
                arr320[3]=arr320[1];
                arr320[2]=arr320[0];

                for (let i=0; i<2;){
                    arr320[i]=Math.floor(Math.random() * 8);
                    let s=1;
                    for(let j=2; j<6; j++){
                        if (arr320[j]==arr320[i] || arr320[0]==arr320[1]){
                            s=0;
                        }
                    }
                    if(s==1){
                        i++;
                    }
                }
                setTimeout(function(){
                    cards[cards.length-1].remove();
                    cards[cards.length-2].remove();
                    index=1;
                    offset=-1;
                    drawStart();
                    index=0;
                    offset=-2;                
                    drawStart();
                    
                    document.querySelector(".button-arrow1").disabled = false;    
                },500)
                console.log(arr320);
                
            });
        
        }

        if(window.innerWidth>=1280){

            index=0;
            step=360;
            offset=-3;
            arr320=[];

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
            arr320[8]=arr320[0];
            
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            draw();
            console.log(arr320);
            document.querySelector('.button-arrow2').addEventListener('click', function () {
                document.querySelector(".button-arrow2").disabled = true; 
                let cards=document.querySelectorAll('.card');
                let offset2=-3;
                for (let i=0; i<cards.length; i++){
                    cards[i].style.left=offset2*step-1080+'px';
                    offset2++;
                }
                arr320[0]=arr320[3];
                arr320[1]=arr320[4];
                arr320[2]=arr320[5];
                arr320[3]=arr320[6];
                arr320[4]=arr320[7];
                arr320[5]=arr320[8];
                
                for (let i=6; i<8;){
                    arr320[i]=Math.floor(Math.random() * 8);
                    let s=1;
                    for(let j=0; j<6; j++){
                        if (arr320[j]==arr320[i] || arr320[6]==arr320[7]){
                            s=0;
                        }
                    }
                    if(s==1){
                        i++;
                    }
                }

                arr320[8]=arr320[0];

                setTimeout(function(){
                    cards[0].remove();
                    cards[1].remove();
                    cards[2].remove();
                    index=6;
                    offset=3;
                    draw();
                    draw();
                    draw();
                    document.querySelector(".button-arrow2").disabled = false;   
                },500)
                console.log(arr320);
    
            });

            document.querySelector('.button-arrow1').addEventListener('click', function () {
                document.querySelector(".button-arrow1").disabled = true; 
                let cards=document.querySelectorAll('.card');
                let offset2=5;
                for (let i=8; i>-1; i--){
                    cards[i].style.left=offset2*step+1080+'px';
                    offset2--;
                }
                arr320[8]=arr320[5];
                arr320[7]=arr320[4];
                arr320[6]=arr320[3];
                arr320[5]=arr320[2];
                arr320[4]=arr320[1];
                arr320[3]=arr320[0];


                for (let i=1; i<3;){
                    arr320[i]=Math.floor(Math.random() * 8);
                    let s=1;
                    for(let j=3; j<9; j++){
                        if (arr320[j]==arr320[i] || arr320[1]==arr320[2]){
                            s=0;
                        }
                    }
                    if(s==1){
                        i++;
                    }
                }

                arr320[0]=arr320[8];

                setTimeout(function(){
                    cards[cards.length-1].remove();
                    cards[cards.length-2].remove();
                    cards[cards.length-3].remove();
                    index=2;
                    offset=-1;
                    drawStart();
                    index=1;
                    offset=-2;                
                    drawStart();
                    index=0;
                    offset=-3;                
                    drawStart();
                    
                    document.querySelector(".button-arrow1").disabled = false;    
                },500)
                console.log(arr320);
                
            });
        
        }

        if(window.innerWidth>=768){
            var indexSp=0;
            const popupOverlay = document.getElementById("popup-overlay");
            const popup = document.getElementById("popup");
            const popupImg = document.querySelector(".popup-img");
            const popupName = document.querySelector(".popup-name");

            const cardss = document.getElementsByClassName('card');
            // const cardss = document.querySelectorAll(".card");
            const petKatrine = document.querySelectorAll(".pets-katrine");
            const sliderText = document.querySelectorAll(".slider-text");
                                 
            function hidePopup() {
                popupOverlay.style.display = "none";
                popup.style.display = "none";
                body.classList.toggle('noscroll');
            }
            
            popupOverlay.addEventListener("click", hidePopup);


            for( ; indexSp < cardss.length; indexSp++ ){
                
                cardss[indexSp].addEventListener('click', function(event){                   
                    popupOverlay.style.display = "block";
                    popup.style.display = "flex";
                    popup.style.justifyContent = "space-between";
                    popupImg.style.backgroundImage = petKatrine[Array.from(cardss).indexOf(event.currentTarget)].style.backgroundImage;
                    popupName.innerHTML=sliderText[Array.from(cardss).indexOf(event.currentTarget)].innerHTML;
                    body.classList.toggle('noscroll');
                  
                });
                
            }
            indexSp=0;

        }
        if(window.innerWidth<768){
            var indexSp=0;
            const popupOverlay = document.getElementById("popup-overlay");
            const popup = document.getElementById("popup");
            const popupImg = document.querySelector(".popup-img");
            const popupName = document.querySelector(".popup-name");

            const cardss = document.getElementsByClassName('card');
            // const cardss = document.querySelectorAll(".card");
            const petKatrine = document.querySelectorAll(".pets-katrine");
            const sliderText = document.querySelectorAll(".slider-text");
                                 
            function hidePopup() {
                popupOverlay.style.display = "none";
                popup.style.display = "none";
                body.classList.toggle('noscroll');
            }
            
            popupOverlay.addEventListener("click", hidePopup);


            for( ; indexSp < cardss.length; indexSp++ ){
                
                cardss[indexSp].addEventListener('click', function(event){                   
                    popupOverlay.style.display = "block";
                    popup.style.width = 240+"px";
                    popup.style.height = 341+"px";
                    popup.style.display = "flex";
                    popup.style.alignItems = "center";
                    popupName.innerHTML=sliderText[Array.from(cardss).indexOf(event.currentTarget)].innerHTML;
                    body.classList.toggle('noscroll');
                  
                });
                
            }
            indexSp=0;

        }


    }

    start();

    window.addEventListener('resize', () => {
        location.reload();
    });
    
},500);

/*--------------------------------------------------------*/