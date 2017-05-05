window.onload = function(){
  function addElem(Elem,Name,ParentElem){
    // console.log(ParentElem);
    var some = document.createElement(Elem);
    some.setAttribute("class",Name);
    var ParentElem;
    ParentElem.appendChild(some);
    return some;
  }
  var list_huifu = document.querySelectorAll(".one");
  var huifuBox = document.querySelectorAll(".huifu");
  for (var i = 0; i < list_huifu.length; i++) {
    list_huifu[i].addEventListener("click",function(){
      // console.log(list_huifu);
      // console.log(huifuBox[i-1]);
      huifuBox[i-1].style.display = "block";
      console.log(i);
    })
  }
  var fabiao = document.querySelectorAll("li .fabiao");
  var li="li";
  var w="xiaobo";
  var List_ul = document.querySelector(".response ul");
  // console.log(List_ul);
  for (var i = 0; i < fabiao.length; i++) {
    var answer_li = document.querySelectorAll(".ans_list li");
    fabiao[i].addEventListener("click",function (){
      var HBtextarea = document.querySelector(".huifu textarea");
      var huifuCont = HBtextarea.value;
      console.log(List_ul);
      var child = addElem(li,"",List_ul);
      // console.log(child);
      addElem("div","avatar",child);
      var huifuTxt = document.createTextNode(huifuCont);
      addElem("p","",child).appendChild(huifuTxt);
      var chioce = addElem("p","chic",child);
      var chioceOne = addElem("span","one",chioce);
      var CO_Cont = document.createTextNode("回复");
      chioceOne.appendChild(CO_Cont);
      var list_huifu = document.querySelectorAll(".one");
      // console.log(fabiao);



      for (var e = 0; e < answer_li.length; e++) {
        answer_li[e].setAttribute("data-i",e);
      }
      for (var i = 0; i < list_huifu.length; i++) {
  *      list_huifu[i].onclick =function(){
  *        huifuBox[e].style.display = "block";
        }
      }
  *    huifuBox[e].style.display = "none";
    })
  }





  var fabiaoDown = document.querySelector(".commentOper .fabiao");
  // console.log(fabiaoDown);
  fabiaoDown.addEventListener("click",function(){
    var guestBox = document.querySelector(".guestbook textarea");
    var guestCont = document.createTextNode(guestBox.value);
    var answerUl = document.querySelector(".ans_list");
    var child = addElem("li","",answerUl);
    var a_con = addElem("div","a_con",child);
    addElem("div","avatar",a_con);
    var nameTxt = document.createTextNode("Escape");
    addElem("div","name",a_con).appendChild(nameTxt);
    var con_word = addElem("div","con_word",a_con);
    addElem("div","conart",con_word).appendChild(guestCont);



    var chioce = addElem("p","chic",con_word);
    var chioceOne = addElem("span","one",chioce);
    var CO_Cont = document.createTextNode("回复");
    chioceOne.appendChild(CO_Cont);
    var list_huifu = document.querySelectorAll(".one");
    console.log(fabiao);
    for (var i = 0; i < list_huifu.length; i++) {
      list_huifu[i].onclick =function(){
        huifuBox[i].style.display = "block";
      }
    }




  })
}
