import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PLayerVideo } from "../../components/PlayerVideo";
import { Sidebar } from "../../components/Sidebar";

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
