// 화면 크기 바뀔 때 achievement 사진 바꿔주는 함수 imgsrc1 속성값이 width 가 768 px 보다 클 때 적용
// 768 px 보다 작을 때의 이미지는 carousel의 img 태그 imgsrc2 속성값에 원하는 이미지 경로를 넣으면 된다.
function changeimg(){
	if($(window).width() <= 536){
		if($(this).attr("src") != $(this).attr("imgsrc2")){
    		$(this).attr("src", $(this).attr("imgsrc2"));
    		console.log("change to imgsrc2");
		}
	}else {
		if($(this).attr("src") != $(this).attr("imgsrc1")){
    		$(this).attr("src", $(this).attr("imgsrc1"));
    		console.log("change to imgsrc1");
		}
	}
};

$(document).ready(function(){
	$(".achieve-img").each(changeimg);
});
$(window).resize(function(){
	$(".achieve-img").each(changeimg);
});
