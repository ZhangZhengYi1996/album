var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2000,//1秒切换一次
    disableOnInteraction: false,
  },
  speed: 300,
  direction:"horizontal",
  loop:true,
  pagination: {
    el: '.swiper-pagination',
  },
  on:{
    init: function(){
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    }, 
    slideChangeTransitionEnd: function(){ 
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    } 
  }
});    