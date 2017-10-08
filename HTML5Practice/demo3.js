var tv = new Object();

tv.width = "30cm";
tv.height = "25cm";
tv.weight = "20kg";
tv.color = "white";

tv.off = function() {
    document.write("전원off", "<br/>");
}

document.write(tv.width, "<br/>");
document.write(tv.height, "<br/>");
document.write(tv.weight, "<br/>");
document.write(tv.color, "<br/>");

tv.off();

// var id = "ephiker";
// var pw = "abcd";
//
// var user_id = prompt("아이디를 입력해주세요");
// //var user_pw = prompt("비밀번호를 입력해주세요");
//
// if (id == user_id){
//   document.write(id,"님, 반갑습니다!");
// }else{
//   document.write(user_id, "는 등록되어 있지 않습니다.")
// }

// var num = 1;
// var t = "<table border='1'>";
// for(i = 0; i<5; i++){
//   t += "<tr>";
//   for(j = 0; j<5; j++){
//     t += "<td>"+((5*i)+(j+1))+"</td>";
//     num++;
//   }
//   t += "</tr>";
// }
//
// t+="</table>";
//
//
// document.write(t);