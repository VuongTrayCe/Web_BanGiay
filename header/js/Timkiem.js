// Tìm kiếm tất cả sản phầm khi người dùng bấm vào tìm kiếm
function TimKiemSanPham()
{
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("vuong").style.display='flex';
    document.getElementById("span_button").style.display='flex';
    document.getElementById("timkiem_phanloai1").value="";
    document.getElementById("timkiem_phanloai2").value="";
    var data=document.getElementById("timkiem");           // Lấy dữ liệu từ ô tìm kiếm
    var arr=JSON.parse(localStorage.getItem('product2')); // Đổ mảng sản phẩm có trong hệ thống xuống
    document.getElementById('search_option-id').style.display='flex';// hiển thị bảng lựa chọn thể loại, và khoảng giá. Mặc định ban đầu sẽ ẩn
    var arrnew=[];
    var j=0;
    var s="";
    var flag=false;
    var count=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].name.includes(data.value)==true)  // Nếu chuỗi nhận được từ ô tìm kiếm là chuỗi con của tên sản phẩm nào đó.
        {
           arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
           if(count<6)  // chỉ hiển thị 6 sản phẩm trên một trang
           {
            s=s+inner(i);  // cộng các thẻ html của 1 sản phẩm để hiển thị ra 
            count++;
           }
           j++;
           flag=true; // Tìm kiếm có kết quả
          
        }
    }
    if(flag==false){ // tìm kiếm không có kêt quả
        alert("Không tìm thấy kết quả");
    }
    else
    {
    document.getElementById("vuong").innerHTML=s;
    var arrbutton=indexButton2(arrnew);
    var s2="";
    var str=data.value;
    var s="";
    s=s+str;
    // hiển thị các nút phân trang các sản phẩm vừa tìm được
    for(i=0;i<arrbutton.length;i++)
    {
        s2=s2+'<button id="span_button-index'+(i+1)+'" onclick=display_Product_Next2('+(i+1)+','+arrbutton.length+')>'+(i+1)+'</button>';
    }
    document.getElementById('span_button').innerHTML=s2;
}
}
// Tìm kiếm sản phẩm theo phân loại nâng cao (theo thể loại hoặc khoảng giá)
function TimkiemPhanLoaiSanPham()
{
    console.log("vong");
        document.getElementById("image__introduce-id").style.display='none';
        document.getElementById("image__introduce-id2").style.display='none';
        document.getElementById("image__introduce-id3").style.display='none';
        document.getElementById("sale").style.display='none';
        document.getElementById("span_all").style.display='none';
        document.getElementById("sale0").style.display='none';
        document.getElementById("title_product").style.display='none';
        document.getElementById("introduce_page-id").style.display='none';
        document.getElementById("vuong").style.display='flex';
        document.getElementById("span_button").style.display='flex';
        document.getElementById('search_option-id').style.display='flex';
        var a= document.getElementById("timkiem_phanloai1"); // lấy giá trị tại thẻ select option của thể loại
        var b= document.getElementById("timkiem_phanloai2"); // lấy giá trị tại thẻ select option của khoảng giá
        var arr=JSON.parse(localStorage.getItem('product2'));// đổ mảng danh sách sản phẩm xuống
        var arrnew=[];
        var j=0;
        var s="";
        var count=0;
        if(a.value=="" && b.value=="") // Nếu giá trị tại thể loại và khoảng giá là rỗng (mặc định là để tất cã thể loại và tất cã giá bán)
        {
            TimKiemSanPham(); // Gọi hàm tìm kiếm tất cã
        }
        else if(a.value!="" && b.value!="")// nếu cã 2 điều có điều kiện
        {
            for(i=0;i<arr.length;i++)
            {
                if(arr[i].gender.includes(a.value)==true)  // kiểm tra thể loại đang được người dùng chọn
                {
                    switch(b.value) // giá trị của giá bán
                    {
                        case "a": // lọc ra các sản phẩm có điều kiện thể loại ... và giá dưới 5 triệu
                            if(arr[i].price < 5000000)
                             {
                                 arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                   }
                             j++;
                            }
                            break;
                        case "b": // lọc ra các sản phẩm có điều kiện thể loại ... và giá dưới từ 5 triệu đến bé hơn 20 triệu
                            if(arr[i].price>=5000000 && arr[i].price<20000000)
                             {
                                 arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                   }
                             j++;
                            }
                            break;
                        case "c": // lọc ra các sản phẩm có điều kiện thể loại ... và giá trên 20 triệu
                            if(arr[i].price>20000000)
                             {
                                 arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                  }
                             j++;
                            }
                            break;
                    }
                    
                }      
            }
        }
        else if(a.value=="" && b.value!="") // nếu không yêu cầu thể loại là gì và có yêu cầu khoảng giá
        {
            for(i=0;i<arr.length;i++)
            {
                    switch(b.value)
                    {
                        case "a": // lọc ra các sản phẩm có giá dưới 5 triệu
                            if(arr[i].price < 5000000)
                             {
                                 arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                   }
                             j++;
                            }
                            break;
                        case "b": // lọc ra các sản phẩm có giá từ 5 triệu đến bé hơn 20 triệu
                            if(arr[i].price>=5000000 && arr[i].price<20000000)
                             {
                                 arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                   }
                             j++;
                            }
                            break;
                        case "c":  // lọc ra các sản phẩm có giá trên 20 triệu
                            if(arr[i].price>20000000)
                             {
                                 arrnew[j]=arr[i];// lưu vào mảng tạm để tìm số nút phân trang
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                  }
                             j++;
                            }
                            break;
                    }
                    
            }      
        }
        else if(a.value!="" && b.value=="") // yêu cầu thể loại và không yêu cầu khoảng giá
        {
            for(i=0;i<arr.length;i++)
            {
                if(arr[i].gender==a.value) // tìm những sản phẩm có thể loại trùng với thể loại người dùng chọn
                   {
                        arrnew[j]=arr[i]; // lưu vào mảng tạm để tìm số nút phân trang 
                        if(count<6)
                           {
                            s=s+inner(i);
                            count++;
                           }
                        j++;
                   }
            }
        }
        document.getElementById("vuong").innerHTML=s;
        var arrbutton=indexButton2(arrnew); // tìm mảng các nút để phân trang
        var s2="";
        var s="";
        for(i=0;i<arrbutton.length;i++)
        {
            console.log(arrbutton[i]);
            s2=s2+'<button id="span_button-index'+(i+1)+'" onclick=display_Product_Next2('+(i+1)+','+arrbutton.length+')>'+(i+1)+'</button>';
        }
        document.getElementById('span_button').innerHTML=s2;
}
// Lọc danh sách sản phẩm thõa mãn điều kiện
function TimKiemListProduct()
{
    var arr=JSON.parse(localStorage.getItem('product2'));
    var data=document.getElementById("timkiem");
    var j=0;
    var str1=data.value;
    var a= document.getElementById("timkiem_phanloai1");// Láy giá trị tại thể loại
    var b= document.getElementById("timkiem_phanloai2");// lấy giá trị tại khoảng giá
    var arrnew=[];
    var j=0;
    var s="";
    var count=0;

    // Các cấu trúc rẽ nhánh để kiểm tra điều kiện tương tự hàm TimkiemPhanLoaiSanPham();

    if(a.value=="" && b.value=="") // không yêu cầu thể loại và khoảng giá
    {
        for(i=0;i<arr.length;i++)
        {
            if(arr[i].name.includes(str1)==true)
            {
               arrnew[j]=arr[i];
               j++;
            }
        }
        return arrnew;  
    }
    else if(a.value!="" && b.value!="") // yêu cầu thể loại và khoảng giá
    {
        for(i=0;i<arr.length;i++)
        {
            if(arr[i].gender.includes(a.value)==true)
            {
                switch(b.value)
                {
                    case "a":
                        if(arr[i].price<5000000)
                         {
                             arrnew[j]=arr[i];
                             if(count<6)
                               {
                                 s=s+inner(i);
                                 count++;
                               }
                         j++;
                        }
                        break;
                    case "b":
                        if(arr[i].price>=5000000 && arr[i].price<20000000)
                         {
                             arrnew[j]=arr[i];
                             if(count<6)
                               {
                                 s=s+inner(i);
                                 count++;
                               }
                         j++;
                        }
                        break;
                    case "c":
                        if(arr[i].price>20000000)
                         {
                             arrnew[j]=arr[i];
                             if(count<6)
                               {
                                 s=s+inner(i);
                                 count++;
                              }
                         j++;
                        }
                        break;
                }
                
               }      
            }
            return arrnew;
    }
    else if(a.value=="" && b.value!="") // khong yêu cầu thể loại và yêu cầu khoảng giá
        {
            for(i=0;i<arr.length;i++)
            {
                    switch(b.value)
                    {
                        case "a":
                            if(arr[i].price < 5000000)
                             {
                                 arrnew[j]=arr[i];
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                   }
                             j++;
                            }
                            break;
                        case "b":
                            if(arr[i].price>=5000000 && arr[i].price<20000000)
                             {
                                 arrnew[j]=arr[i];
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                   }
                             j++;
                            }
                            break;
                        case "c":
                            if(arr[i].price>20000000)
                             {
                                 arrnew[j]=arr[i];
                                 if(count<6)
                                   {
                                     s=s+inner(i);
                                     count++;
                                  }
                             j++;
                            }
                            break;
                    }
                    
            } 
            return arrnew;     
        }
        else if(a.value!="" && b.value=="") // yêu cầu thể loại và không yêu cầu khoảng giá
        {
            for(i=0;i<arr.length;i++)
            {
                if(arr[i].gender==a.value)

                   {
                        arrnew[j]=arr[i];
                        console.log("da voa roi ne");
                        if(count<6)
                           {
                            s=s+inner(i);
                            count++;
                           }
                        j++;
                   }
            }
            return arrnew;
        }
}
// danh sách nút để phân trang
function indexButton2(arrnew)
{
   var arr = arrnew;
            var arr_button=[];
               for(i=0;i<arr.length/6;i++)
               {
                  arr_button[i]=i+1;
               }
    return arr_button;
}
// Hiển thị sản phẩm ở các nút tiếp theo
function display_Product_Next2(j,n)
{    
    // j là thứ tự nút phân trang
    // n là số lượng các nút    
    var i;
    var arr=TimKiemListProduct();  // Gọi đến hàm tìm các sản phẩm có điều kiện để lọc ra và trả về một mảng tạm
    for(i=0;i<n;i++)
    {
        document.getElementById('span_button-index'+(i+1)+'').style.backgroundColor='white';
    }
    document.getElementById('span_button-index'+j+'').style.backgroundColor='red';
    var x = j*6;
    var s="";
    for(i=x-6;i<x && i<arr.length;i++)// hiển thị các sản phẩm tìm được
    {
        s=s+inner3(i,arr); // cộng các thẻ sản phẩm lại
        document.getElementById('vuong').innerHTML=s;// hiển thị ra
    }
}
// tương tự như hàm inner();
// trả về một chuỗi s chứa các thẻ html cho một sản phẩm 
function inner3(j,arr1)
{
   var arr=arr1;   
   var i=j;
            var  s='<div class="content__item" ><div class="content__image"> <img src="'+arr[i].img+'"><div class="content__button"><button id="content__button-id1" onclick="showgiohang('+arr[i].productId+')" ><abbr title="Thêm vào giỏ"><i class="fas fa-cart-plus"></i></abbr></button><button id="content__button-id2" onclick="Product_Detail('+arr[i].productId+')" ><abbr title="Xem chi tiết"><i class="fas fa-info"></i></abbr></button></div></div>';
              s=s+'<div class="content__name" > '+arr[i].name+' </div> <div class="content__price" >Giá: '+arr[i].price+' Vnd </div>';
            s=s+' </div>';
   return s;
}