
import classes from '../../styles/pages/BlogPost.module.scss';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import {CiFacebook, CiTwitter} from 'react-icons/ci';
const BlogPost=()=>{

//const currentURL=window.location.href;

    return(
        <div className={classes.page_wrapper}>
            <div className={classes.container}>
               <div className={classes.post_metaData}>
               <h1>How to use 3B pencil?</h1>
               <p>Ayush Singh</p>
               <p>12th March, 2023</p>
               <p className={classes.social_share}> 
               <FacebookShareButton url={""}><CiFacebook/></FacebookShareButton>   
               <TwitterShareButton  url={""}><CiTwitter/></TwitterShareButton>
               </p>
               </div>
                <div className={classes.post_body}>
                <img src='/images/utils/image_placeholder.jpg'/>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur animi numquam rerum ea,
                 commodi aliquid beatae deserunt repudiandae nobis iure sunt exercitationem quaerat dolor
                  eos? Iusto quas maxime ducimus atque. Veritatis nostrum a tenetur dolores quidem, omnis 
                  consectetur cupiditate. Possimus rerum eos magni nostrum reprehenderit voluptas vel aliquam
                   dolores atque.
                </p>
                </div>               
            </div>
        </div>
    )
}
export default BlogPost;
