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
TraCuuNhanVienTheoDonVi=(DanhSach, ChuoiTraCuu)=>{
    var DanhSachKq = []
    ChuoiTraCuu = ChuoiTraCuu.toUpperCase()
    DanhSach.forEach(NhanVien => {
        if (NhanVien.Don_vi.Ten.toUpperCase().includes(ChuoiTraCuu))
        DanhSachKq.push(NhanVien)
    })
    return DanhSachKq
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
TraCuuNhanVienTheoNgoaiNgu=(DanhSach, ChuoiTraCuu)=>{
    var DanhSachKq = []
    ChuoiTraCuu = ChuoiTraCuu.toUpperCase()
    DanhSach.forEach(NhanVien => {
        var ChuoiNgoaiNgu = NhanVien.Danh_sach_Ngoai_ngu.map(NgoaiNgu=>NgoaiNgu.Ten).join(" ")
        if (ChuoiNgoaiNgu.toUpperCase().includes(ChuoiTraCuu))
        DanhSachKq.push(NhanVien)
    })   
    return DanhSachKq
}
module.exports = {
    DocDanhSachNhanVien: DocDanhSachNhanVien,
    TraCuuNhanVienTheoHoTen: TraCuuNhanVienTheoHoTen,
    TaoChuoiTXTDanhSachNhanVien: TaoChuoiTXTDanhSachNhanVien,
    TraCuuNhanVienTheoDonVi: TraCuuNhanVienTheoDonVi,
    TraCuuNhanVienTheoChiNhanh: TraCuuNhanVienTheoChiNhanh,
    TraCuuNhanVienTheoNgoaiNgu: TraCuuNhanVienTheoNgoaiNgu
}