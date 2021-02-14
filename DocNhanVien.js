// 1- Họ tên, mã số
// 2- Tên của đơn vị, tên của chi nhánh 
// 3- Giới tính (0: Nam, khác 0: Nữ)
// 4- Số lượng ngoại ngữ, tên của các ngoại ngữ
// 5- Ngày sinh, tuổi

const FS = require("fs")
var DuongDan = `H:\\NMCNPM\\1988106-Nguyen_Hai_Trung-Bai_tap_2\\Du_lieu\\Nhan_vien\\NV_12.json`
var ChuoiJSON = FS.readFileSync(DuongDan)
var NhanVien = JSON.parse(ChuoiJSON)
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
console.log(ChuoiTXT)
