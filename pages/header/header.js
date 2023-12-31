import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Drawer} from 'antd';
import MobileMenu from './mobileMenu';
import Link from 'next/link';
import Button from '@/pages/Elements/Button/button';

const Header = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <div>
      <header>
        <div className="container-header">
          <div className="logo">
            <Link href="/home">
              <img src="logo.png" alt=""/>
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li className={router.pathname === '/home' ? 'active' : ''}>
                <Link href="/home">Home</Link>
              </li>
              <li>
                Service
                <div className="dropdown-service">
                  <div className="dropdown-service-content">
                    <div className="item-dropdown">
                      <p>
                        Dropdown <span className="arrow">&#9654;</span>
                      </p>
                      <div className="sub-dropdown">
                        <div className="sub-dropdown-content">
                          <div className="item-dropdown">Subdropdown Item 1</div>
                          <div className="item-dropdown">Subdropdown Item 2</div>
                          <div className="item-dropdown">Subdropdown Item 3</div>
                        </div>
                      </div>
                    </div>
                    <div className="item-dropdown">
                      <p>Dropdown</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Dropdown</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Dropdown</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className={router.pathname === '/about' ? 'active' : ''}>
                <Link href="/about">About us</Link>
              </li>
              <li className={router.pathname === '/contact' ? 'active' : ''}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={router.pathname === '/vehicles' ? 'active' : ''}>
                <Link href="/vehicles">VEHICLES</Link>
              </li>
              <li className={router.pathname === '/blog' ? 'active' : ''}>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="booking-header">
            <Link href="/booking">
              <Button>Book Now</Button>
            </Link>
          </div>
          <div className="mobile-version">
            <span className="mobile-menu-btn" onClick={showDrawer}>
              <button>Open</button>
            </span>
          </div>
          <Drawer title="Infinite" placement="right" closable={false} onClose={onClose} visible={visible}>
            <MobileMenu/>
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Header;
