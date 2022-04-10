
function object(id,brand,img,name,price,gender,soluong) {
        this.productId = id;
        this.brand = brand;
        this.img = img;
        this.name = name;
        this.price = price;
        this.gender = gender;
        this.soluong=soluong;

 }
 // Tạo mảng sản phẩm
function createProduct2(){
    if(localStorage.getItem("product2")==null)
    {
		var productArray2 = [
        new object(1,'nike','../image/img/giaynam 0001/Giày Nike Air Max 95 Premium - Đen Vàng.jpg','Nike Air Max 95 Premigum - Đen Vàng',6180000,'Nam',90),
        new object(2,'nike','../image/img/giaynam 0002/Nike Air Force LV8.jpg','Nike Air Force LV8',7945000,'Nam',99),
        new object(3,'nike','../image/img/giaynam 0003/Giày Nike Epic React Flyknit 2 Nam -Gold.jpg','Nike Epic React Flyknit 2 Nam -Gold',4527000,'Nam',99),
        new object(4,'nike','../image/img/giaynam 0004/Giày Nike Air Max 720 Nam - Xám Cam.jpg','Nike Air Max 720 ',2599000,'Nam',99),
        new object(5,'nike','../image/img/giaynam 0005/Giày Nike Air Max 94 - Xám.jpg','Nike Air Max 94 - Xám',3455000,'Nam',100),
        new object(6,'nike','../image/img/giaynam 0006/Giày Nike Odyssey React 2 Flyknit - Xanh Biển.jpg','Nike Odyssey React 2 Flyknit - Xanh Biển',8256000,'Nam',100),
        new object(7,'nike','../image/img/giaynam 0007/Giày Nike Legend Esstial Nam Đen Trắng.jpg','Nike Legend Esstial Nam Đen Trắng',5079000,'Nam',100),
        new object(8,'nike','../image/img/giaynam 0008/Nike Freak 2.jpg','Nike Freak 2',3699000,'Nam',100),
        new object(9,'nike','../image/img/giaynam 0009/Giày Nike Metcon 5 Nam - Xám.jpg','Nike Metcon 5 Nam - Xám',6555000,'Nam',199),
        new object(10,'nike','../image/img/giaynam 0010/Giày Nike Odyssey React 2 Flyknit - Camo.jpg','Nike Odyssey React 2 Flyknit - Camo',4234000,'Nam',100),
        new object(11,'nike','../image/img/giaynam 0011/Giày Nike Zoom Alpha Nam - Đen.jpg','Nike Zoom Alpha Nam - Đen',2678000,'Nam',100),
        new object(12,'nike','../image/img/giaynam 0012/Giày Nike Free Metcon 2 Nam - Xanh.jpg','Nike Free Metcon 2 Nam - Xanh',4125000,'Nam',100),
        new object(13,'nike','../image/img/giaynam 0013/Nike-Zoom-Fly-3.jpg','Nike-Zoom-Fly-3',4664000,'Nam',100),
        new object(14,'nike','../image/img/giaynam 0014/Giày Nike Zoom Alpha Nam - Xanh Navy.jpg','Nike Zoom Alpha Nam - Xanh Navy',12009000,'Nam',100),
        new object(15,'nike','../image/img/giaynam 0016/Giày Nike Zoom Winflo 7 Nam - Đen Xanh.jpg','Nike Zoom Winflo 7 Nam - Đen Xanh',7111000,'Nam',100),
        new object(16,'nike','../image/img/giaynam 0017/Nike Kybrid Ss2 EP.jpg','Nike Kybrid Ss2 EP',8653000,'Nam',100),
        new object(17,'nike','../image/img/giaynam 0018/Nkie DBreak-Type.jpg','Nkie DBreak-Type',9287000,'Nam',100),
        new object(18,'nike','../image/img/giaynam 0019/Giày Nike Zoom Winflo 6 Shield Nam - Đen Trắng.jpg','Nike Zoom Winflo 6 Shield Nam - Đen Trắng',5559000,'Nam',100),
        new object(19,'nike','../image/img/giaynam 0020/NIke Air Max 270 React RS.jpg','NIke Air Max 270 React RS',3899000,'Nam',100),
        new object(20,'nike','../image/img/giaynam 0044/Nike Air Max 1.jpg','Nike Air Max 1',27698000,'Nam',100),
        new object(21,'nike','../image/img/giaynam 0045/Nike SB Zoom Stefan janoski RM.jpg','Nike SB Zoom Stefan janoski RM',45250000,'Nam',100),
        new object(22,'nike','../image/img/giaynam 0046/Nike Air Zoom Tempo.jpg','Nike Air Zoom Tempo',35550000,'Nam',100),
        new object(23,'nike','../image/img/giaynam 0047/Nike Air VaporMax 2020 Flyknit.jpg','Nike Air VaporMax 2020 Flyknit',34998000,'Nam',100),
        new object(24,'nike','../image/img/giaynu 0021/Giày Nike Joyride Flyknit Nữ - Hồng.jpg','Nike Joyride Flyknit Nữ - Hồng',13999000,'Nữ',100),
        new object(25,'nike','../image/img/giaynu 0022/Giày Nike Air Max Dia Nữ - Hồng Đỏ.jpg','Nike Air Max Dia Nữ - Hồng Đỏ',9669000,'Nữ',100),
        new object(26,'nike','../image/img/giaynu 0023/Giày Nike Air Zoom Odyssey 2- Xanh Ngọc.jpg','Nike Air Zoom Odyssey 2- Xanh Ngọc',25999000,'Nữ',100),
        new object(27,'nike','../image/img/giaynu 0024/NIke Zoomz Vaporfly.jpg','NIke Zoomz Vaporfly',5692000,'Nữ',100),
        new object(28,'nike','../image/img/giaynu 0025/Giày Nike Air Zoom Pegasus 37 Nữ - Xanh Dương.jpg','Nike Air Zoom Pegasus 37 Nữ - Xanh Dương',4120000,'Nữ',100),
        new object(29,'nike','../image/img/giaynu 0026/Nike-Air-Max-95.jpg','Nike-Air-Max-95',2789000,'Nữ',100),
        new object(30,'nike','../image/img/giaynu 0027/Giày Nike Air Zoom Pegasus  Nữ - Đen Xám.jpg','Nike Air Zoom Pegasus  Nữ - Đen Xám',7251000,'Nữ',100),
        new object(31,'nike','../image/img/giaynu 0028/Giày Nike Air Zoom Structure 22 Nữ - Xám Tím.jpg','Nike Air Zoom Structure 22 Nữ - Xám Tím',2999000,'Nữ',100), 
        new object(32,'nike','../image/img/giaynu 0029/Giày Nike Epic React Flyknit 2 Nữ -Tím.jpg','Nike Epic React Flyknit 2 Nữ -Tím',9009000,'Nữ',100),
        new object(33,'nike','../image/img/giaynu 0030/Giày Nike Flex Experience RN 8 Nữ Trắng Đen.jpg','Nike Flex Experience RN 8 Nữ Trắng Đen',3220000,'Nữ',100),
        new object(34,'nike','../image/img/giaynu 0031/Nike-Metcon-6.jpg','Nike-Metcon-6',2369000,'Nữ',100),
        new object(35,'nike','../image/img/giaynu 0032/Nike LeBron 17.jpg','Nike LeBron 17',4320000,'Nữ',100),
        new object(36,'nike','../image/img/giaynu 0033/Giày Nike Joyride Flyknit Nữ Trắng Xanh.jpg','Nike Joyride Flyknit Nữ Trắng Xanh',22998000,'Nữ',100),
        new object(37,'nike','../image/img/giaynu 0034/Giày Nike Odyssey React 2 Flyknit - Xám Đỏ.jpg','Nike Odyssey React 2 Flyknit - Xám Đỏ',2999000,'Nữ',100),
        new object(38,'nike','../image/img/giaynu 0035/Giày Nike Renew Run Nữ - Đen.jpg','Nike Renew Run Nữ - Đen',5555000,'Nữ',100),
        new object(39,'nike','../image/img/giaynu 0036/Nike Air Force LV9.jpg','Nike Air Force LV9',1998000,'Nữ',100),
        new object(40,'nike','../image/img/giaynu 0037/NIke Air VaporMax 2020.jpg','NIke Air VaporMax 2020',1005000,'Nữ',100),
        new object(41,'nike','../image/img/giaynu 0038/Giày Nike Zoom Rival Fly 2 Nữ - Trắng Xám.jpg','Nike Zoom Rival Fly 2 Nữ - Trắng Xám',9766000,'Nữ',100),
        new object(42,'nike','../image/img/giaynu 0039/Nike Air Max 98.jpg','Nike Air Max 98',7999000,'Nữ',100),
        new object(43,'nike','../image/img/giaynu 0048/Nike blazer Mid 77.jpg','Nike blazer Mid 77',27643000,'Nữ',100),
        new object(44,'nike','../image/img/giaynu 0049/Nike blazer Mid 78.jpg','Nike blazer Mid 78',11992000,'Nữ',100),
        new object(45,'nike','../image/img/giaynu 0050/Nike Blazer mid SE.jpg','Nike Blazer mid SE',24180000,'Nữ',100),
        new object(46,'nike','../image/img/giaynu 0051/Nike blazer Mid Vintage.jpg','Nike blazer Mid Vintage',10999000,'Nữ',100),
        new object(47,'nike','../image/img/giaynu 0052/Nike SB Zoom Blazer Mid Premium.jpg','Nike SB Zoom Blazer Mid Premium',8990000,'Nữ',100),
        new object(48,'nike','../image/img/giaynu 0053/NIke SB Zoom Blazer Premium 2.jpg','NIke SB Zoom Blazer Premium 2',11909000,'Nữ',100),
        new object(49,'nike','../image/img/giaynu 0054/Nike SB Zoom DVD.jpg','Nike SB Zoom DVD',43005000,'Nữ',100),
        new object(50,'nike','../image/img/giaynu 0055/Nike-SB-Zoom-Blazer-Mid.jpg','Nike-SB-Zoom-Blazer-Mid',12612000,'Nữ',100),
        new object(51,'nike','../image/img/giaynu 0056/Nke SB  Zoom Blazer Mid Pro GT.jpg','Nke SB  Zoom Blazer Mid Pro GT',23564000,'Nữ',100),
        new object(52,'nike','../image/img/giaykid 0041/Nike Star runner 2.jpg','Nike Star runner 2',1589000,'kid',100),
        new object(53,'nike','../image/img/giaykid 0042/Nike Team Hustle D 9 Lil.jpg','Nike Team Hustle D 9 Lil',1543000,'kid',100),
        new object(54,'nike','../image/img/giaykid 0043/Nike T-Shits.jpg','Nike T-Shits',2050000,'kid',100),
        new object(55,'nike','../image/img/giaykid0040/Nike Pico 5 Lil.jpg','Nike Pico 5 Lil',1099000,'kid',100),

        
    ];
        localStorage.setItem('product2',JSON.stringify(productArray2));
}
}
// hiển thị một sản phẩm trên trang
function inner(j)
{
   var arr= JSON.parse(localStorage.getItem('product2'));   
   var i=j;
            var  s='<div class="content__item" ><div class="content__image"> <img src="'+arr[i].img+'"><div class="content__button"><button id="content__button-id1" onclick="showgiohang('+arr[i].productId+')" ><abbr title="Thêm vào giỏ"><i class="fas fa-cart-plus"></i></abbr></button><button id="content__button-id2" onclick="Product_Detail('+arr[i].productId+')" ><abbr title="Xem chi tiết"><i class="fas fa-info"></i></abbr></button></div></div>';
              s=s+'<div class="content__name" > '+arr[i].name+' </div> <div class="content__price" >Giá:  '+arr[i].price+' Vnd </div>';
            s=s+' </div>';
   return s;
}
// Hiển thị tất cã sản phẩm trong trang chủ
// trả về một chuỗi s là các thẻ htmml của 1 sản phẩm khi hiển thị cho người khác xem
function displayAll()
{
    var arr= JSON.parse(localStorage.getItem('product2'));   
    var s="";
    for(i=0;i<arr.length;i++)
    {
       
        s=s+inner(i);
        document.getElementById("vuong").innerHTML=s;
    }
}
// Hiển thị có điều kiện( các sản phẩm dưới 5 triệu chỉ hiển thị 6 trang )
function display()
{
    var arr= JSON.parse(localStorage.getItem('product2'));   
    var s="";
    var count=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].price<5000000 && count<6)
        {
            count++;
        s=s+inner(i);
        document.getElementById("vuong").innerHTML=s;
        }
    }
    // Nút để hiện thị tất cã và thu gọn trong trang chủ phần sản phẩm hot
    document.getElementById("span_all").innerHTML= '<button id="span_all-button" onclick=span_showAll()>Xem tất cã</button>';

}
// trả về một chuỗi s là các thẻ htmml của 1 sản phẩm đang giảm giá khi hiển thị trên trang cho người khác xem
function inner_sale(j)
{
   var arr= JSON.parse(localStorage.getItem('product2'));   
   var i=j;
            var  s='<div class="content__item" ><div class="content__image"> <img src="'+arr[i].img+'"><div class="content__button"><button id="content__button-id1" onclick="showgiohang('+arr[i].productId+')" ><abbr title="Thêm vào giỏ"><i class="fas fa-cart-plus"></i></abbr></button><button id="content__button-id2" onclick="Product_Detail('+arr[i].productId+')" ><abbr title="Xem chi tiết"><i class="fas fa-info"></i></abbr></button></div></div>';
              s=s+'<div class="content__name" > '+arr[i].name+' </div> <div class="content__price" >Giá: <del>'+(arr[i].price)+"Vnd "+' </del> '+(arr[i].price-1500000)+' Vnd </div>';
            s=s+' </div>';
   return s;
}
// hiển thị sản phẩm đang sale giá lớn hơn 30 triệu, chỉ hiển thị 3 sản phẩm trên trang
function productSale()
{
        var arr = JSON.parse(localStorage.getItem('product2'));
        var i;
        var s="";
        var count =0;
        for(i=0;i<arr.length;i++)
        {
         if(arr[i].price>30000000 && count<3)
         {
             count++;
             s = s+ inner_sale(i);
             document.getElementById('sale').innerHTML=s;
         }
        }
}
// hiển thị tất cã sản phẩm dưới 5 triệu
function span_showAll() 
{
    var arr= JSON.parse(localStorage.getItem('product2'));   
    var s="";
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].price<5000000)
        {
        s=s+inner(i);
        document.getElementById("vuong").innerHTML=s;
        }
    }
    document.getElementById("span_all").innerHTML= '<button id="span_all-button" onclick=display()>Thu gọn</button>';

}
/*var s = "<div"+" "+"class="+"\""+"content__item"+"\""+ 'id='+i+'"'+">" +"<img " + "src="+"\""+"../"+arr[i].img+"\"" + ">"
+"<div"+" "+"class="+"\""+"content__name"+"\""+">"+ arr[i].name+"</div>"+ "<div"+" "+"class="+"\""+"content__price"+"\""+">"+"Giá: "+arr[i].price+" Vnd"+"</div>"+
'<button class="content__button" onclick="showgiohang('+arr[i].productId+')" > Mua hàng </button>'+
"</div>" ;
*/