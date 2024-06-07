import Link from "next/link";
import React from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

const ScheduleTime = () => {
  return (
    <div className="mb-24">
      <div className="title text-5xl  my-10 text-start text-white playfair">
        Schedule a Call
      </div>

      <Link href="/market-news/schedule" className="no-underline">
        <div className="back text-white">
          {/* back icons with text  */}
          <div className="back-icon flex flex-row items-center gap-2">
            <i class="bi bi-chevron-left text-lg "></i>
            <div className="back-text ">Back</div>
          </div>
        </div>
      </Link>

      {/* main part start from here  */}
      <div className="flex flex-row gap-20 my-8 text-white">
        {/* left part calender */}

        <div className="left-part w-[70%]">
          <div className="header flex justify-between items-center">
            <div className="title font-medium text-2xl ">
              Select a Date & Time
            </div>
            <div className="subtitle text-sm  flex flex-row font-extralight items-center gap-3">
              Timezone: Eastern Daylight Saving Time (EDT)
              <i class="bi bi-chevron-down text-lg "></i>
            </div>
          </div>
          <hr className="bg-gray-400 relative bottom-2" />
          {/* data picker */}
          <div inline-datepicker data-date="02/25/2022"></div>
        </div>

        {/* right part form */}
        <div className="right-part w-[30%]">Right</div>
      </div>
    </div>
  );
};

export default ScheduleTime;

<script>
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize the datepicker
            const datepickerElement = document.getElementById('datepicker-inline-example');
            new Datepicker(datepickerElement, {
                inline: true,
                date: datepickerElement.getAttribute('data-date')
            });
        });
    </script>
