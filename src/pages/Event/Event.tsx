import { Header } from "../../components/Header/Header";
import { PLayerVideo } from "../../components/PlayerVideo/PLayerVideo";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Event = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <PLayerVideo />
        <Sidebar />
      </main>
    </div>
  );
};
