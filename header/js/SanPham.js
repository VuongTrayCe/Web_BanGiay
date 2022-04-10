// hiển thị sản phẩm theo phân loại
function displayProduct(j)
{
    document.getElementById("title_product").style.display='block';
    var temp=JSON.parse(localStorage.getItem('product2'));
    var k=Number(j);
    var i;
    var count=0;
    var title="";
       switch(k)
       {
           case 1:
               var s="";
               for(i=0;i<temp.length;i++)
               {
                   if(temp[i].gender=='Nam' && count<6)  // nếu thể loại là Nam
                   {
                       count++;
                       s=s+inner(i);
                       document.getElementById("vuong").innerHTML=s;
                   }
               }
               title=title+'<a><i class="fas fa-check-circle"></i> Sản phẩm -> Giày Nam </a>';
               document.getElementById("title_product").innerHTML=title;
               break;
            case 2:
               var s="";
               for(i=0;i<temp.length;i++)
               {
                   if(temp[i].gender=='Nữ' && count<6) // nếu thể loại là Nữ
                   {
                       count++;
                       s=s+inner(i);
                       document.getElementById("vuong").innerHTML=s;
                   }
               }
               title=title+'<a><i class="fas fa-check-circle"></i> Sản phẩm -> Giày Nữ </a>';
               document.getElementById("title_product").innerHTML=title;
                break;
            case 3:
                var s="";
               for(i=0;i<temp.length;i++)
               {
                   if(temp[i].gender=='kid' && count<6) // nếu thể loại là kid
                   {
                       count++;
                       s=s+inner(i);
                       document.getElementById("vuong").innerHTML=s;
                   }
               }
               title=title+'<a><i class="fas fa-check-circle"></i> Sản phẩm -> Giày kid </a>';
               document.getElementById("title_product").innerHTML=title;
                break;
       }
}
// Lọc ra danh sách sản phẩm thõa mãn điều kiện
function ListProduct(str)
{
    var temp = JSON.parse(localStorage.getItem('product2'));
    var arr = [];
    var j=0;
           for(i=0;i<temp.length;i++)
           {
               if(temp[i].gender==str)
               {
                  arr[j]=temp[i];
                  j++;
               }
           }
    return arr;
}
// tạo mảng các nút để phân trang sản phẩm
function indexButton(str)
{ // str là thể loại : Nam, Nữ, kid
   var arr = ListProduct(str);  // Lấy các sản phẩm thõa mãn theo thể loại
            var arr_button=[];
               for(i=0;i<arr.length/6;i++)
               {
                  arr_button[i]=i+1;
               }

    return arr_button; // trả về mảng nút phân trang
}
// hiển thị các nút phân trang
function display_button(k,str)
{   
    var s="";
    var arr_button1= indexButton(str);
               for(i=0;i<arr_button1.length;i++)
               {
                   s=s+'<button id="span_button-index'+(i+1)+'" onclick=display_Product_Next('+(i+1)+','+k+',"'+str+'",'+arr_button1.length+')>'+(i+1)+'</button>';
                   document.getElementById('span_button').innerHTML=s;
               }     
}
// Hiển thị sản phẩm ở các nút phân trang tiếp theo
function display_Product_Next(j,k,str,n)
{
    // j là chỉ số nút trang đang chọn, str là thể loại, n là số lượng nút
    var i;
    for(i=0;i<n;i++)
    {
        document.getElementById('span_button-index'+(i+1)+'').style.backgroundColor='white'; // chỉ định tất cã các nút về trắng
    }
    document.getElementById('span_button-index'+j+'').style.backgroundColor='red'; // chỉ định nút đang chọn thành đỏ
    var arr = ListProduct(str); // trả về mảng sản phẩm lọc được 
    console.log(j);
    var x = j*6;
    var s="";
    for(i=x-6;i<x && i<arr.length;i++)
    {
        s=s+inner2(i,arr);
        document.getElementById('vuong').innerHTML=s;
    }
}
// trả về thẻ html của một sản phẩm 
function inner2(j,arr1)
{
    // j là thứ tự sản phẩm trong mảng hệ thống.
   var arr=arr1;   
   var i=j;
            var  s='<div class="content__item" ><div class="content__image"> <img src="'+arr[i].img+'"><div class="content__button"><button id="content__button-id1" onclick="showgiohang('+arr[i].productId+')" ><abbr title="Thêm vào giỏ"><i class="fas fa-cart-plus"></i></abbr></button><button id="content__button-id2" onclick="Product_Detail('+arr[i].productId+')" ><abbr title="Xem chi tiết"><i class="fas fa-info"></i></abbr></button></div></div>';
              s=s+'<div class="content__name" > '+arr[i].name+' </div> <div class="content__price" >Giá: '+arr[i].price+' Vnd </div>';
            s=s+' </div>';
   return s;
}