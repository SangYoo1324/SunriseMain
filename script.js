const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
console.log(menu);

toggleBtn.addEventListener('click', ()=>{
    console.log("클릭됬다");
    menu.classList.toggle('active');
    //menu 클래스리스트에 active란 클래스 임의로 추가, 없으면 삭제
});

// subBar JS
const resources = document.querySelector('.resources');
console.log(resources);
const resources_sub = document.querySelector('li.resources .sub');
console.log(resources_sub);

let subToggle = true;
let subToggle2 = true;
function show_Sub_resources(){
    
if(subToggle){
    console.log("늘어났다");
    resources_sub.style.height= "220px";
    subToggle = false;
   
    
}else{
    console.log("줄어들었다");
    resources_sub.style.height= "0px";
    subToggle= true;
   
}

}

const news = document.querySelector('.news');
console.log(news);
const news_sub = document.querySelector('li.news .sub');
console.log(news_sub);


function show_Sub_news(){
    
    if(subToggle2){
        console.log("늘어났다");
        news_sub.style.height= "220px";
        subToggle2 = false;
        
        
    }else{
        console.log("줄어들었다");
        news_sub.style.height= "0px";
        subToggle2= true;

       
    }
    
    }



resources.addEventListener("click", show_Sub_resources);
news.addEventListener("click", show_Sub_news);


// subBar JS

// Slider JS  
console.log("slide JS다");
let slides = document.querySelector('.side_left .slide_wrapper ul.slides');
let slide = document.querySelectorAll('.slides li');
let title = document.querySelector('.controls .title');
let currentIdx = 0;
let slideCount = slide.length;
let prvBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

console.log(slides);

title.textContent= slide[currentIdx].dataset.value;
//1번 이미지 타이틀 미리 로드

let slideWidth = 776;
let slideMargin = 30;


slides.style.width = (slideWidth+slideMargin)*slideCount+'px';


function moveSlide(num){
    currentIdx = num;
    slides.style.left = -(slideWidth+slideMargin)*currentIdx+'px';
    console.log(slide[currentIdx].dataset.value);
    title.textContent= slide[currentIdx].dataset.value;
    console.log(slides.style.left);
}

nextBtn.addEventListener('click', function(){
    if(currentIdx<slideCount-1)
    {
        currentIdx++;
        moveSlide(currentIdx);
        console.log("넥스트버튼이다"+currentIdx);
    }else{
        moveSlide(0);
    }
    
});

prvBtn.addEventListener('click', function(){
    if(currentIdx>0){
        currentIdx--;
        moveSlide(currentIdx);
        console.log("이전버튼이다"+currentIdx);
    }else{
        moveSlide(slideCount-1);
    }
    
});


console.log("slide JS다");
// Slider JS


//Banner JS

const bannerEl = document.querySelector(".banner");
console.log(bannerEl);
const textArr = ['Share Memorable Memory', 'Welcome EveryBody!', 'Hello, Hellooooooooooo'];
let index = 0;
let currentTxt = textArr[index].split("");
console.log(currentTxt);


function writeTxt(){
    bannerEl.textContent += currentTxt.shift();
    if(currentTxt.length!==0){
        setTimeout(writeTxt,Math.floor(Math.random()*350));
    }else{
        currentTxt = bannerEl.textContent.split("");
        console.log("복구");
        setTimeout(deleteTxt,3000);
    }
    
}

function deleteTxt(){
currentTxt.pop();  // 어레이에서 글자하나 빼옴
bannerEl.textContent= currentTxt.join(""); // 글자하나 빼온 어레이 합쳐서 배너에 등록
if(currentTxt.length !==0){
    setTimeout(deleteTxt, Math.floor(Math.random()*350));
}else{
    index = (index+1)%textArr.length;
    currentTxt= textArr[index].split("");
    writeTxt();
}


}

writeTxt();


//Activities
let Sslides = document.querySelector('.slider-container');
console.log(Sslides);
let Sslide = document.querySelectorAll('.slider-container li');
console.log(Sslide);
ScurrentIndex= 0;
SslideCount= Sslide.length;
SslideWidth = 500;
SslideMargin = 30;

SprevBtn = document.querySelector('#prev2');
SnextBtn = document.querySelector('#next2');
console.log(SprevBtn);

makeClone();

function makeClone(){
for(let i = 0; i<SslideCount; i++){
    let cloneSlide= Sslide[i].cloneNode(true);// slide i 를 자식클래스까지 클론
    cloneSlide.classList.add('clone');// 클론들에 clone 클래스 부여
    Sslides.appendChild(cloneSlide);//뒤에다 추가할때
}

for(let i = SslideCount-1; i>=0; i--){
    let cloneSlide= Sslide[i].cloneNode(true);// slide i 를 자식클래스까지 클론
    cloneSlide.classList.add('clone');// 클론들에 clone 클래스 부여
    Sslides.prepend(cloneSlide);

}
updateWidth();
//초기위치 잡기
setInitialPos();
//animated 추가
setTimeout(function(){
    Sslides.classList.add('animated');
}, 100);

}

function updateWidth(){
    let currentSlides = document.querySelectorAll('.slider-container li');
    let newSlideCount = currentSlides.length;
    let newWidth= (SslideWidth+SslideMargin)*newSlideCount-SslideMargin+'px';
    Sslides.style.width= newWidth;
}

function setInitialPos(){
    let initialTranslateValue = -(SslideWidth + SslideMargin)*SslideCount;
    Sslides.style.transform = `translateX(${initialTranslateValue}px)`;
    // Sslides.style.left = `${initialTranslateValue}px`;

}
//Activities

//next btn
SnextBtn.addEventListener('click', function(){
    SmoveSlide(ScurrentIndex+1);

});
//prev btn
SprevBtn.addEventListener('click', function(){
   SmoveSlide(ScurrentIndex-1);

});

function SmoveSlide(num){
    Sslides.style.left = -num*(SslideWidth+SslideMargin)+'px';
    ScurrentIndex = num;
    console.log(ScurrentIndex, SslideCount);
    if(ScurrentIndex == SslideCount || ScurrentIndex == -SslideCount){
        setTimeout(function(){
            Sslides.classList.remove('animated');
            Sslides.style.left = '0px';
            ScurrentIndex = 0;
        }, 500); //animated 의 transition= 0.5s 의 시간이 지난 후 animated를 빼서 처음으로 이동하도록   
        setTimeout(function(){
            Sslides.classList.add('animated');
        }, 600);  

    }
   
}

// setTimeout(SmoveSlide(ScurrentIndex+1),3000);
