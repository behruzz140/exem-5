import Models from "@images/whitecar.png";
import ModelsText from "@images/Model_X.png";
import {Carusel} from "@ui"
import { Footer } from "@components";


export default function index() {
  const bcg = "activemodel_x"
  return (
    <>
    <section>
            <Carusel img= {Models} text={ModelsText}/>
    </section>
    <Footer bcg = {bcg}/>
    </>
  )
}
