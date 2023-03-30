import Banner from "@/src/sections/Banner";
import Categories from "@/src/sections/Categories";
import Contact from "@/src/sections/Contact";
import WelcomeMessage from "@/src/sections/WelcomeMessage";

const Home=()=>{
  return(
    <>
    <Banner/>
    <WelcomeMessage/>
    <Categories/>
    <Contact/>
    </>
  )
}
export default Home;