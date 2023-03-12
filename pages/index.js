import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* nav bar */}
      <div className="bg-blue-400 border-4 border-green-700">
        <h1 className="text-xs sm:text-base md:text-lg lg:text-3xl font-bold underline text-left">
          Portfolio
        </h1>
        <ul className="text-right">
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>

      {/* image as background with my picture */}
      <Image
        src=""
        alt="abdiaziz"
        width="1750"
        height="100"
        className="border-4 border-yellow-200"
      />

      {/* personal info */}
      <div className="bg-sky-200 border-4 border-sky-400 italic">
        <p className="decoration-1">Name : abdiaziz abdullahi</p>
        <p className="">Email : naadirinho@gmail.com</p>
        <p className="">Phone : 252619765666</p>
        <p className="">Location : mogadishu-somalia</p>
      </div>
    </div>
  );
}
