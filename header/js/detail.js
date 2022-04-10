// hàm này sẽ hiển thị chi tiết sản phầm
function Product_Detail(i)
{
    // chỉ định các thẻ có id như sau sẽ ẩn đi
    document.getElementById("Detail-id").style.display='block';
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("vuong").style.display='none';
    document.getElementById("title_product").style.display='none';
    document.getElementById("span_button").style.display='none';
    var temp = JSON.parse(localStorage.getItem('product2'));
    var y=i;
    for( i=0;i<temp.length;i++)
    {
        if(temp[i].productId==y)
        {
            // Inner các thông tin của 1 sản phẩm khối dùng để xem chi tiết
            document.getElementById('Detail__image-id').innerHTML='<img src="'+temp[i].img+'" >';
            document.getElementById('Detail__content-item-gender-id').innerHTML="Thể loại: "+temp[i].gender;
            document.getElementById('Detail__content-item-name-id').innerHTML="Giày: "+ temp[i].name;
            document.getElementById('Detail__content-item-price-id').innerHTML="Giá: "+ temp[i].price+" Vnd";
            document.getElementById('Detail__content-item-soluongcon-id').innerHTML="Số lượng còn lại: "+ temp[i].soluong;
            document.getElementById('Detail__content-item-add-id').innerHTML='<button onclick="add2('+y+')"> Thêm vào giỏ hàng</button>';//cartjs.js
        }
    }
}
// Hàm tăng số lượng sản phẩm
function TangSL2()
{
    var y =document.getElementById('SoLuongId2').value;
    y = Number(y);
    if(y>=0)
    {
    document.getElementById('SoLuongId2').value=y+1;
    }
}
// Hàm giảm số lượng sản phẩm
function GiamSL2()
{
    var y =document.getElementById('SoLuongId2').value;
    y = Number(y);
    if(y>1)
    {
    document.getElementById('SoLuongId2').value=y-1;
     }
}
// Hiển thị bảng size
function DetailDisplaysize()
{
     var x= document.getElementById("Detail__content-item-displaydetail-id");
    var s="";
    s=s+'<img src="../Bang-size-giay-Nike-6.jpg"> ';
    x.innerHTML=s;
}
// Hiển thị thông tin mô tả
function DetailDisplayinfo()
{
    var x= document.getElementById("Detail__content-item-displaydetail-id");
    var s="";
    s=s+'✔️ Hoàn tiền 100% nếu nhận sản phẩm không giống hình.'
   +' ✔️ Đổi ngay hàng mới nếu nhận hàng bị lỗi, hỏng từ phía nhà sản xuất. Hỗ trợ đổi size nếu các bạn đi không vừa. '
   +' ✔️ FreeShip đổi trả toàn quốc.'
   + ' ✔️  Mọi vấn đề xin liên hệ với số : 0434384384734'
   +'</br>Lưu ý: Liên lạc ngay với chúng tôi ngay sau khi nhận hàng'
   +""
   +'</br>Cảm ơn các bạn đã đến với chúng tôi.';
   x.innerHTML=s;
}