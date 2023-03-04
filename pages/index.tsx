export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center space-x-6">
      <a
        href="/firstmethod"
        className="w-[200px] h-[50px] bg-emerald-900 flex justify-center items-center rounded-lg text-white text-xl font-sm"
      >
        First Method
      </a>
      <a
        href="/secondmethod"
        className="w-[200px] h-[50px] bg-emerald-900 flex justify-center items-center rounded-lg text-white text-xl font-sm"
      >
        Second Method
      </a>
    </div>
  );
}
