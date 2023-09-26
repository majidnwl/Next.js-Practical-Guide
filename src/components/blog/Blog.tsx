import React from 'react'

const Blog = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src="/assets/images/all-img/b-s-1.png" alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src="/assets/images/svg/user3.svg" alt="" />
                    <span>Edumim</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src="/assets/images/svg/calender.svg" alt="" />
                    <span>3 21 Feb, 22</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src="/assets/images/icon/clock.svg" alt="" />
                    <span>3 Min Read</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src="/assets/images/svg/comments.svg" alt="" />
                    <span>02 Comments</span>
                  </a>
                </div>
                <h3>
                  Learn At Your Own Pace, with Lifetime Access on Mobile &amp; Desktop
                </h3>
                <p className="mt-6">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                  by injected humour, or randomised words which don’t look even slightly believable. As students across the globe continue
                  to see their learning plans significantly.
                </p>
                <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src="/assets/images/svg/q.svg" alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Education is one of the most powerful aspects of life. Education and learning allow us to make sense of the world
                    around us, the world inside of us, and where we fit within the world.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white" />
                    <span className=" text-xl font-semibold">Rosalina D. Jackson</span>
                  </div>
                </blockquote>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                  by injected humour, or randomised words which don’t look even slightly believable. As students across the globe continue
                  to see their learning plans significantly.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src="/assets/images/all-img/b-s-2.png" alt="" />
                  <img src="/assets/images/all-img/b-s-3.png" alt="" />
                </div>
                <h4 className="text-2xl mb-4">Education Is About Academic Excellence And Cultural Diversity Learning Community</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                  by injected humour, or randomised words which don’t look even slightly believable.
                </p>
                <ul className="list-disc marker:text-secondary space-y-4 mt-6">
                  <li >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a href="#" className=" px-3 py-1  bg-white rounded hover:text-primary">
                        Business
                      </a>
                    </li>
                    <li>
                      <a href="#" className=" px-3 py-1  bg-white rounded hover:text-primary">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#" className=" px-3 py-1  bg-white rounded hover:text-primary">
                        Design
                      </a>
                    </li>
                  </ul>
                  <ul className="flex space-x-3 xl:justify-end items-center  ">
                    <li className=" text-black font-semibold">Share On:</li>
                    <li>
                      <a href="#" className="flex h-8 w-8">
                        <img src="/assets/images/icon/fb.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex h-8 w-8">
                        <img src="/assets/images/icon/tw.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex h-8 w-8">
                        <img src="/assets/images/icon/pn.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex h-8 w-8">
                        <img src="/assets/images/icon/ins.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog