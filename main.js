/* header 모바일 상단 toggle button */
//변수 지정
const toggleBtn = document.querySelector('.navbar_toggle_button');
const menu = document.querySelector('.navbar_menu');
const language = document.querySelector('.navbar_language');
const menuBox = document.querySelector('.menu_box');
//토글 버튼 클릭시 일어날 함수
toggleBtn.addEventListener('click', (event) => {
    menuBox.classList.toggle('active');
    menu.classList.toggle('active');
    language.classList.toggle('active');
    event.currentTarget.classList.toggle('active-1');
});

/* header 태블릿 상단 호텔찾기 toggle */
const hotelSearchBtn = document.querySelector('.search_hotel');
const toggleTarget = document.querySelector('.hotel_search_container');
const closeBtn = document.querySelector('.close_button');

$('.search_hotel').click(function(event){
    event.stopPropagation(); //부모태그로의 이벤트 stop
    $('.hotel_search_container').slideToggle();
});
$('.close_button').click(function(){
    $('.hotel_search_container').slideToggle();
})


/* main slide 옆으로 넘어가는 슬라이드*/
//변수 지정
/* let sliderWrapper = document.querySelector('.container'); //최상위 요소 div
let sliderContainer = document.querySelector('#slide'); //ul
let slides = document.querySelectorAll('.main_slide'); //li
let totalSlides = slides.length; //슬라이드 (li) 길이
let slideIndex = 0;
let sliderWidth = sliderWrapper.clientWidth; //container의 width
sliderContainer.style.width = sliderWidth * totalSlides + 'px';
showSlides(); //페이지 열자마자 움직이고 있게 함수 먼저 부르기

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        sliderContainer.style.left = -(sliderWidth * slideIndex) + 'px';
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0; //현재페이지가 마지막이라면, 다시 첫화면으로 되돌리기
    }
    setTimeout(showSlides, 3500);
} */

/* fadeIn fadeOut 사라지고 들어오는 슬라이드*/
$('.container>ul>li').hide();
$('.container>ul>li:first-child').show();

setInterval(function(){
    $('.container>ul>li:first-child').fadeOut(1000)
    .next(500).fadeIn(1000).end(500)
    .appendTo('.container > ul');
},4000);


/* promotion */
var $carousel = $('#promotion_ul');

var settings = {
    dots: false,
    arrows: true,
    prevArrow : $('.prev_button'),
    nextArrow : $('.next_button'),
    slidesToShow: 3,
    centerMode: false,
    padding : '-20px',
    /* autoplay: true, */
    infinite: true,
    /* centerPadding: '-60px', */
    responsive: [
        {
            breakpoint : 768,
            settings:{
                slideToShow:2,
                dots: false,
                arrows: true,
                prevArrow : $('.prev_button'),
                nextArrow : $('.next_button'),
                slidesToShow: 3,
                centerMode: false,
                padding : '-20px',
                
            }
        },
    ]
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slide_box[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});




/* $(function(){
    $('#promotion_ul').slick({
        slide: '#promotion_ul',
        prevArrow : $('.prev_button'),
        nextArrow : $('.next_button'),
        slideToShow:3,
        speed: 600,
        arrows : true,
        dots: true,
        pauseOnHover: true,
        autoplay: true,
        infinite: true,
        draggable : true,
        responsive: [
            {
                breakpoint : 1280,
                settings:{
                    slideToShow:3
                }
            },
        ]
    })
}) */


/* let promoWrapper = document.querySelector('.promotion_container'); //최상위 요소
let slide = document.querySelector('#promotion_ul'); //ul
let slideItem = document.querySelectorAll('.slide_img_box') //li
let maxSlide = slideItem.length; //슬라이드(li) 길이
let currSlideIndex = 0; //현재 슬라이드 위치 (인덱스)
let slideWidth  = promoWrapper.clientWidth; //promotion_container의 width
let paginationItems = document.querySelectorAll('.slide_pagination > li');
const slideItemWidth = 310; // 슬라이드 한 개의 넓이 290px, 마진 20 이동시킬 넓이 : 310px
slide.style.width = slideWidth * maxSlide + 'px'; //전체 슬라이드 컨테이너 넓이 설정
const slideMargin = 20; //슬라이드 사이의 마진 값 20px
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button'); */

//promotionAutoSlides();

/* 자동 슬라이드 */
/* function promotionAutoSlides() {
    for (let i = 0; i < maxSlide; i++) {
        slide.style.transition = '.3s';
        slide.style.left = -(310 * currSlideIndex) + 'px';
    }
    currSlideIndex++;
    if (currSlideIndex === maxSlide) {
        currSlideIndex = 0; //현재페이지가 마지막이라면, 다시 첫화면으로 되돌리기
    }setTimeout(promotionAutoSlides, 3500);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlideIndex-1].classList.add("active");
} */
/* paging button click */
/* $(function () {
    let container = $('#promotion_ul');
    let pagination = $('#promotion_list > li');
    let pageBtn = $('#promotion_list > li > a');
    let nowIndex = 0;
    //페이징버튼 클릭 시 일어날 함수
    pagination.click(function (e) {
        e.preventDefault(); //기본속성 막기
        nowIndex = pagination.index(this); //현재페이지 첫번째
        pagination.eq(nowIndex).parent().addClass('active'); //클릭한 탭의 상위요소에 액티브 추가
        pagination.eq(nowIndex).parent().siblings().removeClass('active');
        pageBtn.eq(nowIndex).parent().addClass('active'); //페이징 버튼
        pageBtn.eq(nowIndex).parent().siblings().removeClass('active');
        container.animate({ left: -310 * nowIndex });
    });
}); */

/* package */
let packageWrapper = document.querySelector('.package_container'); //최상위 요소
let slidePackage = document.querySelector('#package_ul'); //ul 슬라이드 전체 width 구하기
let slideItemPackage = document.querySelectorAll('.slide_img_box_main03') //li
let maxSlidePackage = slideItemPackage.length; //슬라이드 길이
let currSlidePackage = 0; //현재 슬라이드 위치
let slideWidthPackage  = packageWrapper.clientWidth; //promotion_container의 width
let paginationItemsPackage = document.querySelectorAll('#package_list > li');
slidePackage.style.width = slideWidthPackage * maxSlidePackage + 'px';
packageSlides();

function packageSlides() {
    for (let i = 0; i < maxSlidePackage; i++) {
        slidePackage.style.transition = '.3s';
        slidePackage.style.left = -(310 * currSlidePackage) + 'px';
    }
    currSlidePackage++;
    if (currSlidePackage === maxSlidePackage) {
        currSlidePackage = 0; //현재페이지가 마지막이라면, 다시 첫화면으로 되돌리기
    }setTimeout(packageSlides, 3500);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItemsPackage.forEach((i) => i.classList.remove("active"));
    paginationItemsPackage[currSlidePackage-1].classList.add("active");
}
/* paging button click */
$(function () {
    let container = $('#package_ul');
    let pagination = $('#package_list > li');
    let pageBtn = $('#package_list > li > a');
    let nowIndex = 0;
    pagination.click(function (e) {
        e.preventDefault();
        nowIndex = pagination.index(this);
        pagination.eq(nowIndex).parent().addClass('active');
        pagination.eq(nowIndex).parent().siblings().removeClass('active');
        pageBtn.eq(nowIndex).parent().addClass('active');
        pageBtn.eq(nowIndex).parent().siblings().removeClass('active');
        container.animate({ left: -310 * nowIndex });
    });
});

/* tab menu */
//페이지 들어가자마자 첫번째 탭 화면 보이도록 수정하기(지리산으로 나옴)

$(function () {
    let tabList = $('.tabs_nav li');
    let tabAnchor = $('.tabs_nav li a');
    let tabPanel = $('.tabs_panel');
    let tabIndex = 0;

    //링크를 클릭하면 할 일
    tabAnchor.click(function (e) {
        e.preventDefault(); //링크의 기본 속성 막아놓기
        tabIndex = tabList.index(this);
        //내가 클릭한 탭에만 active 부여하기

        tabAnchor.removeClass('active'); //액티브 모두 제거
        $(this).addClass('active'); //클릭이벤트가 발생한 그 요소에만 액티브 추가
        tabPanel.hide();
        //어트리뷰트 불러오기
        //let c = A.attr('href'); c라는 변수에 a링크 가져오기
        let $target = $(this).attr('href');
        //유저가 보고싶은 해당 탭은 target에 저장되어 있다 show로 보여주기
        $($target).show();
    });
});


/* overview slide */

function slideOverview(){
    const slideList = document.querySelector('.overview_list'); //ul
    const slideContents = document.querySelectorAll('.slide_content'); //li
    const slidePrevButton = document.querySelector('.prev_button');
    const slideNextButton = document.querySelector('.next_button');
    const slideLength = slideContents.length; //슬라이드 전체 길이
    const slideWidth = 375;
    const slideSpeed = 300;
    const startNum = 0; 

    //무한 반복 슬라이드
    slideList.style.width = slideWidth * (slideLength + 2) + "px";
    // Copy first and last slide
    let firstChild = slideList.firstElementChild;
    let lastChild = slideList.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);
    // Add copied Slides
    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);

    let curIndex = startNum; //시작 인덱스
    let curSlide = slideContents[curIndex];
    curSlide.classList.add('slide_active');
    //next button event
    slideNextButton.addEventListener('click', function(){
        if(curIndex <= slideLength - 1){
            slideList.style.transition = slideSpeed + "ms";
            slideList.style.transform = "translate3d(-" + (slideWidth)
        }
    })
}
/* over view main slide */
$('.overview_list').slick({
    prevArrow : $('.prev'),
    nextArrow : $('.next'),
});



/* LOCATION drop down menu */
//active 추가 되었을 경우에만 list 보이게 하기
function onClickSelect(e) {
    const isActive = e.currentTarget.className.indexOf("active") !== -1;
    if (isActive) {
      e.currentTarget.className = "select";
    } else {
      e.currentTarget.className = "select active";
    }
  }
  
  document.querySelector(".select").addEventListener("click", onClickSelect);
  
  //클릭한 option을 선택창에 띄우기
  function onClickOption(e) {
    const selectedValue = e.currentTarget.innerHTML;
    document.querySelector(".text").innerHTML = selectedValue; //선택한 옵션으로 html에 표기
  }
  //option list 
  let optionList = document.querySelectorAll(".option");
  for (let i = 0; i < optionList.length; i++) {
    let option = optionList[i];
    option.addEventListener("click", onClickOption);
  }
  
  //드롭메뉴에서 호텔을 클릭하면 맵 하단에 해당 호텔의 주소 정보 보여주기
  $(function () {
    let address = $('.option_list li a');
    let addressPanel = $('.option_address');
    let mapImg = $('.map_box > div');
    address.click(function (e) {
        e.preventDefault(); //링크의 기본 속성 막아놓기
        //내가 클릭한 탭에만 active 부여하기
        address.removeClass('active'); //액티브 모두 제거
        $(this).addClass('active'); //클릭이벤트가 발생한 그 요소에만 액티브 추가
        addressPanel.hide();
        let $target = $(this).attr('href');
        $($target).show();
    });
});

/* kakao map API */
let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
   /*  if(){
    active에 해당하는 지역의 주소를 띄워주기 => 아직 구현 못함
    } */
	center: new kakao.maps.LatLng(37.466390317686354, 127.03279034552385), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};
let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커가 표시될 위치입니다
let markerPosition  = new kakao.maps.LatLng(37.466390317686354, 127.03279034552385);
// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);