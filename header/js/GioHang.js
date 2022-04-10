var url = window.location.href;
var url2 = window.location.href;
var x = url2;
var id = url.split('?');
 if(id[0]==url2)
 {
    id=0; 
 }
 else
 {
     id=parseInt(id[1]);
 }
//document.getElementById('giohang').style.display='none';
// hàm hiển thị xem nhanh sản phẩm
function showgiohang(j)
{
    var i;
    var y=j;
    var arr =JSON.parse(localStorage.getItem('flag'));// Lấy giá trị từ mảng cờ để kiểm tra có đăng nhập hay không
    if(arr[0].value==-1) // Nếu chưa đăng nhập
    {
        alert("Vui lòng đăng nhập tài khoản trước khi mua hàng");
        window.location = "DangNhap.html";// chuyển hướng đến trang đăng nhập

    }
    else{
    var temp = JSON.parse(localStorage.getItem('product2')); // đổ mảng sản phẩm của hệ thống
    for( i=0;i<temp.length;i++)
    {
        if(temp[i].productId==y)
        {
            document.getElementById('giohang__image-id').innerHTML='<img src="'+temp[i].img+'" >';
            document.getElementById('giohang__content-item-gender-id').innerHTML="Thể loại: "+temp[i].gender;
            document.getElementById('giohang__content-item-name-id').innerHTML="Giày: "+ temp[i].name;
            document.getElementById('giohang__content-item-price-id').innerHTML="Giá: "+ temp[i].price+" Vnd";
            document.getElementById('giohang__content-item-soluongcon-id').innerHTML="Số lượng còn lại: "+ temp[i].soluong;
            document.getElementById('giohang__content-item-add-id').innerHTML='<button onclick="add('+y+')"> Thêm vào giỏ hàng</button>';//cartjs.js
        }
    }
    // Mặc định khối này sẽ đóng. nếu click vào thì nó sẽ hiện lên
   var x = document.getElementById('giohang'); // khung xem nhanh 1 sản phẩm
   if(x.style.display=='none')
   {
       x.style.display='block';
   }
   else
   {
       x.style.display='none';
   }
}
}
// Hàm tăng số lượng sản phẩm
function TangSL()
{
    var y =document.getElementById('SoLuongId').value;
    y = Number(y);
    if(y>=0)
    {
    document.getElementById('SoLuongId').value=y+1;
    }
}
// Hàm giảm số lượng sản phẩm
function GiamSL()
{
    var y =document.getElementById('SoLuongId').value;
    y = Number(y);
    if(y>1)
    {
    document.getElementById('SoLuongId').value=y-1;
     }
}
// Đóng khung xem nhanh đi
function closeGioHang()
{
    document.getElementById('giohang').style.display='none';
}


// 