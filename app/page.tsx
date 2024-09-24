import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-end min-h-dvh py-10">
      <Header />
      <Main />
    </div>
  );
}
