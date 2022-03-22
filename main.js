//Quản lý tuyển sinh
//Đầu vào
    //Điểm chuẩn HĐ
    //Điểm (Toán, Lý, Hoá)
    //TB 3 môn
    //Xét Điểm 3 Môn (Có 1 môn 0; Break ra luôn)
    //Thuộc khu vực ưu tiên +điểm
    //Thuộc đối tượng ưu tiên +điểm

const KHUVUC_A = 2;
const KHUVUC_B = 1;
const KHUVUC_C = 0.5;

const DOITUONG_1 = 2.5;
const DOITUONG_2 = 1.5;
const DOITUONG_3 = 1;

function diemTB3mon(dtoan,dly,dhoa) {
    var dtoan = +document.getElementById("diem__Toan").value;
    var dly = +document.getElementById("diem__Ly").value;
    var dhoa = +document.getElementById("diem__Hoa").value;
    var dTB = (dtoan+dly+dhoa)/3;
    return dTB;
}

function xetKhuvuc(khuVuc){
    var khuVuc = document.getElementById("diem__Khuvuc").value;
    var diemKhuvuc;
    switch (khuVuc) {
        case "A":
            diemKhuvuc = KHUVUC_A;
            break;
        case "B":
            diemKhuvuc = KHUVUC_B;
            break;
        case "C":
            diemKhuvuc = KHUVUC_C;
            break;
        case "X":
            diemKhuvuc = 0;
            break;
        default:
            break;
    }
    return diemKhuvuc;
}

function xetDoituong(doiTuong) {
    var doiTuong = document.getElementById("diem__Doituong").value;
    var diemDoituong;
    switch (doiTuong) {
        case 1:
            diemDoituong = DOITUONG_1;
            break;
        case 2:
            diemDoituong = DOITUONG_2;
            break;
        case 3:
            diemDoituong = DOITUONG_3;
            break;
        case "X":
            diemDoituong = 0;
            break;
        default:
            break;
    }
    return diemDoituong;
}

document.getElementById("btnBtQLSV").onclick = function () {
    var dtoan = +document.getElementById("diem__Toan").value;
    var dly = +document.getElementById("diem__Ly").value;
    var dhoa = +document.getElementById("diem__Hoa").value;
    var khuVuc = +document.getElementById("diem__Khuvuc").value;
    var doiTuong = +document.getElementById("diem__Doituong").value;
    var hoiDong = +document.getElementById("diem__Hoidong").value;

    var dKv = xetKhuvuc(khuVuc);
    var dDt = xetDoituong(doiTuong);
    var dTrB = diemTB3mon(dtoan, dly, dhoa);

    var dTong = dKv + dDt + dTrB;

    if (dtoan == 0 || dly == 0 || dhoa == 0) {
        var inKQ01 = "FALLED";
    }
    else
    {
        if(dTong >= hoiDong)
        {
            var inKQ01 = "PASSED";
        }
        else
        {
            var inKQ01 = "FALLED";
        }
    }
    document.getElementById("footerBtQLSV").innerHTML= inKQ01;
}

// -------------------------------------------------------------------------------------------------------------------

document.getElementById("btnBtTTTNCN").onclick = function () {
    var thuNhap = +document.getElementById("thunhapNam").value;
    var soNguoi = +document.getElementById("songuoiPhuthuoc").value;
    var thuNhap_chiuThue = thuNhap - 4000000 - soNguoi*1600000;
    var inKQ02;
    if(thuNhap_chiuThue < 60000000)
    {
        var inKQ02 = thuNhap_chiuThue*0.05;
    }
    else if(thuNhap_chiuThue >= 60000000 && thuNhap_chiuThue < 120000000)
    {
        var inKQ02 = thuNhap_chiuThue*0.1;
    }
    else if(thuNhap_chiuThue >= 120000000 && thuNhap_chiuThue < 210000000)
    {
        var inKQ02 = thuNhap_chiuThue*0.15;
    }
    else if(thuNhap_chiuThue >= 210000000 && thuNhap_chiuThue < 384000000)
    {
        var inKQ02 = thuNhap_chiuThue*0.2;
    }
    else if(thuNhap_chiuThue >= 384000000 && thuNhap_chiuThue < 624000000)
    {
        var inKQ02 = thuNhap_chiuThue*0.25;
    }
    else if(thuNhap_chiuThue >= 624000000 && thuNhap_chiuThue < 960000000)
    {
        var inKQ02 = thuNhap_chiuThue*0.3;
    }
    else
    {
        var inKQ02 = thuNhap_chiuThue*0.35;
    }
    document.getElementById("footerBtTTTNCN").innerHTML = "Thuê thu cá nhân phải trả là: " + inKQ02;
}

// -------------------------------------------------------------------------------------------------------------------

const KW50_DAU = 500;
const KW50_KE = 650;
const KW100_KE = 850;
const KW150_KE = 1100;
const KW_CONLAI = 1300;

function tinhTienkWDien (soKW) {
    var tongTien;
    var tienGiaidoan01;
    var tienGiaidoan02;
    var tienGiaidoan03;
    var tienGiaidoan04;
    var tienGiaidoan05;

    if(soKW < 50)
    {
        tienGiaidoan01 = soKW * KW50_DAU;
        tongTien = tienGiaidoan01;
    }
    else if(soKW >= 50 && soKW < 100)
    {
        tienGiaidoan01 = 50 * KW50_DAU;
        tienGiaidoan02 = (soKW - 50) * KW50_KE;
        tongTien = tienGiaidoan01 + tienGiaidoan02;
    }
    else if(soKW >= 100 && soKW < 200)
    {
        tienGiaidoan01 = 50 * KW50_DAU;
        tienGiaidoan02 = 50 * KW50_KE;
        tienGiaidoan03 = (soKW - 100) * KW100_KE;
        tongTien = tienGiaidoan01 + tienGiaidoan02 + tienGiaidoan03;
    }
    else if(soKW >= 200 && soKW < 350)
    {
        tienGiaidoan01 = 50 * KW50_DAU;
        tienGiaidoan02 = 50 * KW50_KE;
        tienGiaidoan03 = 100 * KW100_KE;
        tienGiaidoan04 = (soKW -200) * KW150_KE;
        tongTien = tienGiaidoan01 + tienGiaidoan02 + tienGiaidoan03 + tienGiaidoan04;
    }
    else
    {
        tienGiaidoan01 = 50 * KW50_DAU;
        tienGiaidoan02 = 50 * KW50_KE;
        tienGiaidoan03 = 100 * KW100_KE;
        tienGiaidoan04 = 150 * KW150_KE;
        tienGiaidoan05 = (soKW - 350) * KW_CONLAI;
        tongTien = tienGiaidoan01 + tienGiaidoan02 + tienGiaidoan03 + tienGiaidoan04 + tienGiaidoan05;
    }
    return tongTien;
}

document.getElementById("btnBtTTD").onclick = function () {
    var so_KW = +document.getElementById("so_Kw_dien").value;
    var tongTiendien = tinhTienkWDien(so_KW);
    document.getElementById("footerBtTTD").innerHTML = "Số tiền Điện phải trả là: " + tongTiendien;
}
// -------------------------------------------------------------------------------------------------------------------

const PHI_HOADON_CANHAN = 4.5;
const PHI_HOADON_DOANHNGHIEP = 15;

const PHI_DVCB_CANHAN = 20.5;
const PHI_DVCB_DOANHNGHIEP_10 = 75;
const PHI_DVCB_DOANHNGHIEP_HON_10 = 5;

const PHI_KENH_CANHAN = 7.5;
const PHI_KENH_DOANHNGHIEP = 50;

function tinhTien_Canhan (soLuong_KH_Canhan, soLuong_Kenh_Canhan) {
    var tongTien_Canhan;
    var tongKet01;
    tongTien_Canhan = PHI_HOADON_CANHAN + PHI_DVCB_CANHAN + PHI_KENH_CANHAN*soLuong_Kenh_Canhan;
    tongKet01 = soLuong_KH_Canhan * tongTien_Canhan
    return tongKet01;
}

function tinhTien_Doanhnghiep(soLuong_Daunoi_them, soLuong_Kenh_DN, soLuong_DN) {
    var tongTien_Doanhnghiep;
    var tongKet02;
    tongTien_Doanhnghiep = PHI_HOADON_DOANHNGHIEP + PHI_DVCB_DOANHNGHIEP_10 + PHI_DVCB_DOANHNGHIEP_HON_10*(soLuong_Daunoi_them) + PHI_KENH_DOANHNGHIEP*(soLuong_Kenh_DN);
    tongKet02 = tongTien_Doanhnghiep*(soLuong_DN);
    return tongKet02;
}

document.getElementById("btnBtTTC").onclick = function () {
    var sL_kH_cN = +document.getElementById("soLuong_Kh_Canhan").value;
    var sL_kH_dN = +document.getElementById("soLuong_Kh_Doanhnghiep").value;
    var sL_dN_dN = +document.getElementById("so_Daunoi_KH_Doanhnghiep").value;
    var sL_k_cN = +document.getElementById("so_Kenh_KH_Canhan").value;
    var sL_k_dN = +document.getElementById("so_Kenh_KH_Doanhnghiep").value;

    var sumALLin;
    var sumCN = tinhTien_Canhan(sL_kH_cN,sL_k_cN);
    var sumDN = tinhTien_Doanhnghiep(sL_dN_dN,sL_k_dN,sL_kH_dN);
    sumALLin = sumCN + sumDN;

    document.getElementById("footerBtTTC").innerHTML = "Tổng số tiền phải trả là: " + sumALLin;
}
// -------------------------------------------------------------------------------------------------------------------