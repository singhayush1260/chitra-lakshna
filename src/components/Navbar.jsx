import Link from "next/link";
import { useState } from "react";
import  classes from '../../styles/components/Navbar.module.scss';
import {RxHamburgerMenu,RxCross2} from 'react-icons/rx';

const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(true);
    const handleClick=()=>{
        setIsMobile(!isMobile);
        console.log('clicked')
}
 return(
   <nav className={`${classes.navbar} montserrat desktop`}>
     <div className={classes.logo}>
      <Link href="/"><h1>chitra lakshna </h1></Link>
     </div>
     <div className={isMobile?classes.nav_items:classes.mobile_links}>
        <Link href="/" className={classes.nav_item}>Home</Link>
        <Link href="/gallery" className={classes.nav_item}>Gallery</Link>
        <Link href="/blog" className={classes.nav_item}>Blog</Link>
        <Link href="/about" className={classes.nav_item}>About</Link>
        <Link href="#contact" className={classes.nav_item}>Contact</Link>
     </div>
     <div className={classes.hamburger} onClick={handleClick}>
        {isMobile?<RxHamburgerMenu/>:<RxCross2/>}
     </div>
   </nav>
 )
}


export default Navbar;