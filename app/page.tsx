import Header from "./components/Header";
import ChatBox from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-end min-h-screen py-10">
      <Header />
      <ChatBox />
    </div>
  );
}
