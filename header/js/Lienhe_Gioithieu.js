// Hàm hiển thị thông tin liên hệ
function Lienhe()
{
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("title_product").style.display='none';
    document.getElementById("vuong").style.display='flex';
    document.getElementById("span_button").style.display='none';
    document.getElementById("introduce_page-id").style.display='none';
    document.getElementById("Detail-id").style.display='none';
    // tạo ra một chuỗi s có tác dụng cộng các thẻ html
    s="";
    s=s+'<div class="Lienhe_title">'
   + '<h1>Liên hệ với chúng tôi</h1>'
   +'<img src="../ContactUsBanner.jpg">'
   +'</div>'
    +'<div class="Lienhe_info">'
        +'<h1>Gửi thông tin</h1>'
       +'<h3>Bạn hãy điền thông tin và gửi đến với chúng tôi. Chúng tôi sẽ trả lời sớm nhất</h3>'
       +'<form>'
            +'<div>'
            +'<lable >Họ và tên</lable>'
            +'<input type="text" value="" class="contact" id="contact_form-name" placeholder="Nhập họ và tên" >'
            +'<lable>Số điện thoại</lable>'
            +'<input type="text" value="" class="contact" id="contact_form-phone" placeholder="Nhập số điện thoại">'
           +'</div>'
            +'<lable>Email</lable>'
           +'<input type="email" value="" class="contact" id="contact_form-email" placeholder="Nhập địa chỉ email">'
           +'<lable>Nội dung</lable>'
            +'<input type="text" value="" class="contact" id="contact_form-content" placeholder="Nội dung" style="height:70px;font-size: 20px;width:400px">'
            +'<button onclick="">Gửi tin nhắn</button>'
        +'</form>'
    '</div>';
    document.getElementById('vuong').innerHTML=s;
}
// hàm hiển chỉ định khi click vào mục liên hệ. Mặc định ban đầu khối này sẽ ẩn
function Gioithieu()
{
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("title_product").style.display='none';
    document.getElementById("vuong").style.display='none';
    document.getElementById("span_button").style.display='none';
    document.getElementById("Detail-id").style.display='none';
    document.getElementById("introduce_page-id").style.display='block';

}