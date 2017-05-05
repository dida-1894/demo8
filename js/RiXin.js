
window.onload = function () {
	/* body... */
	var login = document.querySelectorAll(".login");
	// console.log(login);
	var sfmodal = document.querySelector(".sfmodal");
	// console.log(sfmodal);
	login[0].onclick = function(){
		sfmodal.style.display = "block";
	}
	var btnClose = document.querySelector(".m_d_tit_close");
	btnClose.onclick = function(){
		sfmodal.style.display = "none";
	}
	var answer = document.querySelectorAll(".num_answer");
	for (var i = 0; i < answer.length; i++) {
		if (answer[i].innerHTML != "0 <br>回答") {
			answer[i].style.backgroundColor = "#2ea7c9";
			// console.log(bgColor);
		}
	}
	var UlNum = document.querySelectorAll(".con_list li");
	var  PageNum = document.querySelectorAll(".page li");
	// console.log(UlNum.length);
	for (var i = 10; i < UlNum.length; i++) {
		UlNum[i].style.display = "none";
	}
	// PageNum[0].style.display = "none";
	PageNum[1].setAttribute("class","clicked");

	function change(num){
		// console.log(num);
			for (var i = 0; i < PageNum.length; i++) {
			PageNum[i].removeAttribute("class","clicked");

		PageNum[num].setAttribute("class","clicked");
	}
		for (var i = num*10-10; i < num*10; i++) {
			UlNum[i].style.display = "block";
			UlNum[i].setAttribute("data-checked","checked");
		}
		for (var i = 0; i < UlNum.length; i++) {
			if (!UlNum[i].dataset.checked) {
				UlNum[i].style.display = "none";
			}else {
				UlNum[i].removeAttribute("data-checked","checked");
			}
		}
	}
// function test(i){
// 	console.log(i);
// }
	for (var i = 1; i < PageNum.length-1; i++) {
		// PageNum[i].setAttribute("data-i",i);
		// console.log(PageNum.length-1);
		// PageNum[i].addEventListener("click",change(i))(i);
		(function(i){
			PageNum[i].addEventListener("click",function(){
				change(i);
			});
		})(i);
	}
var next = PageNum[12];
next.addEventListener("click",function(){
	for (var i = 1; i < PageNum.length-1; i++) {
		if (PageNum[i].className) {
			e = i+1;
			console.log(e);
			(function(e){
				PageNum[e].addEventListener("click",function(){
					change(e);
					console.log(e);
				})
			})(e);
		}
	}
})


}
