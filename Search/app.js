let urun1 = {
    isim : "ACER Swift",
    kategori: "Teknoloji",
    fiyat : 6.219
}

let urun2 = {
    isim : "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat : 15.474
}

let urun3 = {
    isim : "ACER Gaming",
    kategori: "Teknoloji",
    fiyat : 13.999
}
 
let urun4 = {
    isim : "LENOVO V15",
    kategori: "Teknoloji",
    fiyat : 10.999
}
 
let urun5 = {
    isim : "LENOVO V14",
    kategori: "Teknoloji",
    fiyat : 9.999
}
 
 let urunler =  [ urun1, urun2, urun3,urun4, urun5];
 let filtreliUrunler = [];
 let kullaniciUrunIsmi = prompt(" Bir  urun adi gir:");


filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);
urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
        filtreliUrunler.push(urun);
        };
})


 function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
    filtreliUrunler.push(urun);
    };
 });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
  console.log("---------------------------------------------------");        
console.log("|" + urun.isim + "|"+ urun.fiyat + "|" + urun.kategori);
console.log("---------------------------------------------------"); 
    });
}
