# 3D Oyunbozan — Vitrin Sitesi

3D baskı çocuk oyuncakları için tek sayfalık vitrin sitesi. Sepet ya da ödeme altyapısı yok: "Satın Al" butonları Shopier'e, kişiye özel sipariş formu WhatsApp'a gider.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sayfa yapısı ve metinler |
| `style.css` | Tasarım |
| `products.js` | **Ayarlar ve ürün listesi. Günlük güncellemeler sadece burada yapılır.** |
| `main.js` | Ürün kartları, filtreler, WhatsApp formu |

## İlk kurulum (bir kere)

`products.js` dosyasının en üstündeki üç değeri doldur:

```js
whatsapp: "905XXXXXXXXX",                      // ülke kodu ile, + olmadan
instagram: "3doyunbozan",
shopier: "https://www.shopier.com/3doyunbozan",
```

## Ürün eklemek / değiştirmek

`products.js` içindeki `URUNLER` listesine yeni bir blok ekle:

```js
{
  ad: "Ahtapot Figür",
  kategori: "figur",          // figur, fidget, anahtarlik, isimlik, egitici
  fiyat: 199,
  aciklama: "Kısa açıklama.",
  foto: "img/ahtapot.jpg",    // kendi fotoğrafın (img klasörüne yükle) ya da Pexels numarası
  shopier: "https://www.shopier.com/ShowProductNew/products.php?id=...",
  etiket: "Yeni",             // boş bırakılabilir
  kisiye: true,               // "Kişiye Özel" butonu görünsün mü
},
```

Şu anki fotoğraflar Pexels'ten alınmış yer tutuculardır. Kendi ürün fotoğrafların hazır olunca `img/` klasörüne yükleyip `foto` alanını değiştir.

## Yayınlama (GitHub Pages)

Repo → **Settings → Pages → Branch: `main` / root → Save**. Birkaç dakika sonra site `https://oktayozguroktayoglu.github.io/3doyunbozan/` adresinde açılır. Alan adı alınca aynı sayfadaki **Custom domain** alanına yazılır.
