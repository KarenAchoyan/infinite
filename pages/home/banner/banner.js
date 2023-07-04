import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Button from "@/pages/Elements/Button/button";

const Banner = () => {
    const [isHeaderVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledDown = prevScrollPos < currentScrollPos;

            setHeaderVisible(isScrolledDown);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div>
            <div className={'banner-slider'}>
                <div className={isHeaderVisible ? "curtain-banner close" : "curtain-banner"}
                     style={{backgroundImage: `url(banner.png)`}}>
                </div>
                <div className="content-banner" style={{backgroundImage: `url(background-banner.png)`}}>
                    <div className="content-banner-info">
                        <div className="left-info">
                            <h1>High Service For Every Customer</h1>
                            <Link href={"/booking"}>
                                <Button>Book Now</Button>
                            </Link>
                        </div>
                        <div className="right-info">
                            <img src={'car.png'} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;