import classes from '../../styles/sections/Contact.module.scss';
import {AiFillBehanceCircle,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import Link from 'next/link';
const Contact=()=>{
    return(
        <section className={classes.contact} id="contact">
         <h1>Connect</h1>
         <Link href="https://www.behance.net/9a436856"><AiFillBehanceCircle/></Link>
         <Link href="https://www.instagram.com/nehatch_art/?igshid=MTIzZWQxMDU%3D"><AiFillInstagram/></Link>
        </section>
    )
}
export default Contact;