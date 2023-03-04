import Image from "next/image";

export default function SecondMethod() {
    return (
    <div className="w-screen h-screen items-center">
      <div className="text-center text-7xl py-10">My Custom Payement Page</div>
      <div className="w-full flex justify-center">
        <div className="w-[800px] h-[500px] bg-black rounded-xl self-center flex">
          <Image
            src="/ipad.png"
            height={1080}
            width={1920}
            alt="ipad"
            className="h-full w-1/2 rounded-l-xl"
          />
          <div className="w-1/2 p-4">
            <div className="text-center text-white text-xl">
              Ipad for sale, only $699 !
            </div>
            <div className="w-full h-full flex justify-center items-center text-white">
                Under Developement
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}