import Sidebar from "./components/Sidebar";
import Main from "./components/Main";


export default function Home() {
  return (
    <div className="min-h-svh bg-[#f8f4f0] flex  text-md text-grey-900">
      <Sidebar/>
      <Main/>
    </div>
  );
}
