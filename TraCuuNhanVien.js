// npm install express
const Express = require("express")
const XuLy = require("./XL_3L")
var UngDung = Express()
UngDung.use(Express.urlencoded())
UngDung.listen(3000)
UngDung.get("/",XL_KhoiDong)
UngDung.get("/TraCuuNhanVien",XL_TraCuuNhanVien)

XL_KhoiDong=(req,res)=>{
    var ChuoiHTML = `<div>Tra cứu nhân viên (GET) </div>
                      <form action = '/TraCuuNhanVien' method='get'>
                      Họ tên <input name ='TH_ChuoiTraCuu'>
                      <button type ='submit'> Đồng ý </button>
                      </form>`
    res.send(ChuoiHTML)
}

XL_TraCuuNhanVien=(req,res)=>{
    var ChuoiTraCuu = req.query.TH_ChuoiTraCuu
    var DanhSach=XuLy.DocDanhSachNhanVien()
    var DanhSachKq=XuLy.TraCuuNhanVienTheoHoTen(DanhSach,ChuoiTraCuu)
    var ChuoiHTML=XuLy.TaoChuoiHTMLDanhSachNhanVien(DanhSachKq)
    res.send(ChuoiHTML)
}