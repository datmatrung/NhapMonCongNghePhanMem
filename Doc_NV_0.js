const FS=require("fs")
var Ma_so="NV_1"
var Thu_muc_Du_lieu='Du_lieu'
var Thu_muc_Nhan_vien=Thu_muc_Du_lieu+"\\Nhan_vien"
var Duong_dan = `${Thu_muc_Nhan_vien}\\${Ma_so}.json`
var Chuoi_JSON = FS.readFileSync(Duong_dan)
var Nhan_vien = JSON.parse(Chuoi_JSON);
var Chuoi_TXT=''
// 1- Họ tên - Mã số
Chuoi_TXT+=Nhan_vien.Ho_ten + " " + Nhan_vien.Ma_so
// 2- Tên đơn vị - chi nhánh 
Chuoi_TXT+=`\n${Nhan_vien.Don_vi.Ten} ${Nhan_vien.Don_vi.Chi_nhanh.Ten}`
// 3- Giới tính (0: nam, khác 0: nữ)
if (Nhan_vien.Gioi_tinh == '0')
    Chuoi_TXT+="\nNam"
else
    Chuoi_TXT+="\nNữ"
// 4- Số lượng ngoại ngữ, tên các ngoại ngữ
var So_Ngoai_ngu = Nhan_vien.Danh_sach_Ngoai_ngu.length
Chuoi_TXT +=`\n${So_Ngoai_ngu} ngoại ngữ: `
Nhan_vien.Danh_sach_Ngoai_ngu.forEach(Ngoai_ngu => {
    Chuoi_TXT += Ngoai_ngu.Ten + " "
})
// 5- Ngày sinh, năm sinh, tuổi
var Ngay_sinh= new Date(Nhan_vien.Ngay_sinh)
var Chuoi_Ngay_sinh=`${Ngay_sinh.getDate()}-${Ngay_sinh.getMonth()+1}-${Ngay_sinh.getFullYear()}`
var Nam_sinh=Ngay_sinh.getUTCFullYear()
var Tuoi=new Date().getFullYear()-Nam_sinh
Chuoi_TXT += `\n${Chuoi_Ngay_sinh} ${Nam_sinh} ${Tuoi} tuổi`
console.log(Chuoi_TXT)