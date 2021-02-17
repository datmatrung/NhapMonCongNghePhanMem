// npm install express
const Express = require("express")
const XuLy = require("./XuLy3Lop")

XL_KhoiDong=(req,res)=>{
    var ChuoiHTML = `<form action='/TraCuuNhanVien' method='get'>
                        Họ tên <input name='TH_ChuoiTraCuu' autocomplete = "off">
                        <button type='submit'> Đồng ý </button>
                    </form>`
    res.send(ChuoiHTML)
}

XL_TraCuuNhanVien=(req,res)=>{
    var DanhSach = XuLy.DocDanhSachNhanVien()
    var ChuoiTraCuu=req.query.TH_ChuoiTraCuu
    var DanhSachKq=XuLy.TraCuuNhanVienTheoHoTen(DanhSach,ChuoiTraCuu)
    var ChuoiHTML=XuLy.TaoChuoiHTMLDanhSachNhanVien(DanhSachKq)
    res.send(ChuoiHTML)
}

Express().use(Express.urlencoded())
Express().listen(3000)
Express().get("/", XL_KhoiDong)
Express().get("/TraCuuNhanVien", XL_TraCuuNhanVien)
