import React from 'react'

const HeroSection = () => {
  return (
    <section className=" xl:min-h-screen bg-[url('/assets/images/banner/3.html')]  bg-no-repeat bg-center overflow-hidden">
  <div className="container relative">
    <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[174px] lg:py-28 md:py-20 py-14">
      <h1>
        Classical
        <span className=" text-secondary inline-block bg-[url('https://bestwpware.com/html/tf/images/banner/shape.svg')]  bg-no-repeat bg-bottom">
          Education</span>
        For The Future
      </h1>
      <div className=" plain-text text-gray leading-[30px] mt-8 mb-14">
        It is long established fact that reader distracted by the readable content.
      </div>
      <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0">
        <a href="#" className="btn btn-primary">Learn From Today</a>
      </div>
    </div>
    <div className="imge-box absolute right-[-60px] top-1/2  -translate-y-1/2 hidden xl:block   ">
      <img src="/assets/images/banner/man3.png" alt="" />
    </div>
  </div>
</section>

  
  )
}

export default HeroSection