window.onload = function(){
  var angeree = document.querySelectorAll(".sanjiao");
	// console.log(angeree);
  var num_angeree = document.querySelector(".angeree>p").firstChild.nodeValue;
  // console.log(num_angeree);
  angeree[0].onclick = function(){
    num_angeree=parseInt(num_angeree)+1;
    document.querySelector(".angeree>p").firstChild.nodeValue = num_angeree;
    // console.log(num_angeree);
    // console.log(111);
  }
  angeree[1].onclick = function(){
    num_angeree=parseInt(num_angeree)-1;
    document.querySelector(".angeree>p").firstChild.nodeValue = num_angeree;
  }
    var data = document.querySelectorAll(".moreimass li");
    // console.log(data);
    var mydata = new Date();
    console.log(mydata);
    data[0].firstChild.nodeValue = mydata;

    var huifu = document.querySelector(".huifu");
    var one_huifu = document.querySelectorAll(".ans_list .chic .one");
    for (var i = 0; i < one_huifu.length; i++) {
      one_huifu[i].onclick = function(){
        huifu.style.display = "block";
      }
    }
    var shanchu = document.querySelectorAll(".chic .tow");
    for (var i = 0; i < shanchu.length; i++) {
      shanchu[i].onclick = function(){
        huifu.style.display = "none";
      }
    }
    console.log(shanchu);

    function liuyan(whic_huifu){

    }

    console.log(one_huifu);
    var hfcont = document.querySelector(".huifu_cont");
    // console.log(hfcont);
    var fabiao = document.querySelector(".fabiao");
    console.log(fabiao);
    var res_li = document.querySelector(".response>ul");
    // console.log(res_li);
  fabiao.onclick = function(){
    // console.log(hfcont.value);
    var cont = hfcont.value;
    // var node = document.createElement("li");
    var avatar = document.createElement("div");
    avatar.setAttribute("class","avatar");
    var textNode = document.createTextNode(cont);
    var child = document.createElement("li");
    var child_txt = document.createElement("p");
    // node.appendChild(textNode);
    child.appendChild(avatar);
    child_txt.appendChild(textNode);
    child.appendChild(child_txt);
    res_li.appendChild(child);
    var chioc = document.createElement("div");
    var chioc_one = document.createElement("span");
    var chioc_two = document.createElement("span");
    var c_one_text = document.createTextNode("回复");
    // huifu.style.display = "none";
    var c_tow_text = document.createTextNode("删除");

    chioc.setAttribute("class","chic");
    chioc_one.setAttribute("class","one");
    chioc_two.setAttribute("class","tow");
    chioc_one.appendChild(c_one_text);
    chioc_two.appendChild(c_tow_text);
    chioc.appendChild(chioc_one);
    chioc.appendChild(chioc_two);
    child.appendChild(chioc);
    huifu.style.display = "none";
    hfcont.valuent = "";
    console.log(huifu);
    var hf_in = document.querySelectorAll(".response ul li .chic .one");
    for (var i = 0; i < hf_in.length; i++) {
      hf_in[i].onclick = function(){
        huifu.style.display = "block";
      }
    }
  }
  var fabiao_down = document.querySelector(".guestbook .fabiao");
  console.log(fabiao_down);

  fabiao_down.onclick = function(){
    // console.log(111);
    var new_li = document.createElement("li");
    var a_con = document.createElement("div");
    a_con.setAttribute("class","a_con");
    new_li.appendChild(a_con);
    var avatar = document.createElement("div");
    avatar.setAttribute("class","avatar");
    a_con.appendChild(avatar);
    var name = document.createElement("div");
    name.setAttribute("class","name");
    a_con.appendChild(name);
    var name_cont = document.createTextNode("Escape");
    name.appendChild(name_cont);

    var con_word = document.createElement("div");
    con_word.setAttribute("class","con_word");
    a_con.appendChild(con_word);
    var conart = document.createElement("div");
    conart.setAttribute("class","conart");
    con_word.appendChild(conart);
    var a_con_txt = document.querySelector(".guestbook textarea");
    console.log(a_con_txt.value);
    var con_txt = document.createTextNode(a_con_txt.value);
    conart.appendChild(con_txt);
    var chic = document.createElement("p");
    chic.setAttribute("class","chic");
    var one = document.createElement("span");
    one.setAttribute("class","one");
    var two = document.createElement("span");
    two.setAttribute("class","two");
    var one_cont = document.createTextNode("回复");
    var two_cont = document.createTextNode("删除");
    one.appendChild(one_cont);
    two.appendChild(two_cont);
    chic.appendChild(one);

    chic.appendChild(two);
    con_word.appendChild(chic);
    var response = document.createElement("div");
    response.setAttribute("class","response");
    var ul = document.createElement("ul");
    response.appendChild(ul);
    a_con.appendChild(response);
    var ans_list = document.querySelector(".ans_list");
    var huifu = document.createElement("div");
    huifu.setAttribute("class","huifu");
    var huifu_cont = document.createElement("textarea");
    huifu_cont.setAttribute("class","huifu_cont");
    huifu.appendChild(huifu_cont);
    var btn = document.createElement("button");
    btn.setAttribute("class","fabiao");
    huifu.appendChild(btn);
    a_con.appendChild(huifu);
    ans_list.appendChild(new_li);
  }


}
