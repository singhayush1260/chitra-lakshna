
import classes from '../../styles/pages/About.module.scss';
import Typewriter from 'typewriter-effect';
const AboutUs=()=>{
    return(
        <div className={classes.page_wrapper}>
        <div className={classes.container}>
        <div className={classes.headings}>
        <h1>About<span>Us</span> </h1>
        </div>    
            <div className={classes.image}>
                <img src='/images/home/banner_image1.jpg'/>
            </div>
            <div className={classes.text}>
             <p>
             Welcome to my online portfolio! 
             <br/>
             I specialize in abstract, caricature, and portrait art,
             and my goal is to create pieces that evoke a range of emotions in viewers. Each artwork 
             reflects my dedication, creativity, and passion for art. 
             <br/>
             I also offer customized commissions,
              working closely with clients to bring their visions to life. 
              <br/>
              Thank you for visiting my website and I hope my art inspires you.
             </p>
            </div>
         </div>
        </div>
    )
}
export default AboutUs;

/*




 Welcome to my online portfolio cum business website!
             <br/>
             I am an artist specializing in abstract, caricature, and portrait artworks. I am thrilled to share my passion with you and showcase my unique style through this platform.
             <br/>
             My journey as an artist began when I was a child, and I used to draw and paint in my free time. Over the years, I have developed my skills and experimented with various art forms, 
             which has led me to find my niche in abstract, caricature, and portrait art. I believe that art is a reflection of one's personality, emotions, and experiences. Therefore, my artworks are not just mere representations but also expressions of my innermost thoughts and feelings.
            My goal is to create art that evokes a range of emotions in my viewers. Whether it is through the bold strokes and vivid colors in my abstract pieces, the whimsical characters and exaggerated features in my caricatures, or the intricate details and lifelike portrayal in my portraits, I aim to captivate and engage my audience.
            As you browse through my online portfolio, you will see the various artworks that I have created over the years. Each piece is a testament to my dedication, creativity, and passion for art. Moreover, I am constantly pushing my limits and exploring new techniques and styles to bring a fresh perspective to my work.
            My website also offers the option to commission customized artworks, where I work closely with clients to bring their visions to life. I believe that art is a collaborative process, and I strive to create artworks that reflect the individuality and unique preferences of each client.
             Thank you for visiting my website, and I hope that my artworks inspire you and bring a little bit of joy and beauty to your life.


*/

/*

<Typewriter onInit={(typewriter)=> {
          typewriter.typeString("Who are we?").pauseFor(1000).deleteAll().start();
          }}
          options={{loop:true}}
          />

 <div className={classes.page_wrapper}>
        <div className={classes.container}>
        <div className={classes.headings}>
            <h1>About<span>Us</span>  </h1>
        </div>    
            <div className={classes.image}>
                <img src='/images/home/banner_image1.jpg'/>
            </div>
            <div className={classes.text}>
             <p>
             Welcome to my online portfolio! 
             <br/>
             I specialize in abstract, caricature, and portrait art,
             and my goal is to create pieces that evoke a range of emotions in viewers. Each artwork 
             reflects my dedication, creativity, and passion for art. 
             <br/>
             I also offer customized commissions,
              working closely with clients to bring their visions to life. 
              <br/>
              Thank you for visiting my website and I hope my art inspires you.
             </p>
            </div>
         </div>
        </div>

*/