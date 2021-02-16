const FS = require("fs")
DocDanhSachNhanVien=()=>{
    var DuongDanThuMuc = `C:\\Users\\ASUS\\Desktop\\Nhan_vien\\Nhan_vien`
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
TraCuuNhanVienTheoHoTen=(DanhSach, ChuoiTraCuu)=>{
    var DanhSachKq = []
    ChuoiTraCuu = ChuoiTraCuu.toUpperCase()
    DanhSach.forEach(NhanVien => {
        var TenNhanVien = NhanVien.Ho_ten.toUpperCase()
        if(TenNhanVien.includes(ChuoiTraCuu))
            DanhSachKq.push(NhanVien)
    })
    return DanhSachKq
}
TaoChuoiTXTDanhSachNhanVien=(DanhSach)=>{
    var ChuoiTXT = `Danh sach ${DanhSach.length} nhan vien\n`
    var ChiSo = 0
    DanhSach.forEach(nv => {
        ChiSo++
        ChuoiTXT += ChiSo + " - " + nv.Ho_ten + " - " + nv.Don_vi.Ten + " - " + nv.Don_vi.Chi_nhanh.Ten
        ChuoiTXT += " - " + nv.Danh_sach_Ngoai_ngu.map(x => x.Ten).join(" ") + "\n"
    })    
    return ChuoiTXT
}
var DanhSach = DocDanhSachNhanVien()
var ChuoiTraCuu='Anh'
var DanhSachKq=TraCuuNhanVienTheoHoTen(DanhSach,ChuoiTraCuu)
var ChuoiTXT=TaoChuoiTXTDanhSachNhanVien(DanhSachKq)
console.log(ChuoiTXT)
