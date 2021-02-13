// 1- Họ tên, mã số
// 2- Tên của đơn vị, tên của chi nhánh 
// 3- Giới tính (0: Nam, khác 0: Nữ)
// 4- Số lượng ngoại ngữ, tên của các ngoại ngữ
// 5- Ngày sinh, tuổi

const { Console } = require("console")
const FS = require("fs")
var DuongDan = `C:\\Users\\ADMIN\\Desktop\\NV_01.json`
var ChuoiJSON = FS.readFileSync(DuongDan)
var NhanVien = JSON.parse(ChuoiJSON)
var ChuoiTXT = `${NhanVien.Ho_ten} ${NhanVien.Ma_so}`
ChuoiTXT += `\n${NhanVien.Don_vi.Ten} ${NhanVien.Don_vi.Chi_nhanh.Ten}`
if (Nhan_vien.Gioi_tinh == '0')
    Chuoi_TXT+=`\nNam`
else
    Chuoi_TXT+=`\nNữ`
var SoNgoaiNgu = NhanVien.Danh_sach_Ngoai_ngu.length
ChuoiTXT += `\nBiet ${SoNgoaiNgu} ngoai ngu: `
NhanVien.Danh_sach_Ngoai_ngu.forEach(NgoaiNgu => {
    ChuoiTXT += NgoaiNgu.Ten + ' '
});
var NgaySinh = new Date(NhanVien.Ngay_sinh)
ChuoiTXT += `\n${NgaySinh.getDate()-1}/${NgaySinh.getMonth()+1}/${NgaySinh.getFullYear()}`
var Tuoi = new Date().getFullYear() - NgaySinh.getFullYear()
ChuoiTXT += `\n${Tuoi} tuoi`
console.log(ChuoiTXT)
