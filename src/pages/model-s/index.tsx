import "./style.scss";
import Models from "@images/models.png";
import ModelsText from "@images/modelStext.png";
import { Carusel } from "@ui";
import { Footer } from "@components";

const index = () => {
  const bcg = "activeHome"
  return (
    <>
      <section>
        <Carusel img={Models} text={ModelsText} />
      </section>
      <Footer bcg={bcg}/>
    </>
  );
};

export default index;
