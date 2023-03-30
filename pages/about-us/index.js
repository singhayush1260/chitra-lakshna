
import classes from '../../styles/pages/About.module.scss';
const AboutUs=()=>{
    return(
        <div className={classes.page_wrapper}>
         <div className={classes.our_story}>
           <h1>Our <span>Story</span></h1>
           <p>
           Swati and Neha have been connected circa 2018, while Swati was on the way to being a mom 
           and Neha, soon to graduate from Patna Arts &Crafts college. The bond between them grew
            stronger when 'Rudra' who was still a "bun in the oven" was subconsciously bringing them 
            together as a team. They divide their time between their lifestyles
             around their IST locations to create a diverse range of Art, Blog and discuss their dreams. 
             Discussions on the different art forms, exploring with a world of
              experiences is an everyday thing for these charming dreamers. This team aspires to receive
               and share memories and art forms as deep as the legacy of both the historical nations.
               However, the two ladies share one thing in common, their deep rooted societal and cultural heritage. Their homeland, Bihar, nestled in the north of India's tradition and history, has a very ancient historical depth that converges with many civilizations. 
Bihar is known around the world for its origin of two religions, namely Buddhism and Jainism. From Bihar it spread to the entire world. 
We celebrate the fact that world's first university, Nalanda in Takshila was built in 700B.C. 
With such a rich cultural heritage, one cannot stay away from the land which brings together talented local artists that are sure to inspire &educate visitors
           </p>
         </div>
            <div className={classes.our_team}>
            <h2> Meet <span>Our</span> Team </h2>
            <div className={classes.members}>
                   <div className={classes.image}>
                    <img src="/images/team/neha.jpg"/> 
                   </div>
                   <div className={`${classes.image} ${classes.even}`}>
                    <img src="/images/team/swati.jpg"/> 
                    </div>
                    <div className={classes.image}>
                    <img src="/images/team/km.jpg"/> 
                    </div>
                   <div className={`${classes.image} ${classes.even}`}>
                    <img src="/images/team/priya.jpg"/> 
                   </div>
                </div>
           </div>
           </div>

    )
}
export default AboutUs;

/*


import classes from '../../styles/pages/About.module.scss';
import Link from 'next/link';
const AboutUs=()=>{
    return(
        <div className={classes.page_wrapper}>
         <div className={classes.our_story}>
           <h1>Our <span>Story</span></h1>
           <p>
           Swati and Neha have been connected circa 2018, while Swati was on the way to being a mom 
           and Neha, soon to graduate from Patna Arts &Crafts college. The bond between them grew
            stronger when 'Rudra' who was still a "bun in the oven" was subconsciously bringing them 
            together as a team and the rest is History. They divide their time between their lifestyles
             around their IST locations to create a diverse range of Art, Blog and discuss their dreams. 
             Discussions on the different art forms of Saudi and India, exploring with a world of
              experiences is an everyday thing for these charming dreamers. This team aspires to receive
               and share memories and art forms as deep as the legacy of both the historical nations.
           </p>
         </div>
         <div className={classes.our_team}>
            <h2> Meet <span>Our</span> Team </h2>
           <div className={classes.member}>
                <div className={classes.image}>
                    <img src="/images/utils/image_placeholder.jpg"/> 
                </div>
                <div className={classes.bio}>
                <h5>Neha Singh</h5>
                <small>Founder</small>
                 <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi atque
                 dicta neque unde cum fugit nostrum numquam nisi dolor, hic totam dolorem suscipit sint.
                 </p>
                 <Link href="#">Know More</Link>
                </div>
                
           </div>
           <div className={classes.member}>
                 <div className={`${classes.image} ${classes.display_mid}`}>
                    <img src="/images/utils/image_placeholder.jpg"/> 
                </div>
                <div className={classes.bio}>
                <h5>Neha Singh</h5>
                <small>Founder</small>
                <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi atque
                 dicta neque unde cum fugit nostrum numquam nisi dolor, hic totam dolorem suscipit sint.
                 </p>
                 <Link href="#">Know More</Link>
                </div>
                <div className={`${classes.image} ${classes.hide_mid}`}>
                    <img src="/images/utils/image_placeholder.jpg"/> 
                </div>
           </div>
           <div className={classes.member}>
                <div className={classes.image}>
                    <img src="/images/utils/image_placeholder.jpg"/> 
                </div>
                <div className={classes.bio}>
                <h5>Neha Singh</h5>
                <small>Founder</small>
                <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi atque
                 dicta neque unde cum fugit nostrum numquam nisi dolor, hic totam dolorem suscipit sint.
                 </p>
                 <Link href="#">Know More</Link>
                </div>
           </div>
         </div>
        </div>
    )
}
export default AboutUs;






 

*/


 
