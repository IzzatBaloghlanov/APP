const hi_App = alert("Salam Xoş Gəlmisiniz !!!");

const onlineApp = prompt("Ne sifaris vermek isteyirsiniz? ");
let mehsul1 = "telefon";
let mehsul2 = "Tv";
let mehsul3 = "Noutbook";

if (onlineApp == mehsul1 || onlineApp == mehsul2 || onlineApp == mehsul3) {
  alert(" Sizin secdiyiniz mehsul Onlayn magazamizda movzuddur...  ");

  let budget = Number(prompt("Büdcənizi daxil edin: "));
  if (onlineApp == mehsul1) {
    if (budget <= 350 && budget >= 200) {
      alert(
        "Siz giriş səviyyəli telefonlara baxa bilərsiniz: Tecno, Infinix, Vivo."
      );
    } else if (budget > 350 && budget <= 700) {
      alert(
        "Siz orta seqment telefonlara baxa bilərsiniz: Xiaomi, Honor, Huawei."
      );
    } else if (budget >= 1000) {
      alert("Siz yüksək seqment telefonlara baxa bilərsiniz: Samsung, iPhone.");
    } else {
      alert("Büdcəniz yeterli qeder deyil., Teesuff ki..");
    }
  }
  if (onlineApp == mehsul2) {
    if (budget <= 1000 && budget >= 500) {
      alert(
        "Siz giriş səviyyəli TV-lərə baxa bilərsiniz: TLC, HISSENSE, TAUBE."
      );
    } else if (budget > 1000 && budget <= 1500) {
      alert(
        "Siz orta seqment TV-lərə baxa bilərsiniz: XIAOMI TV, Sharp, LG NANOCELL."
      );
    } else if (budget >= 2000) {
      alert(
        "Siz yüksək seqment TV-lərə baxa bilərsiniz: SAMSUNG QLED, Toshiba, Sony."
      );
    } else {
      alert("Büdcəniz yeterli qeder deyil., Teesuff ki..");
    }
  }

  if (onlineApp == mehsul3) {
    if (budget >= 300 && budget <= 600) {
      alert(
        "Siz giriş səviyyəli noutbook-lara baxa bilərsiniz: Lenovo LP, HP."
      );
    } else if (budget > 600 && budget <= 1000) {
      alert("Siz orta seqment noutbook-lara baxa bilərsiniz: Acer, Dell");
    } else if (budget >= 1000 && budget <= 5000) {
      alert(
        "Siz yüksək seqment noutbook-lara baxa bilərsiniz: Apple, Asus, Legion."
      );
    } else {
      alert("Büdcəniz yeterli qeder deyil., Teesuff ki..");
    }
  }
} else {
  alert("Təəssüf ki, bu məhsul mövcud deyil.");
}
