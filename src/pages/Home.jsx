import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { getConfigData } from "../data/configReader";

export default function Home() {
  const configData = getConfigData();
  return (
    <>
   <Profile />
   <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">{configData.subDesc.heading}</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
        {configData.subDesc.des}
        </p>
      </div>
    </>
  );
}
