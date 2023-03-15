import Navbar from "./components/Navbar";
import AboutProfile from "./pages/aboutprofile";

export default function Home() {
  return (
    <div className=" text-3xl">
      <div className="h-screen relative	">
        <div className="relative ">
          <div className=" text-white absolute bottom-20 left-10 w-5/12 text-5xl font-bold">
            built environments ought to reflect context, history and culture
          </div>
          <img src="/assets/Picture1.jpg" alt="" className="" />
        </div>
        <Navbar />
      </div>
      <div>
        <AboutProfile />
      </div>
    </div>
  );
}
