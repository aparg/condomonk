import PropertySlider from "@/components/PropertySlider";
import Slider from "@/components/Slider";
import { getSalesData } from "../../actions/getSalesData";

export default async function Home() {
  const residentialData = await getSalesData();
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
            <div className="flex">
              <h3 className="main-title font-extrabold text-4xl text-[#000]">
                Popular Categories
              </h3>
              {/* <img src="/curved-arrow.png" /> */}
            </div>
            <Slider />
          </div>
          <div className="mt-16">
            <h3 className="main-title font-extrabold text-4xl text-[#000]">
              Top Resale Homes
            </h3>
          </div>
          <PropertySlider data={residentialData} />
        </section>
      </main>
    </div>
  );
}
