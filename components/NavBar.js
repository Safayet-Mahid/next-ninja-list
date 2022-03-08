import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav>

            <div className="logo">
                <Image src="/logo.jpg" width={110} height={77} alt="no" />
            </div>

            <div>

                <Link href="/">
                    <a >Home  </a>

                </Link>
                <Link href="/about">
                    <a >About  </a>

                </Link>
                <Link href="/ninjas">
                    <a >Ninja Listing</a>

                </Link>
            </div>

        </nav>
    );
};

export default NavBar;