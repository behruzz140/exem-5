import Models from "@images/blackcar.png";
import ModelsText from "@images/Model_Y.png";
import { Carusel } from "@ui";
import { Footer } from "@components";


export default function index() {
  const clas = "activemodel_y"
  return (
    <>
    <section>
      <Carusel img={Models} text={ModelsText} />
    </section>
    <Footer bcg = {clas}/>
    </>
  );
}
