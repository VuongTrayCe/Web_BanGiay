// Bắt địa chỉ url 
var url = window.location.href;
var url2 = window.location.href;
var x = url2;
var id = url.split('?');// căts chuỗi url
 if(id[0]==url2)// nếu id[0] bằng với url ban đầu
 {
    id=0; 
 }
 else // cắt thành công
 {
     id=parseInt(id[1]);// lấy chỉ số sau ?
 }
 // biến cờ để xác định tài khoản đăng nhập
function flag(){
    if(localStorage.getItem('flag')==null)
    {
        var arrflag = [{value:-1}];           // value=-1 có nghĩa là chưa đăng nhập
        localStorage.setItem('flag',JSON.stringify(arrflag));
    }
}
function addvallue(k)
{
    var temp = JSON.parse(localStorage.getItem('flag'));
                localStorage.setItem('product_cart',JSON.stringify(arr));
} 
// kiểm tra đăng nhập 
function getLogin() {
    var userArray = JSON.parse(localStorage.getItem('user'));  // đổ mảng khách hàng đã đăng ký xuống
    var username1 = document.getElementById('username-login-id').value; // lấy giá trị tại ô user khi đăng nhập
    var password1 =document.getElementById('password-login-id').value;  // Lấy giá trị tại ô password khi đăng nhập
    var flag=false; // dùng để kiểm tra đăng nhập thành công hay thất bại
    var temp;
    for (i = 0; i < userArray.length; i++) { // duyệt mảng user
        if (userArray[i].username == username1 && userArray[i].password == password1 && i == 0) { // Đăng nhập bằng tài khoản admin
            window.location = "Admin.html";  // chuyển hướng trang Admin
            flag=true;
            break;
        }
        else if (userArray[i].username == username1 && userArray[i].password == password1 && i != 0) { // Đăng nhập đúng bằng tài khoản khách hàng
            window.location = 'index.html?1';
            // Khi đăng nhập thành công thì giá trị của value trong biến mảng flag là khác -1
            var temp = JSON.parse(localStorage.getItem('flag')); 
            temp[0].value=i; 
            localStorage.setItem('flag',JSON.stringify(temp)); //thứ tự của khách hàng trong mảng user đang đăng nhập được lưu vào biến value của flag
            flag=true;
            temp=i;
            break;
            
        }
    }
    if(flag==true)
    {
        alert("Đăng nhập thành công");
    }
    else{
        alert("Đăng nhập thất bại");
    }    
}
// Hiển thị tài khoản ở góc trên cùng
function DisplayAccount()
{
    var temp = JSON.parse(localStorage.getItem('flag'));
    var userArray = JSON.parse(localStorage.getItem('user'));
    if(id==0)  // chỉ số của url sau ? . Nếu bằng 0 thì chưa đăng nhập
    {
        document.getElementById("DangNhap").innerHTML='<a href="DangNhap.html">Đăng nhập</a>';
        document.getElementById("DangKy").innerHTML='<a href="DangKy.html">Đăng ký</a>';
        product_cart_default();
    }
    else // nêu khác không
    {
        if(temp[0].value!=-1 && id==1) // giá trị cảu value !=-1( đẵ đăng nhập) và chỉ số sau ? là 1 -> Đã đăng nhập thành công
        {
            document.getElementById("DangNhap").innerHTML='<a>'+userArray[temp[0].value].username+'<span> </span><i class="fas fa-user"></i>'+'</a>';
            document.getElementById("DangKy").innerHTML='<a onclick="KiemTraDangSuat()">Đăng Xuất</a>';
        }
        else // chưa đăng nhập
        {
            document.getElementById("DangNhap").innerHTML='<a href="DangNhap.html">Đăng nhập</a>';
            document.getElementById("DangKy").innerHTML='<a href="DangKy.html">Đăng ký</a>';
            console.log(1);
        }
    }
   
}
// Kiểm tra đăng suất tài khoản
function KiemTraDangSuat()
{
    var temp= JSON.parse(localStorage.getItem("flag"));
    temp[0].value=-1;
    localStorage.setItem('flag',JSON.stringify(temp));
    window.location = 'index.html?0';


}