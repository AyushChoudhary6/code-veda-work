import React, { useEffect,useState } from 'react';
import Marquee from 'react-fast-marquee';

const Sponsors = () => {

  const[sponsors,setSponsors]=useState([]);
  const [brahmaSponsors, setBrahmaSponsors] = useState([]);
  const [vishnuSponsors, setVishnuSponsors] = useState([]);
  const [shivaSponsors, setShivaSponsors] = useState([]);

  
  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const response = await fetch('/data/sponsor.json');
        const data = await response.json();
        const allSponsors = data.flatMap(tier => tier.sponsors);

        setSponsors(allSponsors); // full data

        // extract individual tiers
        setBrahmaSponsors(data.find(t => t.tier === "Brahma Tier")?.sponsors || []);
        setVishnuSponsors(data.find(t => t.tier === "Vishnu Tier")?.sponsors || []);
        setShivaSponsors(data.find(t => t.tier === "Shiva Tier")?.sponsors || []);
      } catch (error) {
        console.log("API fetch failed", error);
      }
    };

    fetchSponsor();
  }, []);

  return (
    <>
    <p className=' bg-[url(/om.png)] bg-repeat bg-blend-soft-light bg-contain text-5xl p-10 vedic-title bg-[#3b2e1e]  text-center !text-[#f3e9c6]
    ' 
     >Our Sponsors</p>

     <div className='w-screen h-auto  flex flex-row mt-6 flex-wrap' >
     <Marquee speed={60} gradient={false} pauseOnHover={false}>
      
      {/* Section One  */}
      {sponsors.map((all,index)=>(
        <div key={index} className='h-96 w-72  m-4 bg-[url(/gate.png)]  bg-center object-contain p-4 flex justify-center items-center  transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer' >
        <div className='h-[50%] w-[58%] mt-16 flex flex-col gap-2 '>
          <div className='h-[70%] w-full  rounded-md'><img src={all.logo} className='h-full w-full object-contain'/></div>
          <div className='h-[30%] w-full text-center font-semibold '>{all.name}</div>
        </div>
        </div>

      ))}
      </Marquee>
     </div>
     


     {/*Section Two */}

     <div className='p-6 sm:p-8 md:p-10 w-full h-auto'>
  <h1 className='text-3xl sm:text-4xl md:text-5xl !text-[#f3e9c6] vedic-title bg-[#3b2e1e] inline-block px-4 py-2 rounded-md bg-[url(/om.png)] bg-repeat bg-blend-soft-light bg-cover'>
    Our Tiers
  </h1>


  {/*Brahma Tier */}
<div className='scroll-animate'>
  <p className='text-2xl sm:text-3xl text-[#3b2e1e] vedic-title mt-10 underline'>Brahma Tier</p>
  <p className='text-xl sm:text-2xl text-[#3b2e1e] mt-2'>Our principal sponsors who make the entire CodeVeda hackathon possible.</p>
  <div className='w-full flex flex-wrap gap-6'>
  {brahmaSponsors.map((sponsor, index) => (
    <div
      key={index}
      className='h-auto w-56 mt-5 rounded-md flex flex-col gap-4 shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]'
    >
    <div className='w-full h-[80%] background rounded-md '><img src={sponsor.logo} className='h-full w-full object-contain p-2'/></div>
    <p className='w-full h-[20%]rounded-md block text-center font-semibold text-lg pb-3'>{sponsor.name}</p>
  
    </div>
  ))}
  </div>
</div>


{/*Vishnu Tier */}
<div className='scroll-animate'>
 <p className='text-2xl sm:text-3xl text-[#3b2e1e] vedic-title mt-10 underline'>Vishnu Tier</p>
 <p className='text-xl sm:text-2xl text-[#3b2e1e] mt-2'>Major supporters who help sustain our innovation ecosystem.</p>
 <div className='w-full flex flex-wrap gap-6'>
  {vishnuSponsors.map((sponsor, index) => (
    <div
      key={index}
      className='h-64 w-56 mt-5 rounded-md shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]'
    >
      <div className='w-full h-[80%] background rounded-md '><img src={sponsor.logo} className='h-full w-full object-contain p-2'/></div>
      <p className='w-full h-[20%]rounded-md block text-center font-semibold text-lg pb-3'>{sponsor.name}</p>
    </div>
  ))}
</div>
</div>

{/*Shiva Tier */}
<div className="scroll-animate'">
 <p className='text-2xl sm:text-3xl text-[#3b2e1e] vedic-title mt-10 underline'>Shiva Tier</p>
 <p className='text-xl sm:text-2xl text-[#3b2e1e] mt-2'>Valued supporters providing essential resources and expertise.</p>
< div className='w-full flex flex-wrap gap-6'>
  {shivaSponsors.map((sponsor, index) => (
    <div
      key={index}
      className='h-64 w-56 mt-5 rounded-md shadow-xl transition-transform transform hover:scale-105 duration-200 ease-in-out hover:shadow-[0_4px_15px_rgba(0,0,0,0.6)]'
    >
       <div className='w-full h-[80%] background rounded-md '><img src={sponsor.logo} className='h-full w-full object-contain p-2'/></div>
       <p className='w-full h-[20%]rounded-md block text-center font-semibold text-lg pb-3'>{sponsor.name}</p>
    </div>
  ))}
 </div>
 </div>

  {/* Why Sponsor Us Section */}
  <p className='text-3xl sm:text-4xl md:text-5xl text-[#3b2e1e] vedic-title pt-28 block text-center'>Why Sponsor Us</p>
  <div className='w-full flex flex-col lg:flex-row gap-6 mt-6'>
    <div className='lg:w-[70%] w-full pt-6 text-base sm:text-lg md:text-xl poppins'>
      Sponsoring us is more than just placing your logo on a banner — it’s an opportunity to align your brand with a mission that matters. By partnering with us, you gain direct exposure to a highly engaged audience, while demonstrating your commitment to community impact, innovation, and positive change. Your support helps us deliver meaningful experiences, reach underserved audiences, and drive lasting results. In return, you'll benefit from increased brand visibility, stronger customer loyalty, and the goodwill that comes from supporting a cause that resonates. Together, we can make a real difference — and ensure your brand stands out for all the right reasons.
    </div>

    <div className='lg:w-[30%] w-full h-64 shadow-xl rounded-md'></div>
  </div>
</div>

    </>
  );
};

export default Sponsors;