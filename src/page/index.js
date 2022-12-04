import { About } from "./sections/about";
import { Footer } from "./sections/footer";
import { Greetings } from "./sections/greetings";
import { Header } from "./sections/header";
import { Projects } from "./sections/Projects";
import { SkillsContent } from "./sections/skills";
import { UserInfo } from "./sections/userinfo";




const Frontpage = () => {

    return (<>
        <Header />
        <Greetings />
        <About />
        <SkillsContent />
        <Projects />
        <UserInfo />
        <Footer />
      </>);
  }
  
  export default Frontpage;
