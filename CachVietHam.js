const FS = require("fs")
function DocNhanVien(MaSo){
    var DuongDan = `C:\\Users\\ASUS\\Desktop\\Nhan_vien\\Nhan_vien\\${MaSo}.json`
    var ChuoiJSON = FS.readFileSync(DuongDan)
    var NhanVien = JSON.parse(ChuoiJSON)
    return NhanVien
}
function TaoChuoiTXTNhanVien(NhanVien){
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
var NhanVien = DocNhanVien("NV_15")
var ChuoiTXT = TaoChuoiTXTNhanVien(NhanVien)
console.log(ChuoiTXT)
