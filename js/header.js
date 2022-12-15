// 햄버거 메뉴 버튼
// $(function() {
//     $(".menuToggleBtn").click(function() {
//       $(".gnb").stop().slideToggle("fast");
//     });
// });

function fnMove(seq) {
  var offset = $(".section" + seq).offset();
  $('html, body').animate({
      scrollTop: offset.top
  }, 400);
}