
$(document).ready(function () {

    // section5 이미지 갤러리
    $('.listBox li img').click(function(){
        // const src = $(this).attr('src');
        const url = $(this).attr('src');

        $('.modal').addClass('active');
        $('.modal img').attr('src', url);
    });
    $('.btnClose').click(function(){
        $('.modal').removeClass('active');
    });

    // section6 탭박스 
    $('.tab-list li').click(function(){
        const index = $(this).index();

    $('.tab-list li').removeClass('tabActive');
    $(this).addClass('tabActive');

    $('.cont-list li').removeClass('tabActive');
    $('.cont-list li').eq(index).addClass('tabActive');
    
    })
});
