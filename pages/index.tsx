import Image from "next/image";
import checkout from "modules/stripe";

export default function Home() {
  return (
    <div className="w-screen h-screen items-center">
      <div className="text-center text-7xl py-10">My Stripe Implementation</div>
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
            <div className="w-full h-full flex justify-center items-center">
              <button
                className="text-white w-[150px] h-[80px] bg-gray-300 rounded-3xl outline-none text-xl border-2 border-gray-300
                hover:border-white hover:bg-black transition duration-700 ease-in-out"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1Mhv8zHtJX0yPqrtGexNaRXu",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
