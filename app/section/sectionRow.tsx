import moment from "moment";
import React from "react";
import Card from "../components/Card";

interface Props {
  matches?: Match[]; // Menambahkan ? jika data tersebut bisa di kosongkan atau nullable
  date?: string;
}

const DateTitle = ({ date }: Props) => {
  const day = moment(date).format("dddd"); // Hanya mengambil harinya saja
  const dateTitle = moment(date).format("Do MMM YYYY"); // Ini format untuk tanggal bulan dan tahun

  return (
    <div>
      <span className='font-bold'>{day}</span>
      <span>, {dateTitle}</span>
    </div>
  );
};

export default function SectionRow({ matches, date }: Props) {
  return (
    <div className='mt-[40px]'>
      <DateTitle date={date} />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[10px]'>
        {matches?.map((mtch, index) => (
          <Card key={index} match={mtch} />
        ))}
      </div>
    </div>
  );
}
