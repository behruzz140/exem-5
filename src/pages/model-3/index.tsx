import { Carusel } from "@ui";
import Redcar from "@images/redcar.png";
import Redtext from "@images/redtext.png";
import { Footer } from "@components";



export default function index() {
  const bcg = "activeModel3"
  return (
    <>
    <section>
      <Carusel img={Redcar} text={Redtext}/>
    </section>
    <Footer bcg= {bcg}/>
    </>

  );
}
