/* ============================================================
   3D OYUNBOZAN — SİTE AYARLARI VE ÜRÜN LİSTESİ
   Siteyi güncellemek için sadece bu dosyayı düzenlemen yeterli.
   ============================================================ */

const SITE = {
  // WhatsApp numarası: ülke kodu ile, boşluksuz, + olmadan (örn. 905321234567)
  whatsapp: "905XXXXXXXXX",
  // Instagram kullanıcı adı (@ olmadan)
  instagram: "3doyunbozan",
  // Shopier mağaza ana sayfası
  shopier: "https://www.shopier.com/3doyunbozan",
};

/* Kategoriler: id ürünlerdeki "kategori" alanıyla eşleşmeli */
const KATEGORILER = [
  { id: "hepsi", ad: "Hepsi" },
  { id: "figur", ad: "Figürler" },
  { id: "fidget", ad: "Fidget" },
  { id: "anahtarlik", ad: "Anahtarlık" },
  { id: "isimlik", ad: "İsimlik" },
  { id: "egitici", ad: "Eğitici" },
];

/* Ürünler
   - foto: Pexels fotoğraf numarası YA DA kendi fotoğrafının yolu (örn. "img/ejderha.jpg")
   - shopier: o ürünün Shopier linki (boş bırakırsan mağaza ana sayfasına gider)
   - etiket: kartın köşesindeki küçük rozet (boş bırakılabilir)
   - kisiye: true ise "Kişiye özel yaptır" butonu da görünür
*/
const URUNLER = [
  {
    ad: "Eklemli Ejderha",
    kategori: "figur",
    fiyat: 349,
    aciklama: "Tek parça basılır, her eklemi oynar. 4 renge kadar seçenekli.",
    foto: 11964991,
    shopier: "",
    etiket: "Çok satan",
    kisiye: true,
  },
  {
    ad: "Dinozor İkilisi",
    kategori: "figur",
    fiyat: 299,
    aciklama: "T-Rex ve Triceratops, oyun ve masa süsü için ikili set.",
    foto: 8014531,
    shopier: "",
    etiket: "",
    kisiye: false,
  },
  {
    ad: "Pop-It Fidget",
    kategori: "fidget",
    fiyat: 149,
    aciklama: "Gökkuşağı renklerinde, cebe sığan stres oyuncağı.",
    foto: 8617568,
    shopier: "",
    etiket: "Yeni",
    kisiye: false,
  },
  {
    ad: "Üçlü Spinner",
    kategori: "fidget",
    fiyat: 129,
    aciklama: "Rulmanlı, sessiz ve uzun süre dönen spinner.",
    foto: 1330638,
    shopier: "",
    etiket: "",
    kisiye: false,
  },
  {
    ad: "Sevimli Anahtarlık Seti",
    kategori: "anahtarlik",
    fiyat: 99,
    aciklama: "Okul çantası ve anahtar için minik karakterler. İsim eklenebilir.",
    foto: 1194036,
    shopier: "",
    etiket: "İsimli",
    kisiye: true,
  },
  {
    ad: "İsimli Kapı Yazısı",
    kategori: "isimlik",
    fiyat: 279,
    aciklama: "Çocuk odası kapısı için renkli harflerle isim tabelası.",
    foto: 7335359,
    shopier: "",
    etiket: "Kişiye özel",
    kisiye: true,
  },
  {
    ad: "Renkli Topaç",
    kategori: "egitici",
    fiyat: 119,
    aciklama: "Klasik topaç, çok renkli ve dengeli gövde.",
    foto: 158838,
    shopier: "",
    etiket: "",
    kisiye: false,
  },
  {
    ad: "Sayı Blokları",
    kategori: "egitici",
    fiyat: 229,
    aciklama: "Saymayı ve renkleri öğreten, birbirine geçen blok seti.",
    foto: 311269,
    shopier: "",
    etiket: "",
    kisiye: false,
  },
];
