const EXPRESS = require("express")
const SESSION = require("express-session")
const FILEUPLOAD = require('express-fileupload')
const Xu_ly =  require("./XL_3L")

var Ung_dung = EXPRESS()
Ung_dung.use(SESSION({secret:'123456789'}))
Ung_dung.use(EXPRESS.urlencoded({extended: false}))
Ung_dung.use("/Media", EXPRESS.static("../Media"))
Ung_dung.use(FILEUPLOAD())
Ung_dung.listen(3021)

XL_Khoi_dong=(req, res)=>{
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Dang_nhap("NV_1","NV_1")
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
    res.send(Chuoi_HTML)    
}

XL_Dang_nhap=(req,res)=>{
    var Danh_sach_Nhan_vien = Xu_ly.Doc_Danh_sach_Nhan_vien()
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Ten_Dang_nhap = req.body.Th_Ten_Dang_nhap
    var Mat_khau = req.body.Th_Mat_khau
    var Chuoi_HTML = ""
    var Nhan_vien = Danh_sach_Nhan_vien.find( x=>
        x.Ten_Dang_nhap == Ten_Dang_nhap && x.Mat_khau == Mat_khau )
        if (Nhan_vien != null){
            req.session.Nguoi_dung = Nhan_vien
            Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Nhan_vien(Nhan_vien)
            Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
        }
        else {
            Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Dang_nhap("","",'Dang nhap khong hop le')
            Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
        }
    res.send(Chuoi_HTML)        
}

XL_Chon_Cap_nhat_Dien_thoai=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Cap_nhat_Dien_thoai(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML",Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Chon_Cap_nhat_Dia_chi=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Cap_nhat_Dia_chi(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML",Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Chon_Cap_nhat_Hinh=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Cap_nhat_Hinh(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Chon_Bo_sung_Ngoai_ngu=(req,res)=>{
    var Cong_ty=Xu_ly.Doc_Cong_ty()
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) 
                    + Xu_ly.Tao_Chuoi_HTML_Bo_sung_Ngoai_ngu(Nhan_vien,Cong_ty.Danh_sach_Ngoai_ngu)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Cap_nhat_Dien_thoai=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Dien_thoai = req.body.Th_Dien_thoai
    Nhan_vien.Dien_thoai = Dien_thoai
    Xu_ly.Ghi_Nhan_vien(Nhan_vien)
    Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Nhan_vien(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML",Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Cap_nhat_Dia_chi=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Dia_chi = req.body.Th_Dia_chi
    Nhan_vien.Dia_chi = Dia_chi
    Xu_ly.Ghi_Nhan_vien(Nhan_vien)
    Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Nhan_vien(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML",Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Cap_nhat_Hinh=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Hinh = req.files.Th_Hinh.data
    Xu_ly.Ghi_Hinh_Nhan_vien(Nhan_vien, Hinh)
    var Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Nhan_vien(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
    res.send(Chuoi_HTML)
}

XL_Bo_sung_Ngoai_ngu=(req,res)=>{
    var Nhan_vien = req.session.Nguoi_dung
    var Cong_ty=Xu_ly.Doc_Cong_ty()
    var Khung_HTML = Xu_ly.Doc_Khung_HTML()
    var Ma_so_Ngoai_ngu = req.body.Th_Ma_so_Ngoai_ngu
    var Ngoai_ngu = Cong_ty.Danh_sach_Ngoai_ngu.find ( x => x.Ma_so == Ma_so_Ngoai_ngu)
    Nhan_vien.Danh_sach_Ngoai_ngu.push(Ngoai_ngu)
    Xu_ly.Ghi_Nhan_vien(Nhan_vien)
    var Chuoi_HTML = Xu_ly.Tao_Chuoi_HTML_Thuc_don(Nhan_vien) + Xu_ly.Tao_Chuoi_HTML_Nhan_vien(Nhan_vien)
    Chuoi_HTML = Khung_HTML.replace("Chuoi_HTML", Chuoi_HTML)
    res.send(Chuoi_HTML)    
}

Ung_dung.get("/", XL_Khoi_dong)
Ung_dung.post("/Dang_nhap", XL_Dang_nhap)
Ung_dung.post("/Chon_Cap_nhat_Dien_thoai", XL_Chon_Cap_nhat_Dien_thoai)
Ung_dung.post("/Chon_Cap_nhat_Dia_chi", XL_Chon_Cap_nhat_Dia_chi)
Ung_dung.post("/Chon_Cap_nhat_Hinh", XL_Chon_Cap_nhat_Hinh)
Ung_dung.post("/Chon_Bo_sung_Ngoai_ngu", XL_Chon_Bo_sung_Ngoai_ngu)
Ung_dung.post("/Cap_nhat_Dien_thoai", XL_Cap_nhat_Dien_thoai)
Ung_dung.post("/Cap_nhat_Dia_chi", XL_Cap_nhat_Dia_chi)
Ung_dung.post("/Cap_nhat_Hinh", XL_Cap_nhat_Hinh)
Ung_dung.post("/Bo_sung_Ngoai_ngu", XL_Bo_sung_Ngoai_ngu)