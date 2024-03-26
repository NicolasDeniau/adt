import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {}

const Navbar = (props: Props) => {
    const flexBetwenn = "flex items-center justify-between";
    
  return (
    <nav>
        <div
        className={`${flexBetwenn} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetwenn} mx-auto w-5/6`}>
                <div className={`${flexBetwenn} w-full gap-16`}>
                    {/* côté gauche */}
                    <img alt="logo" src={Logo} />
                    {/* côté droit */}
                    <div className={`${flexBetwenn} w-full`}>
                        <div className={`${flexBetwenn} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Classes</p>
                            <p>Contact Us</p>
                        </div>
                        <div className={`${flexBetwenn} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar