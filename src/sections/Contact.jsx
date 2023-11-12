import classes from '../../styles/sections/Contact.module.scss';
import {AiFillInstagram,AiFillYoutube,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import Link from 'next/link';
const Contact=()=>{
    return(
        <section className={classes.contact} id="contact">
         <h1>Connect</h1>
         <Link href="https://m.facebook.com/home.php"><FaFacebook/></Link>
         <Link href="https://www.instagram.com/chitralakshana_studio?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><AiFillInstagram/></Link>
         <Link href="https://www.youtube.com/@Chitralakshana"><AiFillYoutube/></Link>
         <Link href="https://twitter.com/NehaSin24363044?t=4L1K0WS9xw_qOY_wPXkSAg&s=08"><AiFillTwitterCircle/></Link>
         <Link href="https://www.linkedin.com/me?_l=en_US"> <AiFillLinkedin/></Link>
        </section>
    )
}
export default Contact;