const FS = require("fs")
DocNhanVien=(MaSo, HamXuLy)=>{
    var DuongDan = `C:\\Users\\ASUS\\Desktop\\Nhan_vien\\Nhan_vien\\${MaSo}.json`
    FS.readFile(DuongDan, (loi, ChuoiJSON)=>{
        var NhanVien = JSON.parse(ChuoiJSON)
        HamXuLy(NhanVien)
    })
}
TaoChuoiTXTNhanVien=(NhanVien)=>{
    var ChuoiTXT = `${NhanVien.Ho_ten} ${NhanVien.Ma_so}`
    ChuoiTXT += `\n${NhanVien.Don_vi.Ten} ${NhanVien.Don_vi.Chi_nhanh.Ten}`
    ChuoiTXT += `\n${NhanVien.Gioi_tinh}`
    var SoNgoaiNgu = NhanVien.Danh_sach_Ngoai_ngu.length
    ChuoiTXT += `\nBiet ${SoNgoaiNgu} ngoai ngu: `
    NhanVien.Danh_sach_Ngoai_ngu.forEach(NgoaiNgu => {
        ChuoiTXT += NgoaiNgu.Ten + ' '
    });
    var NgaySinh = new Date(NhanVien.Ngay_sinh)
    ChuoiTXT += `\n${NgaySinh.getDate()-1}/${NgaySinh.getMonth()+1}/${NgaySinh.getFullYear()}`
    var Tuoi = new Date().getFullYear() - NgaySinh.getFullYear()
    ChuoiTXT += ` ${Tuoi} tuoi`
    return ChuoiTXT
}
DocNhanVien("NV_20", (NhanVien)=>{
    var ChuoiTXT = TaoChuoiTXTNhanVien(NhanVien)
    console.log(ChuoiTXT)
})
