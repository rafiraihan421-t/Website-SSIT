import { dataTracking } from "./data.js";

const inputNoDo = document.getElementById("no-do");
const cariButton = document.getElementById("cari-button");
const progressbar = document.querySelector(".progressbar");

// Fungsi cari berdasarkan nomor DO
function getNoDo(noDo) {
  return dataTracking.find((val) => val.nomorDO === noDo);
}

// Fungsi render komponen tracking
function renderProgress(result) {
  if (!result) {
    progressbar.innerHTML = `<p style="color:red;">Nomor DO tidak ditemukan!</p>`;
    return;
  }

  const { nama, status, ekspedisi, tanggalKirim, perjalanan } = result.data;

  const perjalananHTML = perjalanan
    .map(
      (item, index) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <p><strong>${item.keterangan}</strong></p>
          <span>${item.waktu}</span>
        </div>
      </div>
    `
    )
    .join("");

  progressbar.innerHTML = `
    <div class="card">
    <div class="card-identity">
      <h3>${nama}</h3>
      <p>Status: <strong>${status}</strong></p>
      <p>Ekspedisi: ${ekspedisi}</p>
      <p>Tanggal Kirim: ${tanggalKirim}</p>
      </div>
      <div class="timeline">${perjalananHTML}</div>
    </div>
  `;
}

// Event tombol “Cari”
cariButton.addEventListener("click", () => {
  const noDo = inputNoDo.value.trim();
  const result = getNoDo(noDo);
  renderProgress(result);
});
