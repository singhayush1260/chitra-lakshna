
import classes from '../../styles/pages/About.module.scss';
const AboutUs = () => {
    return (
        <div className={classes.page_wrapper}>
            <div className={classes.our_story}> 
                <h1>Our <span>Story</span></h1>
                <p>
                As a multifaceted artist and art historian, I seamlessly blend creative
                expression with scholarly exploration. My palette extends beyond the canvas,
                intertwining the strokes of my artistic endeavors with a profound understanding 
                of the historical and cultural contexts that shape the world of art. With a keen
                 eye for aesthetics, I navigate the realms of creation and interpretation, seamlessly 
                 weaving narratives that bridge the past and the present. In addition to my artistic 
                 pursuits, I offer a range of services that reflect my dedication to the arts.
                  These include <span>custom commissions</span> , <span>art consultancy</span> , and insightful art history blogs,
                   all clearly outlined on my website.
                </p>
            </div>
            {/* <div className={classes.our_team}>
                <h2> Meet <span>Our</span> Team </h2>
                <div className={classes.members}>
                    <div className={classes.image}>
                        <img src="/images/team/neha.jpg" />
                    </div>
                    <div className={`${classes.image} ${classes.even}`}>
                        <img src="/images/team/swati.jpg" />
                    </div>
                    <div className={classes.image}>
                        <img src="/images/team/km.jpg" />
                    </div>
                    <div className={`${classes.image} ${classes.even}`}>
                        <img src="/images/team/priya.jpg" />
                    </div>
                </div>
            </div> */}
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



