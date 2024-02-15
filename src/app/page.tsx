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
    waktu: "2024-02-19T09:41:00",
  },
  {
    mataKuliah: "Pendidikan Agama",
    kodeRuangan: "DARING101",
    hari: 1,
    waktu: "2024-02-19T13:20:00",
  },
  {
    mataKuliah: "Fisika Umum",
    kodeRuangan: "FMA02213",
    hari: 1,
    waktu: "2024-02-19T16:20:00",
  },
  {
    mataKuliah: "Pengantar Kewirausahaan",
    kodeRuangan: "DARING101",
    hari: 2,
    waktu: "2024-02-20T07:00:00",
  },
  {
    mataKuliah: "Bahasa Indonesia",
    kodeRuangan: "DARING101",
    hari: 2,
    waktu: "2024-02-20T09:41:00",
  },
  {
    mataKuliah: "Pengantar Psikologi",
    kodeRuangan: "DARING101",
    hari: 2,
    waktu: "2024-02-20T13:20:00",
  },
  {
    mataKuliah: "Fisika Umum",
    kodeRuangan: "FMA03321",
    hari: 3,
    waktu: "2024-02-21T07:00:00",
  },
  {
    mataKuliah: "Kimia Dasar",
    kodeRuangan: "FMA04315",
    hari: 3,
    waktu: "2024-02-21T13:20:00",
  },
  {
    mataKuliah: "Statistika",
    kodeRuangan: "FMA02203",
    hari: 4,
    waktu: "2024-02-15T07:00:00",
  },
  {
    mataKuliah: "Bahasa Inggris untuk Kimia",
    kodeRuangan: "FMA02205",
    hari: 4,
    waktu: "2024-02-15T16:20:00",
  },
  {
    mataKuliah: "Matematika Kimia",
    kodeRuangan: "FMA10206",
    hari: 5,
    waktu: "2024-02-16T16:20:00",
  },
];

const Home: React.FC = () => {
  const [sortedScheduleData, setSortedScheduleData] = useState<ScheduleItem[]>(
    []
  );

  useEffect(() => {
    const currentDayIndex = new Date().getDay();
    const sortedData = [...scheduleData].sort((a, b) => {
      const adjustedA = (a.hari - currentDayIndex + 7) % 7;
      const adjustedB = (b.hari - currentDayIndex + 7) % 7;
      return adjustedA - adjustedB;
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
