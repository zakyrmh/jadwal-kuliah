// Data JSON
const scheduleData = {
  schedule: [
    {
      mataKuliah: "Praktikum - Pengantar Teknologi Komputer dan Informasi",
      dosen: ["Ronal Hadi", "Fitri Nova"],
      hari: "Senin",
      ruangan: "E202-Labor Perakitan dan Instalasi",
      jamMulai: "07:30",
      jamAkhir: "10:00",
    },
    {
      mataKuliah: "Teori - Algoritma dan Pemrograman",
      dosen: ["Yance Sonatha"],
      hari: "Selasa",
      ruangan: "E210-A",
      jamMulai: "07:30",
      jamAkhir: "10:00",
    },
    {
      mataKuliah: "Praktikum - Algoritma dan Pemrograman",
      dosen: ["Yance Sonatha", "Rozi Meri"],
      hari: "Selasa",
      ruangan: "E301-Labor Pemrograman 1",
      jamMulai: "10:15",
      jamAkhir: "12:00",
    },
    {
      mataKuliah: "Teori - Basis Data Teori",
      dosen: ["Rahmi Putri Kurnia"],
      hari: "Selasa",
      ruangan: "E209-A",
      jamMulai: "13:15",
      jamAkhir: "14:55",
    },
    {
      mataKuliah: "MKU - Agama",
      dosen: ["Rinaldi"],
      hari: "Rabu",
      ruangan: "E210-B",
      jamMulai: "07:30",
      jamAkhir: "09:10",
    },
    {
      mataKuliah: "Teori - Pengantar Teknologi Komputer dan Informasi",
      dosen: ["Ronal Hadi"],
      hari: "Rabu",
      ruangan: "E210-A",
      jamMulai: "13:50",
      jamAkhir: "15:30",
    },
    {
      mataKuliah: "Praktikum - Pengantar Teknologi Komputer dan Informasi",
      dosen: ["Ronal Hadi", "Fitri Nova"],
      hari: "Kamis",
      ruangan: "E202-Labor Perakitan dan Instalasi",
      jamMulai: "07:30",
      jamAkhir: "10:10",
    },
    {
      mataKuliah: "Praktikum - Basis Data",
      dosen: ["Rahmi Putri Kurnia", "Ikhsan"],
      hari: "Kamis",
      ruangan: "E301-Labor Pemrograman 1",
      jamMulai: "10:15",
      jamAkhir: "12:00",
    },
    {
      mataKuliah: "Praktikum - Algoritma dan Pemrograman",
      dosen: ["Yance Sonatha", "Rozi Meri"],
      hari: "Kamis",
      ruangan: "E311-Labor Sistem Informasi",
      jamMulai: "13:15",
      jamAkhir: "15:45",
    },
    {
      mataKuliah: "Teori - Aljabar Linear",
      dosen: ["Rahma Shislina"],
      hari: "Jumat",
      ruangan: "E209-A",
      jamMulai: "07:30",
      jamAkhir: "10:00",
    },
    {
      mataKuliah: "Teori - Sistem Informasi",
      dosen: ["Rita Afyenni"],
      hari: "Jumat",
      ruangan: "C102-A",
      jamMulai: "13:30",
      jamAkhir: "15:10",
    },
    {
      mataKuliah: "Praktikum - Basis Data",
      dosen: ["Rahmi Putri Kurnia", "Ikhsan"],
      hari: "Kamis",
      ruangan: "E311-Labor Sistem Informasi",
      jamMulai: "10:15",
      jamAkhir: "13:50",
    },
  ],
};

// Fungsi untuk menghitung waktu countdown
function getCountdown(targetDay, targetTime) {
  const now = new Date();
  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const targetDayIndex = daysOfWeek.indexOf(targetDay);
  const currentDayIndex = now.getDay();

  let dayDiff = targetDayIndex - currentDayIndex;

  // Jika hari target lebih kecil dari hari sekarang, tambahkan 7 hari untuk minggu berikutnya
  if (dayDiff < 0) {
    dayDiff += 7;
  } else if (dayDiff === 0) {
    // Jika hari sama, pastikan waktunya belum lewat
    const [targetHours, targetMinutes] = targetTime.split(":").map(Number);
    if (
      targetHours < now.getHours() ||
      (targetHours === now.getHours() && targetMinutes <= now.getMinutes())
    ) {
      dayDiff += 7;
    }
  }

  // Set target date dengan mengatur hari dan jam
  const [hours, minutes] = targetTime.split(":").map(Number);
  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + dayDiff,
    hours,
    minutes
  );
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) return "Waktu sudah berlalu";

  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return `${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`;
}

// Fungsi untuk mendapatkan total waktu countdown dalam milidetik
function getCountdownMilliseconds(targetDay, targetTime) {
  const now = new Date();
  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const targetDayIndex = daysOfWeek.indexOf(targetDay);
  const currentDayIndex = now.getDay();

  let dayDiff = targetDayIndex - currentDayIndex;

  // Jika hari target lebih kecil dari hari sekarang, tambahkan 7 hari untuk minggu berikutnya
  if (dayDiff < 0) {
    dayDiff += 7;
  } else if (dayDiff === 0) {
    // Jika hari sama, pastikan waktunya belum lewat
    const [targetHours, targetMinutes] = targetTime.split(":").map(Number);
    if (
      targetHours < now.getHours() ||
      (targetHours === now.getHours() && targetMinutes <= now.getMinutes())
    ) {
      dayDiff += 7;
    }
  }

  // Set target date dengan mengatur hari dan jam
  const [hours, minutes] = targetTime.split(":").map(Number);
  const targetDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + dayDiff,
    hours,
    minutes
  );
  return targetDate - now;
}

// Fungsi untuk menampilkan data ke dalam HTML
function displaySchedule(data) {
  const scheduleDiv = document.getElementById("schedule");

  // Urutkan jadwal berdasarkan countdown terkecil
  data.schedule.sort(
    (a, b) =>
      getCountdownMilliseconds(a.hari, a.jamMulai) -
      getCountdownMilliseconds(b.hari, b.jamMulai)
  );

  let htmlContent = "<div class='flex flex-col items-center gap-y-4'>";

  data.schedule.forEach((item, index) => {
    // Membuat ID unik untuk elemen countdown
    const countdownId = `countdown-${index}`;

    htmlContent += `
            <div class="bg-[#31363F] rounded-md shadow-md p-3 w-full max-w-[500px]">
                <h3 class="text-[#EEEEEE] text-center font-semibold mb-2">${
                  item.mataKuliah
                }</h3>
                <div class="flex items-center justify-between">
                    <div class="text-[#EEEEEE]">
                        <p>${item.dosen.join(", ")}</p>
                        <p>${item.hari}</p>
                        <p>${item.ruangan}</p>
                        <p>${item.jamMulai} - ${item.jamAkhir}</p>
                    </div>
                    <div class="font-medium">
                        <span class="text-[#EEEEEE]" id="${countdownId}">${getCountdown(
      item.hari,
      item.jamMulai
    )}</span>
                    </div>
                </div>
            </div>
        `;
  });

  htmlContent += "</div>";
  scheduleDiv.innerHTML = htmlContent;

  // Memperbarui countdown setiap detik
  data.schedule.forEach((item, index) => {
    const countdownElement = document.getElementById(`countdown-${index}`);
    setInterval(() => {
      countdownElement.textContent = getCountdown(item.hari, item.jamMulai);
    }, 1000);
  });
}

// Langsung gunakan data JSON yang didefinisikan di atas
displaySchedule(scheduleData);
