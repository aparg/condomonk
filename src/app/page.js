import Image from "next/image";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div className="w-full h-[500px]">
            <video
              autoPlay
              width="100%"
              // height="200px"
              src="/home-video/home-video.mp4"
              muted
              className="object-cover max-h-[500px]"
              loop
            ></video>
          </div>
          <div className="mt-16">
            <h3 className="main-title font-extrabold text-4xl text-[#000]">
              Popular Categories
            </h3>
            <Slider />
          </div>

          {/* <div className=""></div> */}
        </section>
      </main>
    </div>
  );
}
