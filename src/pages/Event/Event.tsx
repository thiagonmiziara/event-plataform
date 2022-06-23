import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { PLayerVideo } from "../../components/PlayerVideo/PLayerVideo";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? <PLayerVideo lessonSlug={slug} /> : <div className='flex-1' />}
        <Sidebar />
      </main>
    </div>
  );
};
