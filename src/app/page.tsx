"use client";
import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";

interface ScheduleItem {
  mataKuliah: string;
  kodeRuangan: string;
  hari: number;
  waktu: string;
}

const scheduleData: ScheduleItem[] = [
  {
    mataKuliah: "Kimia Dasar",
    kodeRuangan: "FMA02202",
    hari: 1,
    waktu: "09:41:00",
  },
  {
    mataKuliah: "Pendidikan Agama",
    kodeRuangan: "DARING101",
    hari: 1,
    waktu: "13:20:00",
  },
  {
    mataKuliah: "Fisika Umum",
    kodeRuangan: "FMA02213",
    hari: 1,
    waktu: "16:20:00",
  },
  {
    mataKuliah: "Pengantar Kewirausahaan",
    kodeRuangan: "DARING101",
    hari: 2,
    waktu: "07:00:00",
  },
  {
    mataKuliah: "Bahasa Indonesia",
    kodeRuangan: "DARING101",
    hari: 2,
    waktu: "09:41:00",
  },
  {
    mataKuliah: "Pengantar Psikologi",
    kodeRuangan: "DARING101",
    hari: 2,
    waktu: "13:20:00",
  },
  {
    mataKuliah: "Fisika Umum",
    kodeRuangan: "FMA03321",
    hari: 3,
    waktu: "07:00:00",
  },
  {
    mataKuliah: "Kimia Dasar",
    kodeRuangan: "FMA04315",
    hari: 3,
    waktu: "13:20:00",
  },
  {
    mataKuliah: "Statistika",
    kodeRuangan: "FMA02203",
    hari: 4,
    waktu: "07:00:00",
  },
  {
    mataKuliah: "Bahasa Inggris untuk Kimia",
    kodeRuangan: "FMA02205",
    hari: 4,
    waktu: "16:20:00",
  },
  {
    mataKuliah: "Matematika Kimia",
    kodeRuangan: "FMA10206",
    hari: 5,
    waktu: "16:20:00",
  },
];

// Fungsi untuk mendapatkan tanggal berdasarkan hari
function getFutureDate(day: number): string {
  const now = new Date();
  const today = now.getDay();
  const difference = day - today + (day <= today ? 7 : 0); // Tambahkan 7 jika hari sudah berlalu
  const futureDate = new Date(now.setDate(now.getDate() + difference));
  return futureDate.toISOString().split("T")[0];
}

// Fungsi untuk mengubah format waktu
function formatTime(time: string): string {
  const date = new Date();
  const [hours, minutes, seconds] = time.split(":");
  date.setHours(Number(hours), Number(minutes), Number(seconds));
  return date.toISOString().split("T")[1];
}

// Memanipulasi data
const manipulatedData: ScheduleItem[] = scheduleData.map((item) => {
  const futureDate = getFutureDate(item.hari);
  const formattedTime = formatTime(item.waktu);
  const datetime = `${futureDate}T${formattedTime}`;
  return {
    ...item,
    waktu: datetime,
  };
});

console.log(manipulatedData);

const Home: React.FC = () => {
  const [sortedScheduleData, setSortedScheduleData] = useState<ScheduleItem[]>(
    []
  );

  useEffect(() => {
    const sortedData = [...manipulatedData].sort((a, b) => {
      const dateA = new Date(a.waktu).getTime();
      const dateB = new Date(b.waktu).getTime();

      return dateA - dateB;
    });

    setSortedScheduleData(sortedData);
  }, []);
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-4 mt-4">
        <h1 className="font-bold text-2xl text-center mb-2">Jadwal Kuliah</h1>
        {sortedScheduleData.map((item, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.mataKuliah}</h2>
              <p>Kode Ruangan : {item.kodeRuangan}</p>
              <div className="card-actions justify-end">
                <CountdownTimer targetDate={item.waktu} />
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
