
function object2(id1,img,name,price,SL,size) {
    this.productId = id1;
    this.img = img;
    this.name = name;
    this.price = price;
    this.SL = SL;
    this.size=size;
}
function Khoitaomang()  // Hàm khởi tạo mảng để lưu các sản phẩm có trong giỏ
{
    if(localStorage.getItem("product_cart")==null)
    {
        var productArray2 = [];
        localStorage.setItem('product_cart',JSON.stringify(productArray2));
    }
}
// Khởi tạo mảng giỏ hàng mặc định
function product_cart_default(){
        var productArray2 = [];
        localStorage.setItem('product_cart',JSON.stringify(productArray2));
} 
// Thêm một sản phẩm vào giỏ hàng 
function add(k)  // dùng cho khi mua ở xem nhanh
{
    var x = document.getElementById('SoLuongId').value; // Số lượng mà khách hàng muốn mua 1 sản phẩm
    x=Number(x);
    var arr= JSON.parse(localStorage.getItem('product_cart'));// Mảng các sản phẩm trong giỏ
    var temp = JSON.parse(localStorage.getItem('product2')); // Mảng các sản phẩm của shop
    var flag=false; // Các biến cờ hiệu
    var flag1=false;
    var pos;
    var size=document.getElementsByClassName("active");// kiểm tra size giày
    var size1=size[0].value;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].productId==k)  // kiểm tra id của sản phẩm 
        {
            flag=true;
            pos=i;                 // Lấy được vị trí của sản phẩm trong mảng sản phẩm
        }
        if(arr[i].size==size1) 
        {
            flag1=true;
        }
    }
    // Kiểm tra các sản phẩm cần thêm có trùng size hay trùng số lượng với các sản phẩm có trong giỏ hàng không
    if((flag==false && flag1==false) || (flag==false || flag1==false)) // Không trùng
    {
        alert("Đã thêm vào giỏ hàng");
    for(i=0;i<temp.length;i++)
    {
        if(temp[i].productId==k) 
        {
            arr.push(new object2(temp[i].productId,temp[i].img,temp[i].name,temp[i].price,x,size1));// Đẩy vào mảng giỏ hàng
            break;
        }
    }
    localStorage.setItem('product_cart',JSON.stringify(arr));// đẩy lên lại localstorage
    }
    else // Nếu trùng thì cập nhật hay cộng thêm về số lượng của sản phẩm trong giỏ
    {
        alert("Đã thêm vào giỏ hàng");
        for(i=0;arr.length;i++)
        {
            if(arr[i].productId==k)
            {
                arr[i].SL=arr[i].SL + Number(x); // cộng thêm số lượng
                arr[i].size=size1;
                break;
            }
        }
        localStorage.setItem('product_cart',JSON.stringify(arr));
    } 
}
function add2(k) // Tương tự add1 nhưng chỉ dùng cho khi thêm vào ở xem chi tiết sản phẩm.
{
    var x = document.getElementById('SoLuongId2').value;
    x=Number(x);
    var arr= JSON.parse(localStorage.getItem('product_cart'));
    var temp = JSON.parse(localStorage.getItem('product2'));
    var flag=false;
    var flag1=false;
    var pos;
    var size=document.getElementsByClassName("active2");
    var size1=size[0].value;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].productId==k)
        {
            flag=true;
            pos=i;
        }
        if(arr[i].size==size1)
        {
            flag1=true;
        }
    }
    if((flag==false && flag1==false) || (flag==false || flag1==false))
    {
        alert("Đã thêm vào giỏ hàng");
    for(i=0;i<temp.length;i++)
    {
        if(temp[i].productId==k)
        {
            arr.push(new object2(temp[i].productId,temp[i].img,temp[i].name,temp[i].price,x,size1));
            break;
        }
    }
    localStorage.setItem('product_cart',JSON.stringify(arr));
    }
    else
    {
        alert("Đã thêm vào giỏ hàng");
        for(i=0;arr.length;i++)
        {
            if(arr[i].productId==k)
            {
                arr[i].SL=arr[i].SL + Number(x);
                break;
            }
        }
        localStorage.setItem('product_cart',JSON.stringify(arr));
    } 
}
// Hiển thị danh sách sản phẩm vừa mua
function displayCart()
{
    var arr=  JSON.parse(localStorage.getItem('product_cart'));

  var s= ' <tr class="cart_table-row">'
                        +'<th class="cart_table-column">STT</th>'
                        +'<th class="cart_table-column">Image</th>'
                        +'<th class="cart_table-column">Tên Sản Phẩm</th>'
                        +'<th class="cart_table-column">Giá</th>'
                        +'<th class="cart_table-column">Size</th>'
                       +'<th class="cart_table-column">Số lượng</th>'
                        +'<th class="cart_table-column">'+"Xóa"+'</th>'
                    +'</tr>';
    document.getElementById('cart_table-id').innerHTML=s;
    for(i=0;i<arr.length;i++)
    {
        s =s + ' <tr class="cart_table-row">'
        +'<td class="cart_table-column">'+(i+1)+'</td>'
        +'<td class="cart_table-column"><img src="'+arr[i].img+'"</td>'
        +'<td class="cart_table-column">'+arr[i].name+'</td>'
        +'<td class="cart_table-column">'+arr[i].price+' Vnd</td>'
        +'<td class="cart_table-column">'+arr[i].size+'</td>'
        +'<td class="cart_table-column">'+arr[i].SL+'</td>'
        +'<td class="cart_table-column"><button onclick=deleteProduct('+i+')><i class="fas fa-window-close"></i></button></td>'
        +'</tr>';
        document.getElementById('cart_table-id').innerHTML=s;
    }
    var Sum = 0;
    for(i=0;i<arr.length;i++) // Vòng lặp để tính tổng tiền cần thanh toán
    { 
      Sum+=arr[i].price*arr[i].SL;
    }
    document.getElementById('money').innerHTML='Tổng Tiền: '+Sum+' Vnd';
}
// Xoa một sản phẩm ở giỏ hàng
function deleteProduct(k)
{
    var i = Number(k);
    console.log(i);
    var arr=  JSON.parse(localStorage.getItem('product_cart'));
    for(j=i;j<arr.length-1;j++)// vòng lặp này sẽ xóa đi sản phẩm
    {
        arr[j]=arr[j+1];
    }
    arr.splice(arr.length-1,6);  // xoá đi sản phẩm dư thừa ( câpj nhật lại số sản phẩm);
    localStorage.setItem('product_cart',JSON.stringify(arr));
   displayCart();// cập nhật lại sản phẩm có trong giỏ.
}
// Giảm số lượng của 1 sản phẩm của trong hệ thống khi mua
function giamsoluong()
{
    var arr= JSON.parse(localStorage.getItem("product2"));
    var temp = JSON.parse(localStorage.getItem("product_cart"));
    var i;
    var j;
    for(i=0;i<temp.length;i++)
    {
        for(j=0;j<arr.length;j++)
        {
            if(temp[i].productId==arr[j].productId)
            {
                arr[j].soluong =arr[j].soluong - temp[i].SL;
            }
        }
    }
    localStorage.setItem("product2",JSON.stringify(arr));

}