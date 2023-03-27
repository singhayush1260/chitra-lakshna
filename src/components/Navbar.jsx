import Link from "next/link";
import { useEffect, useState } from "react";
import  classes from '../../styles/components/Navbar.module.scss';
import {RxHamburgerMenu,RxCross2} from 'react-icons/rx';
import { useRouter } from "next/router";

const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(true);
    const router=useRouter();
    const handleClick=()=>{
        setIsMobile(!isMobile);
        console.log('clicked')
}

// useEffect(()=>{
//   console.log('outside')
// if(isMobile){
//   console.log('inside')
//   setIsMobile(!isMobile);
// }
// },[router.asPath])

 return(
   <nav className={`${classes.navbar}`}>
     <div className={classes.logo}>
      <Link href="/"><h1>chitra lakshna </h1></Link>
     </div>
     <div className={isMobile?classes.nav_items:classes.mobile_links}>
        <Link href="/" className={classes.nav_item}>Home</Link>
        <Link href="/gallery" className={classes.nav_item}>Gallery</Link>
        <Link href="/blog" className={classes.nav_item}>Blog</Link>
        <Link href="/about-us" className={classes.nav_item}>About</Link>
        <Link href="/contact" className={classes.nav_item}>Contact</Link>
     </div>
     <div className={classes.hamburger} onClick={handleClick}>
        {isMobile?<RxHamburgerMenu/>:<RxCross2/>}
     </div>
   </nav>
 )
}


export default Navbar;