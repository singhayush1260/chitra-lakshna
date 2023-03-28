import { useState } from "react";
import Link from "next/link";
import {RxHamburgerMenu,RxCross2} from 'react-icons/rx';
import  classes from '../../styles/components/Navbar.module.scss';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.nav_container}>
          <Link exact href="/" className={classes.nav_logo}>
            chitra Lakshna
          </Link>
          <ul className={click ? `${classes.nav_menu} ${classes.active}`: classes.nav_menu}>
            <li className={classes.nav_item}>
              <Link
                exact
                href="/"
                activeClassName="active"
                className={classes.nav_links}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className={classes.nav_item}>
              <Link
                exact
                href="/gallery"
                activeClassName="active"
                className={classes.nav_links}
                onClick={handleClick}
              >
                Gallery
              </Link>
            </li>
            <li className={classes.nav_item}>
              <Link
                exact
                href="/blog"
                activeClassName="active"
                className={classes.nav_links}
                onClick={handleClick}
              >
                Blog
              </Link>
            </li>
            <li className={classes.nav_item}>
              <Link
                exact
                href="/about-us"
                activeClassName="active"
                className={classes.nav_links}
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className={classes.nav_item}>
              <Link
                exact
                href="/contact"
                activeClassName="active"
                className={classes.nav_links}
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={classes.nav_icon} onClick={handleClick}>
              {click ? <RxCross2/> : <RxHamburgerMenu/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;


/*




import Link from "next/link";
import {useState } from "react";
import  classes from '../../styles/components/Navbar.module.scss';
import {RxHamburgerMenu,RxCross2} from 'react-icons/rx';

const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(true);
    const handleClick=()=>{
        setIsMobile(!isMobile);
        //console.log('clicked')
}
 return(
   <nav className={`${classes.navbar}`}>
     <div className={classes.logo}>
      <Link href="/"><h1>chitra lakshna </h1></Link>
     </div>
     <div className={isMobile?classes.nav_items:classes.mobile_links}>
        <Link href="/" className={classes.nav_item} onClick={handleClick}>Home</Link>
        <Link href="/gallery" className={classes.nav_item} onClick={handleClick}>Gallery</Link>
        <Link href="/blog" className={classes.nav_item} onClick={handleClick}>Blog</Link>
        <Link href="/about-us" className={classes.nav_item} onClick={handleClick}>About</Link>
        <Link href="/contact" className={classes.nav_item} onClick={handleClick}>Contact</Link>
     </div>
     <div className={classes.hamburger} onClick={handleClick}>
        {isMobile?<RxHamburgerMenu/>:<RxCross2/>}
     </div>
   </nav>
 )
}


export default Navbar;


*/