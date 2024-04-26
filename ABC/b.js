
var SinhVien = {
    name:"Nguyễn Công Mùa",
    year:2998,
    city:"Los AngeLes",
    intro:function(){
        return "- Tôi tên: " + SinhVien.name +
                                         "<br>- Sinh năm: " + SinhVien.year +
                                         "<br>- Sống tại: " + SinhVien.city;

    }
}
function a(){
document.getElementById("demo1").innerHTML=SinhVien.intro();
}   