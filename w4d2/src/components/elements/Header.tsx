import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="site-header  home-one-header top-0 w-full z-[999] rt-sticky">
            <div className="main-header py-6">
                <div className="container">
                    <div className=" flex items-center justify-between">
                        <Link href="/" className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] ">
                            <img src="/assets/images/logo/logo.svg" alt="" /></Link>
                        <div className="flex items-center flex-1">
                            <div className="flex-1 main-menu relative mr-[74px]">
                                <ul className="menu-active-classes">
                                    <li className=" menu-item-has-children">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Contacts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-none flex space-x-[18px]">
                                <div className=" hidden lg:block">
                                    <a href="#" className="btn btn-primary py-[15px] px-8">Register</a>
                                </div>
                                <div className=" block   lg:hidden">
                                    <button type="button" className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                  menu-click">
                                        {/* <iconifyIcon icon="cil:hamburger-menu" rotate="180deg" /> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header