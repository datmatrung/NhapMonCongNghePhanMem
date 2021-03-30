const FS = require("fs")
var Thu_muc_Du_lieu = '..\\Du_lieu'
var Thu_muc_Nhan_vien = Thu_muc_Du_lieu + "\\Nhan_vien"
var Thu_muc_HTML = Thu_muc_Du_lieu + "\\HTML"

class XL_3L{
    Doc_Khung_HTML(){
        var Duong_dan = Thu_muc_HTML+"\\Khung.html"
        var Chuoi_HTML = FS.readFileSync(Duong_dan,"utf-8")
        return Chuoi_HTML
    }
    Doc_Cong_ty(){
        var Duong_dan = Thu_muc_Du_lieu+"\\Cong_ty\\Cong_ty.json" 
        var Chuoi_JSON = FS.readFileSync(Duong_dan,"utf-8")
        var Cong_ty = JSON.parse(Chuoi_JSON)
        return Cong_ty
    }
    Doc_Danh_sach_Nhan_vien(){
        var Danh_sach = []
        var Danh_sach_Ten = FS.readdirSync(Thu_muc_Nhan_vien)
        Danh_sach_Ten.forEach(Ten => {
            var Duong_dan = `${Thu_muc_Nhan_vien}\\${Ten}`
            var Chuoi_JSON = FS.readFileSync(Duong_dan,"utf-8")
            var Nhan_vien = JSON.parse(Chuoi_JSON)
            Danh_sach.push(Nhan_vien)            
        });
        return Danh_sach
    }
    Ghi_Nhan_vien(Nhan_vien){
        var Duong_dan = `${Thu_muc_Nhan_vien}\\${Nhan_vien.Ma_so}.json`
        var Chuoi_JSON = JSON.stringify(Nhan_vien)
        FS.writeFileSync(Duong_dan, Chuoi_JSON)
    }
    Ghi_Hinh_Nhan_vien(Nhan_vien, Hinh){
        var Duong_dan = `..\\Media\\${Nhan_vien.Ma_so}.png`
        FS.writeFileSync(Duong_dan, Hinh)
    }
    Tao_Chuoi_HTML_Thuc_don(Nhan_vien){
        var Chuoi_Chon_Bo_sung_Ngoai_ngu = 
            `<form action = '/Chon_Bo_sung_Ngoai_ngu' method = 'post' class='btn'>
                <button type = 'submit' class = 'btn btn-danger'>Bổ sung ngoại ngữ</button>
            </form>`
        if (Nhan_vien.Danh_sach_Ngoai_ngu.length == 5)
            Chuoi_Chon_Bo_sung_Ngoai_ngu = ""
        var Chuoi_Thuc_don = 
            `<div>
                <form action = '/Chon_Cap_nhat_Dien_thoai' method = 'post' class='btn'>
                    <button type = 'submit' class = 'btn btn-danger'>Cập nhật điện thoại</button>
                </form>
                <form action = '/Chon_Cap_nhat_Dia_chi' method = 'post' class='btn'>
                    <button type = 'submit' class = 'btn btn-danger'>Cập nhật địa chỉ</button>
                </form>
                <form action = '/Chon_Cap_nhat_Hinh' method = 'post' class='btn'>
                    <button type = 'submit' class = 'btn btn-danger'>Cập nhật hình</button>
                </form>
                ${Chuoi_Chon_Bo_sung_Ngoai_ngu}
            </div>`
    return Chuoi_Thuc_don
    }
    Tao_Chuoi_HTML_Nhan_vien(Nhan_vien){
        var Chuoi_HTML = ""
        var Chuoi_Hinh = `<img src = '/Media/${Nhan_vien.Ma_so}.png' style = 'width:60px;height:60px' />`
        var Chuoi_Ngoai_ngu = ""
            Nhan_vien.Danh_sach_Ngoai_ngu.forEach(Ngoai_ngu =>{
                Chuoi_Ngoai_ngu += Ngoai_ngu.Ten + " "
            })
        var Chuoi_Thong_tin=`<div class='btn' style='text-align:left'> 
            Họ tên: ${Nhan_vien.Ho_ten} - Giới tính: ${Nhan_vien.Gioi_tinh}<br>
            CMND: ${Nhan_vien.CMND} - Ngày sinh: ${Nhan_vien.Ngay_sinh} - Mức lương: ${Nhan_vien.Muc_luong}<br>
            Điện thoại: ${Nhan_vien.Dien_thoai} - Mail: ${Nhan_vien.Mail}<br>
            Địa chỉ: ${Nhan_vien.Dia_chi} - ${Nhan_vien.Don_vi.Ten} - ${Nhan_vien.Don_vi.Chi_nhanh.Ten }<br>
            Khả năng ngoại ngữ: ${Chuoi_Ngoai_ngu}
            </div>`
        Chuoi_HTML = Chuoi_Hinh + Chuoi_Thong_tin
        return Chuoi_HTML
    }
    Tao_Chuoi_HTML_Dang_nhap(Ten_Dang_nhap ='', Mat_khau ='', Thong_bao =''){
        var Chuoi_HTML = `<form action = "/Dang_nhap" method = "post">
                <div class = "alert" style = "height:30px">
                    <input name = "Th_Ten_Dang_nhap" required="required"
                    value = '${Ten_Dang_nhap}' spellcheck="false" autocomplete="off" />
                </div>
                <div class = "alert" style = "height:30px">
                    <input name = "Th_Mat_khau" required="required"
                    value = '${Mat_khau}' spellcheck="false" autocomplete="off" />
                </div>
                <div class = "alert" style = "height:30px">
                    <button class = 'btn btn-danger' type = 'submit' >Đồng ý</button>
                </div>
                <div> ${Thong_bao}</div>
            </form>`
        return Chuoi_HTML
    }
    Tao_Chuoi_HTML_Cap_nhat_Dien_thoai(Nhan_vien){
        var Chuoi_HTML = `<form action = "/Cap_nhat_Dien_thoai" method = "post">
            <div class = "alert" style = "height:30px">
                <input name = "Th_Dien_thoai" required="required"
                value = '${Nhan_vien.Dien_thoai}' spellcheck="false" autocomplete="off" />
            </div>
            <div class = "alert" style = "height:30px">
                <button class = 'btn btn-danger' type='submit'>Đồng ý</button>
            </div>
        </form>`
        return Chuoi_HTML
    }
    Tao_Chuoi_HTML_Cap_nhat_Dia_chi(Nhan_vien){
        var Chuoi_HTML = `
        <form action = "/Cap_nhat_Dia_chi" method = "post">
            <div class = "alert" style = "height:40px">
                <textarea name = "Th_Dia_chi" required="required" cols ="25" rows ="2">${Nhan_vien.Dia_chi} </textarea>
            </div>
            <div class = "alert" style = "height:30px">
                <button class = "btn btn-danger" type = "submit" >Đồng ý</button>
            </div>
        </form>`
        return Chuoi_HTML
    }
    Tao_Chuoi_HTML_Cap_nhat_Hinh(Nhan_vien) {
        var Chuoi_HTML = 
            `<form action = "/Cap_nhat_Hinh" method = "post" enctype="multipart/form-data">
                <div class = "alert" style = "height:30px">
                    <input type = "file" name = "Th_Hinh" accept ="image/png" />
                </div>
                <div class = "alert" style = "height:30px">
                    <button class="btn btn-danger" type = "submit" >Đồng ý</button>
                </div>
            </form>`
        return Chuoi_HTML
    }
    Tao_Chuoi_HTML_Bo_sung_Ngoai_ngu(Nhan_vien, Danh_sach_Ngoai_ngu){
        var Danh_sach_Bo_sung = []
        Danh_sach_Ngoai_ngu.forEach(Ngoai_ngu => { 
            if (!Nhan_vien.Danh_sach_Ngoai_ngu.find(x => x.Ma_so == Ngoai_ngu.Ma_so))
            Danh_sach_Bo_sung.push(Ngoai_ngu)
        })
        var Chuoi_HTML_Bo_sung = ""
        Danh_sach_Bo_sung.forEach(Ngoai_ngu => {
            Chuoi_HTML_Bo_sung += 
            `<form action ="/Bo_sung_Ngoai_ngu" method = "post" class = "btn" >
                <input name = "Th_Ma_so_Nhan_vien" value = '${Nhan_vien.Ma_so}' type = "hidden" />
                <input name = "Th_Ma_so_Ngoai_ngu"  value = '${Ngoai_ngu.Ma_so}' type = "hidden" />
                <button class = "btn btn-danger" type = "submit" >${Ngoai_ngu.Ten} </button>
            </form>`
        })
        var Chuoi_HTML = Chuoi_HTML_Bo_sung
        return Chuoi_HTML        
    }
}
module.exports = new XL_3L()