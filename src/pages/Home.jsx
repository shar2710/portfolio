import { useState } from "react";
import { HomeInfo } from "../components";

const Home = () => {
  const [currentStage] = useState(1);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
    </section>
  );
};

export default Home;
