// tạo ra mảng để quản lý đơn hàng
function create()
{
    if(localStorage.getItem('DonHang')===null)
    {
    var arr = [];
    localStorage.setItem('DonHang',JSON.stringify(arr));
    }
}
// Thêm một đơn hàng vào mảng
function ThemDonHang()
{
    // Lấy giá trị tại các ô thẻ input với các địa chỉ
    alert("Da Dat hang");
    var name1=document.getElementById("name-TT").value;
    var phone1 = document.getElementById("phone-TT").value;
    var address1 = document.getElementById("address-TT").value;
    var date1= document.getElementById("day-TT").value;
    var method1=document.getElementById("select-TT").value;  // giá trị của thương thức thanh toán
    var user= JSON.parse(localStorage.getItem("user"));  // tên người dùng
    var arr=JSON.parse(localStorage.getItem("DonHang")); // Đổ mảng quản lý đơn hàng xuống mảng arr
    var id;
    var madon=0;
    for(i=1;i<user.length;i++)
    {
        if(user[i].fullname==name1)  // duyệt mảng user để kiểm tra tên 
        {
            id=user[i].id;   // lấy được id để lưu thông tin vào trong mảng quản lý đơn hàng
            break;
        }
    }
    var le=arr.length;
        if(arr.length==0)  // Nêu chỉ có tài khoản admin
        {
            madon=10001;  // Đặng mã đơn
        }
        else // Tồn tại thêm 1 user khác
        {
            madon=arr[le-1][0].MaDon + 1;
        }
    var giohang = JSON.parse(localStorage.getItem("product_cart"));
    // Đẩy một đơn hàng vào mảng đơn hàng
    var a = [{MaDon:madon},{ID:id,name:name1,phone:phone1,address:address1,method:method1,date:date1},giohang,{TrangThai:"Đang xử lý"}];
    console.log(a);
    arr.push(a);
    localStorage.setItem("DonHang",JSON.stringify(arr));// đẩy mảng lên lại localstorage
    window.location="index.html?1";
    giamsoluong(); // giảm số lượng sản phẩm trong mảng .. cartjs.js
    product_cart_default(); // khởi tạo lại mảng giỏ hàng   cart.js     
}