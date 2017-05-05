window.onload = function(){
  var ChildUl = document.querySelectorAll(".response ul");
  var ChildUlBox = [ChildUl[0],ChildUl[1],ChildUl[2],ChildUl[3]];
  var huifu = document.querySelectorAll(".huifu");
  var huifuNumBox = [huifu[0],huifu[1],huifu[2],huifu[3]];
  var answerUl = document.querySelector(".ans_list")
  var BtnHuifu = document.querySelectorAll(".one");
  var BtnHuifuBox = [BtnHuifu[0],BtnHuifu[1],BtnHuifu[2],BtnHuifu[3]];
  var fabiao = document.querySelectorAll("li .fabiao");
  var fabiaoBox = [fabiao[0],fabiao[1],fabiao[2],fabiao[3]];
  var answerLi = document.querySelectorAll(".ans_list li");
  var answerLiBox=[answerLi[0],answerLi[1],answerLi[2],answerLi[3]];
  // console.log(answerLiBox);
  var ChildHuifu=[];
  // var responseLi = document.querySelectorAll(".response li");
  var fabiaoDown = document.querySelector(".commentOper .fabiao");


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
    var CO_Cont = document.createTextNode("回复");
    var chioce = addElem("p","chic",con_word);
    var one = addElem("span","one",chioce);
    answerLiBox.push(child);
    var num = answerLiBox.length - 1;
    one.appendChild(CO_Cont);
    one.setAttribute("data-i",num);
    BtnHuifuBox.push(one);
    var ListBox = addElem("div","ans_list response",a_con);
    var Ul = addElem("ul","",ListBox);
    ChildUlBox.push(Ul);
    var huifuBox = addElem("div","huifu",a_con);
    huifuBox.setAttribute("data-i",num);
    addElem("textarea","huifu_cont",huifuBox);
    huifuNumBox.push(huifuBox);
    var BtnFabiao = addElem("button","btn fabiao",huifuBox);
    BtnFabiao.setAttribute("data-i",num);
    var BtnFCont = document.createTextNode("发表");
    BtnFabiao.appendChild(BtnFCont);
    fabiaoBox.push(BtnFabiao);
    fabiaoBox[num].addEventListener("click",function(){
      var num = this.dataset.i;
      var ChildLi = LeaveMassage(num);
      ChildUlBox[num].appendChild(ChildLi);
      console.log(ChildUlBox[num]);
      huifuNumBox[num].style.display = "none";
    })
    // console.log(BtnHuifu);
    BtnHuifuBox[num].addEventListener("click",function(){
      var num = this.dataset.i;
      huifuNumBox[num].style.display = "block";
    });
  })

  for (var i = 0; i <BtnHuifu.length; i++) {
    // answerLi[i].setAttribute("data-i",i);
    huifu[i].setAttribute("data-i",i);
    BtnHuifu[i].setAttribute("data-i",i);
    fabiao[i].setAttribute("data-i",i);
    }
    function addElem(Elem,Name,ParentElem){
      // console.log(ParentElem);
      var some = document.createElement(Elem);
      some.setAttribute("class",Name);
      var ParentElem;
      ParentElem.appendChild(some);
      return some;
    }
    // LeaveMassage();
    function LeaveMassage(i){
      var huifuArea = huifuNumBox[i].getElementsByTagName('textarea')[0];
      var child = document.createElement("li");
      child.setAttribute("data-i",i);
      addElem("div","avatar",child);
      var huifuTxt = document.createTextNode(huifuArea.value);
      addElem("p","",child).appendChild(huifuTxt);
      var chioce = addElem("p","chic",child);
      var chioceOne = addElem("span","oneT",chioce);
      var CO_Cont = document.createTextNode("回复");
      chioceOne.appendChild(CO_Cont);
      ChildHuifu.push(chioceOne);
      // console.log(ChildHuifu);
      for (var i = 0; i < ChildHuifu.length; i++) {

        ChildHuifu[i].addEventListener("click",function(){
          var num = this.parentNode.parentNode.dataset.i;
          huifuNumBox[num].style.display = "block";
        })
      }
      return child;
    }
  for (var i = 0; i < BtnHuifuBox.length; i++) {
    BtnHuifuBox[i].addEventListener("click",function displayHuifuBox(){
      // console.log(BtnHuifuBox[4]);
      var num = this.dataset.i;
      huifuNumBox[num].style.display = "block";
    })
    fabiaoBox[i].addEventListener("click",function(){
      var num = this.dataset.i;
      var ChildLi = LeaveMassage(num);
      ChildUl[num].appendChild(ChildLi);
      huifuNumBox[num].style.display = "none";
    })
  }
}
