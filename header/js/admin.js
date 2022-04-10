document.getElementById("display_User").style.display='none';
document.getElementById('detail-id').style.display='none';
document.getElementById('display_Product').style.display='none';
document.getElementById('display_order').style.display='none';
document.getElementById("display_AddProduct").style.display='none';
document.getElementById("display_SuaProduct").style.display='none';
document.getElementById("check_delete-id").style.display='none';
function displayUser()
{
    document.getElementById("display_User").style.display='block';
    document.getElementById("display_AddProduct").style.display='none';
    document.getElementById("display_order").style.display='none';
    document.getElementById('display_Product').style.display='none';

}
// Kiểm tra trạng thái đơn hàng
function TrinhTrangDonHang(x,i)
{
    var arr= JSON.parse(localStorage.getItem("DonHang"));
    if(x.value=="Đang xử lý")
    {
        arr[i][3].TrangThai="Đang xử lý";
    }
    else if(x.value=="Đã giao hàng")
    {
        arr[i][3].TrangThai="Đã giao hàng";
    }
    if(localStorage.getItem("DonHang")!=null)
    {
        localStorage.setItem("DonHang",JSON.stringify(arr));
    }
    displayMyOrder(); 
}
//Hiển thị danh sach đơn hàng đang có
function displayMyOrder()
{    document.getElementById('display_Product').style.display='none';
    document.getElementById("display_User").style.display='none';
    document.getElementById("display_AddProduct").style.display='none';
    document.getElementById("display_order").style.display='block';
    
    var arr=  JSON.parse(localStorage.getItem('DonHang'));

  var s= ""+' <tr class="cart_table-row1">'
                        +'<th class="cart_table-column1">Mã đơn hàng</th>'
                        +'<th class="cart_table-column1">Mã khách hàng</th>'
                        +'<th class="cart_table-column1">Tên khách hàng</th>'
                        +'<th class="cart_table-column1">Ngày đặt</th>'
                       +'<th class="cart_table-column1">Trình Trạng đơn hàng</th>'
                       +'<th class="cart_table-column1">Chi tiết</th>'
                        +'<th class="cart_table-column1">'+"Thay Doi"+'</th>'
                    +'</tr>';
    document.getElementById('wrapper_table-order-id').innerHTML=s;
    for(i=0;i<arr.length;i++)
    {
        s =s + ' <tr class="cart_table-row1">'
        +'<td class="cart_table-column1">'+arr[i][0].MaDon+'</td>'
        +'<td class="cart_table-column1">'+arr[i][1].ID+'</td>'
        +'<td class="cart_table-column1">'+arr[i][1].name+'</td>'
        +'<td class="cart_table-column1">'+arr[i][1].date+'</td>';
        if(arr[i][3].TrangThai=="Đang xử lý")
        {
          s=s +'<td class="cart_table-column1"><select onchange="TrinhTrangDonHang(this,'+i+')"><option value="Đang xử lý">Đang xử lý</option><option value="Đã giao hàng">Đã giao hàng</option></select></td>';

        }
        else
        {
            s=s+'<td class="cart_table-column1"><select onchange="TrinhTrangDonHang(this,'+i+')"><option value="Đang xử lý">Đã giao hàng</option><option value="Đang xử lý">Đang xử lý</option></select></td>';

        }
        s=s+'<td class="cart_table-column1"><a href="#" onclick="displayDetail('+i+')" id="detail-column">detail</a></td>'
        +'<td class="cart_table-column1"><button onclick="Xoa1donhang('+i+')"><i class="fas fa-window-close"></i></button></td>'
        +'</tr>';
        document.getElementById('wrapper_table-order-id').innerHTML=s;
    }
}
// Xoa một đơn hàng có trong giỏ hàng
function Xoa1donhang(k)
{
        var i = Number(k);
        console.log(i);
        var arr=  JSON.parse(localStorage.getItem('DonHang'));
        for(j=i;j<arr.length-1;j++)
        {
            arr[j]=arr[j+1];
        }
        arr.splice(arr.length-1,4);
        localStorage.setItem('DonHang',JSON.stringify(arr));
       displayMyOrder();
}

// Xem chi tiết đơn hàng
function displayDetail(k)
{
     var arr= JSON.parse(localStorage.getItem("DonHang"));
     var  x= document.getElementById('detail-id');
     var s="";
     //Chi tiết đơn hàng
     for(i=0;i<arr.length;i++)
     {
         if(i==k)
         {
            s=s+'-Mã khách hàng: '+arr[k][1].ID+'</br>';
            s=s+'-Tên khách hàng: '+arr[k][1].name+'</br>';
            s=s+'-Số điện thoại: '+arr[k][1].phone+'</br>';
            s=s+'-Địa chỉ nhận hàng: '+arr[k][1].address+'</br>';
            s=s+'-Phương thức thanh toán: '+arr[k][1].method+'</br>';
         }
     }
     document.getElementById("detail-left-id").innerHTML=s;
     s="";
     for(i=0;i<arr.length;i++)
     {
         if(i==k)
         { s=s+"<table>";
         s=s+'<tr><th>Mã sản phẩm</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Giá bán</th></tr>';
            var j=0;
            var sum=0;
             for(j=0;j<arr[k][2].length;j++)
             {
                s=s+'<tr><td>'+arr[k][2][j].productId+'</td>';
                s=s+'<td>'+arr[k][2][j].name+'</td>';
                s=s+'<td>'+arr[k][2][j].SL+'</td>';
                s=s+'<td>'+arr[k][2][j].price+'</td></tr>';
                sum=sum+arr[k][2][j].price*arr[k][2][j].SL;
             }
             s=s+'<tr><td colspan="2"> Tổng tiền:'+sum+'</td></tr>';
             s=s+"</table>";
           break;
         }
     }
     document.getElementById("detail-right-id").innerHTML=s;
     if(x.style.display=='none')
     {
         x.style.display='block';
     }
     else
     {
         x.style.display='none';
     }
    
}
// Đóng xem chi tiết
function closeDetail()
{
    document.getElementById("detail-id").style.display='none';
}
// hiển thị tất cã sản phẩm có trong mảng trong trang admin
function HienThiTatCaSanPham()
{
    document.getElementById("display_User").style.display='none';
document.getElementById('detail-id').style.display='none';
document.getElementById('display_order').style.display='none';
document.getElementById("display_AddProduct").style.display='block';
    document.getElementById('display_Product').style.display='block';
    var arr=  JSON.parse(localStorage.getItem('product2')); 
  var s=""+ ' <tr class="cart_table-row1">'
                        +'<th class="cart_table-column1">ID</th>'
                        +'<th class="cart_table-column1">Tên sản phẩm</th>'
                        +'<th class="cart_table-column1">Brand</th>'
                        +'<th class="cart_table-column1">image</th>'
                        +'<th class="cart_table-column1">Giới tính</th>'
                       +'<th class="cart_table-column1">Giá bán</th>'
                       +'<th class="cart_table-column1">Số lượng còn</th>'
                        +'<th class="cart_table-column1">'+"Xóa"+'</th>'
                        +'<th class="cart_table-column1">'+"Sửa"+'</th>'
                    +'</tr>';
    document.getElementById('display_Product-id').innerHTML=s;
    for(i=0;i<arr.length;i++)
    {
        s =s + ' <tr class="cart_table-row1">'
        +'<td class="cart_table-column1">'+arr[i].productId+'</td>'
        +'<td class="cart_table-column1">'+arr[i].name+'</td>'
        +'<td class="cart_table-column1">'+arr[i].brand+'</td>'
        +'<td class="cart_table-column1">'+arr[i].img+'</td>'
        +'<td class="cart_table-column1">'+arr[i].gender+'</td>'
        +'<td class="cart_table-column1">'+arr[i].price+'</td>'
        +'<td class="cart_table-column1">'+arr[i].soluong+'</td>'
        +'<td class="cart_table-column1"><a href="#'+i+'"><button onclick="display_check('+i+')"><i class="fas fa-window-close"></i></button></a></td>'
        +'<td class="cart_table-column1"><button onclick="displaySuasanpham('+i+')"><i class="fas fa-wrench"></i></button></td>'
        +'</tr>';
        document.getElementById('display_Product-id').innerHTML=s;
    }
}
//  Xóa 1 sản phẩm 
function Xoasanpham(k)
{
    var i = Number(k);
    console.log(i);
    var arr=  JSON.parse(localStorage.getItem('product2'));
    for(j=i;j<arr.length-1;j++)
    {
        arr[j]=arr[j+1];
    }
    arr.splice(arr.length-1,7);
    localStorage.setItem('product2',JSON.stringify(arr));
    document.getElementById("check_delete-id").style.display='none';
   HienThiTatCaSanPham();
}
function display_check(i)
{
    document.getElementById("check_delete-id").style.display='block';
}
// kiểm tra trước khi xóa
function kiemtrxoa(k)
{
    var url = window.location.href;
var id = url.split('#');
     id=parseInt(id[1]);

    if(k==0)
    {
    document.getElementById("check_delete-id").style.display='none';
    }
    else
    {
        Xoasanpham(id);
    }

}
// Hiển thị bảng sửa thông tin sản phẩm
function displaySuasanpham(k)
{
    document.getElementById("display_SuaProduct").style.display='block';
    var arr= JSON.parse(localStorage.getItem("product2"));
    var id1=document.getElementById("sua-id");
    var name1=document.getElementById("sua-name");
    var brand1=document.getElementById("sua-brand");
    var img=document.getElementById("sua-img");
    var gender1=document.getElementById("sua-gioitinh");
    var price1=document.getElementById("sua-price");
    var SL1=document.getElementById("sua-SL");
   // var s = (img.value).split("\\");
    //var img1='../image/img/'+s[2];
    id1.value=arr[k].productId;
    name1.value=arr[k].name;
    brand1.value=arr[k].brand;
    gender1.value=arr[k].gender;
    price1.value=arr[k].price;
    SL1.value=arr[k].soluong;
}
// Sua thông tin sản phẩm
function Suasanpham()
{
    document.getElementById("display_SuaProduct").style.display='block';
    var arr= JSON.parse(localStorage.getItem("product2"));
    var id1=document.getElementById("sua-id");
    var name1=document.getElementById("sua-name");
    var brand1=document.getElementById("sua-brand");
    var img0=document.getElementById("sua-img");
    var gender1=document.getElementById("sua-gioitinh");
    var price1=document.getElementById("sua-price");
    var SL1=document.getElementById("sua-SL");
    var k;
    for(i=0;i<arr.length;i++)
    {
        if(id1.value==arr[i].productId)
        {
            k=i;
            break;
        }
    }
    var img1="";
    if(img0.value=="")
    {
        img1=arr[k].img;
    }
    else
    {
        var s = (img0.value).split("\\");
        img1='../image/img/'+s[2];
    }
    arr[k].productId=id1.value;
     arr[k].name=name1.value;
    arr[k].brand=brand1.value;
    arr[k].img=img1;
    arr[k].gender=gender1.value;
     arr[k].price=price1.value;
    arr[k].soluong=SL1.value;
    localStorage.setItem('product2',JSON.stringify(arr));
    alert("Sửa thành công");
    HienThiTatCaSanPham();
}
function closeSuasanpham()
{

        document.getElementById('display_SuaProduct').style.display='none';
}
function themsanpham()
{
    var arr=  JSON.parse(localStorage.getItem('product2'));
    var id1=document.getElementById("add-id");
    var name1=document.getElementById("add-name");
    var brand1=document.getElementById("add-brand");
    var img=document.getElementById("add-img");
    var gender1=document.getElementById("add-gioitinh");
    var price1=document.getElementById("add-price");
    var SL1=document.getElementById("add-SL");
    var flag=true;
    var s = (img.value).split("\\");
    var img1='../image/img/'+s[2];
    var arrnew=new object(id1.value,brand1.value,img1,name1.value,price1.value,gender1.value,SL1.value);
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].productId==id1.value)
        {
            flag=false;
            alert("Id sản phẩm bị trùng");
            break;
        }
        if(id1.value=="" || brand1.value=="" || img.value=="" || name1.value=="" || price1.value=="" || gender1.value=="" || SL1.value=="")
        {
            alert("Điền thiếu thông tin");
            flag=false;
            break;
        }
        if(arr[i].name==name1.value)
        {
            flag=false;
            alert("Sản phẩm đã có");
            break;
        }
    }
    if(flag==true)
    {
        arr.push(arrnew);
        localStorage.setItem('product2',JSON.stringify(arr));
        alert("Them thanh cong");
        HienThiTatCaSanPham();
    }
    
    
}