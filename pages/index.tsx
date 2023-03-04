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
          <div className="w-1/2 p-4 space-y-4">
            <div className="text-center text-white text-xl">
              Ipad for sale, only $699 !
            </div>
            <div id="billingDetails" className="space-y-4">
              <input
                type="text"
                name="email"
                id="email"
                className="rounded bg-transparent outline-none border border-white px-2 w-[250px]"
                placeholder="john.jones@gmail.com"
              />
              <input
                type="text"
                name="card"
                id="cardDetails"
                className="rounded bg-transparent outline-none border border-white px-2 w-[250px]"
              />
            </div>
            <button
              className="text-white"
              onClick={(() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1Mhv8zHtJX0yPqrtGexNaRXu",
                      quantity: 1,
                    },
                  ],
                });
              })}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
