import { assets } from '../assets/frontend_assets/assets';

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center pt-10 sm:py-0 px-6 sm:px-12">
        <div className="text-[#414141] max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <span className='w-8 md:w-11 h-[2px] bg-[#414141]'></span>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 mt-4 cursor-pointer hover:opacity-80 transition">
            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
            <span className='w-8 md:w-11 h-[1px] bg-[#414141]'></span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          className='w-full h-full object-cover'
          src={assets.bh_hero}
          alt="Hero image"
        />
      </div>
    </div>
  );
}

export default Hero;