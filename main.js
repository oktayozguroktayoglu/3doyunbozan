(function () {
  "use strict";

  const RENKLER = [
    { ad: "Kırmızı", kod: "#e63946" },
    { ad: "Turuncu", kod: "#ff7a2f" },
    { ad: "Sarı", kod: "#ffd23f" },
    { ad: "Yeşil", kod: "#3ccf8e" },
    { ad: "Mavi", kod: "#2b8cff" },
    { ad: "Mor", kod: "#8e5cf7" },
    { ad: "Pembe", kod: "#ff7eb6" },
    { ad: "Beyaz", kod: "#ffffff" },
    { ad: "Siyah", kod: "#222222" },
  ];
  const MAX_RENK = 4;

  /* ---------- Yardımcılar ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  function fotoUrl(foto, w) {
    if (typeof foto === "number" || /^\d+$/.test(String(foto))) {
      return `https://images.pexels.com/photos/${foto}/pexels-photo-${foto}.jpeg?auto=compress&cs=tinysrgb&w=${w || 700}`;
    }
    return foto;
  }
  function waLink(mesaj) {
    const base = `https://wa.me/${SITE.whatsapp}`;
    return mesaj ? `${base}?text=${encodeURIComponent(mesaj)}` : base;
  }
  function tl(n) {
    return new Intl.NumberFormat("tr-TR").format(n);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---------- Genel linkler ---------- */
  $$(".js-shopier").forEach((a) => (a.href = SITE.shopier));
  $$(".js-instagram").forEach((a) => (a.href = `https://instagram.com/${SITE.instagram}`));
  $$(".js-wa").forEach((a) => (a.href = waLink("Merhaba, 3D Oyunbozan ürünleri hakkında bilgi almak istiyorum.")));
  $$(".js-wa-bulk").forEach((a) => (a.href = waLink("Merhaba, toplu sipariş için teklif almak istiyorum.\nKurum / etkinlik: \nÜrün: \nAdet: \nTarih: ")));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Mobil menü ---------- */
  const nav = $("#nav");
  const menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("#nav a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Ürünler ---------- */
  const productsEl = $("#products");
  const filtersEl = $("#filters");

  function kart(u) {
    const satinAl = u.shopier || SITE.shopier;
    const ozel = u.kisiye
      ? `<a href="#kisiye-ozel" class="btn btn-ghost js-ozel" data-urun="${esc(u.ad)}">Kişiye Özel</a>`
      : "";
    return `
      <article class="card">
        <div class="card-media">
          <img src="${esc(fotoUrl(u.foto))}" alt="${esc(u.ad)}" loading="lazy">
          ${u.etiket ? `<span class="card-tag">${esc(u.etiket)}</span>` : ""}
        </div>
        <div class="card-body">
          <h3>${esc(u.ad)}</h3>
          <p>${esc(u.aciklama)}</p>
          <div class="card-foot">
            <span class="price">${tl(u.fiyat)} <small>₺</small></span>
            <div class="card-actions">
              ${ozel}
              <a href="${esc(satinAl)}" class="btn btn-primary" target="_blank" rel="noopener">Satın Al</a>
            </div>
          </div>
        </div>
      </article>`;
  }

  function listele(kat) {
    const liste = kat === "hepsi" ? URUNLER : URUNLER.filter((u) => u.kategori === kat);
    productsEl.innerHTML = liste.map(kart).join("");
    $$(".js-ozel", productsEl).forEach((a) =>
      a.addEventListener("click", () => {
        $("#fProduct").value = a.dataset.urun;
      })
    );
  }

  const kullanilan = new Set(URUNLER.map((u) => u.kategori));
  filtersEl.innerHTML = KATEGORILER
    .filter((k) => k.id === "hepsi" || kullanilan.has(k.id))
    .map((k, i) => `<button class="filter${i === 0 ? " active" : ""}" role="tab" aria-selected="${i === 0}" data-kat="${k.id}">${esc(k.ad)}</button>`)
    .join("");
  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    $$(".filter", filtersEl).forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-selected", String(b === btn));
    });
    listele(btn.dataset.kat);
  });
  listele("hepsi");

  /* ---------- Kişiye özel form ---------- */
  const select = $("#fProduct");
  select.innerHTML =
    `<option value="">Seçiniz</option>` +
    URUNLER.map((u) => `<option value="${esc(u.ad)}">${esc(u.ad)}</option>`).join("") +
    `<option value="Başka bir şey">Başka bir şey (nota yaz)</option>`;

  const swatchesEl = $("#swatches");
  swatchesEl.innerHTML = RENKLER.map((r, i) => `
    <div class="swatch">
      <input type="checkbox" id="r${i}" value="${r.ad}">
      <label for="r${i}"><i style="background:${r.kod}"></i>${r.ad}</label>
    </div>`).join("");
  swatchesEl.addEventListener("change", (e) => {
    const secili = $$("input:checked", swatchesEl);
    if (secili.length > MAX_RENK) {
      e.target.checked = false;
      hata(`En fazla ${MAX_RENK} renk seçebilirsin.`);
    } else {
      hata("");
    }
  });

  const dateInput = $("#fDate");
  dateInput.min = new Date().toISOString().split("T")[0];

  const errEl = $("#formError");
  function hata(msg) { errEl.textContent = msg; }

  $("#customForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const ad = f.ad.value.trim();
    const urun = f.urun.value;
    if (!ad) { hata("Lütfen adını yaz."); f.ad.focus(); return; }
    if (!urun) { hata("Lütfen bir ürün seç."); f.urun.focus(); return; }
    hata("");

    const renkler = $$("input:checked", swatchesEl).map((i) => i.value);
    const tarih = f.tarih.value ? new Date(f.tarih.value).toLocaleDateString("tr-TR") : "";
    const satirlar = [
      "Merhaba, kişiye özel sipariş vermek istiyorum.",
      "",
      `👤 Ad: ${ad}`,
      `🧸 Ürün: ${urun}`,
      f.metin.value.trim() && `✏️ Yazı: ${f.metin.value.trim()}`,
      renkler.length && `🎨 Renkler: ${renkler.join(", ")}`,
      `🔢 Adet: ${f.adet.value || 1}`,
      tarih && `📅 İstenen tarih: ${tarih}`,
      f.not.value.trim() && `📝 Not: ${f.not.value.trim()}`,
    ].filter(Boolean);

    window.open(waLink(satirlar.join("\n")), "_blank", "noopener");
  });
})();
