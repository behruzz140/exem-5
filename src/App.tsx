import { Routes, Route } from "react-router-dom";
import {
  Model_3,
  Model_s,
  Model_x,
  Model_y,
  Solar_panels,
  Solar_roof,
} from "@pages";
import { Header } from "@components";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Model_s />} />
          <Route path="/model_3" element={<Model_3 />} />
          <Route path="/model_x" element={<Model_x />} />
          <Route path="/model_y" element={<Model_y />} />
          <Route path="/solar_roof" element={<Solar_roof />} />
          <Route path="/solar_panels" element={<Solar_panels />} />

          <Route
            path="*"
            element={
              <div className="loader loader--style8" title="Xatolik">
                <h1 className="text-5xl">Yana bir marta urunib ko'ring!</h1>
                <svg
                  className="loader"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  href="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="30px"
                  viewBox="0 0 24 30"
                >
                  <rect
                    className="rectLoader"
                    x="0"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    className="rectLoader"
                    x="8"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    className="rectLoader"
                    x="16"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
