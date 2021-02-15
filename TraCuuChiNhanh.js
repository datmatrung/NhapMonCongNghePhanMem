const FS = require("fs")
DocDanhSachNhanVien=()=>{
    var DuongDanThuMuc = `C:\\Users\\ADMIN\\Desktop\\Nhan_vien\\Nhan_vien`
    var DanhSachTenTapTin = FS.readdirSync(DuongDanThuMuc)
    var DanhSach = []
    DanhSachTenTapTin.forEach(ten => {
        var DuongDan = DuongDanThuMuc + "\\" + ten
        var ChuoiJSON = FS.readFileSync(DuongDan)
        var NhanVien = JSON.parse(ChuoiJSON)
        DanhSach.push(NhanVien)
    })
    return DanhSach
}
TraCuuNhanVienTheoChiNhanh=(DanhSach, ChuoiTraCuu)=>{
    var DanhSachKq = []
    ChuoiTraCuu = ChuoiTraCuu.toUpperCase()
    DanhSach.forEach(NhanVien => {
        if (NhanVien.Don_vi.Chi_nhanh.Ten.toUpperCase().includes(ChuoiTraCuu))
        DanhSachKq.push(NhanVien)
    })
    return DanhSachKq
}
TaoChuoiTXTDanhSachNhanVien=(DanhSach)=>{
    var ChuoiTXT = `Danh sach ${DanhSach.length} nhan vien\n`
    var ChiSo = 0
    DanhSach.forEach(nv => {
        ChiSo++
        ChuoiTXT += ChiSo + " " + nv.Ho_ten + " " + nv.Don_vi.Chi_nhanh.Ten + "\n"
    })    
    return ChuoiTXT
}
var DanhSach = DocDanhSachNhanVien()
var ChuoiTraCuu = 'Chi nhánh A'
var DanhSachKq = TraCuuNhanVienTheoChiNhanh(DanhSach,ChuoiTraCuu)
var ChuoiTXT = TaoChuoiTXTDanhSachNhanVien(DanhSachKq)
console.log(ChuoiTXT)