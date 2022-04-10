

// Hiển thị phân loai sản phẩm
function Phanloai(i,str)
{
    // chỉ định các khối như: giới thiệu, giảm giá, các nút trong index.html ẩn đi
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("introduce_page-id").style.display='none';
    document.getElementById("vuong").style.display='flex';
    document.getElementById("span_button").style.display='flex';
    document.getElementById("Detail-id").style.display='none';
    document.getElementById('search_option-id').style.display='none';
    displayProduct(i);// Sanpham.js  gọi đến hàm hiển thị sản phẩm theo phân loại
    display_button(i,str);// Sanpham.js  gọi đến hàm hiển thị các nút để phân trang
}