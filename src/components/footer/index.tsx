import "./style.scss";
import { Container } from "@containers";

const index = (bcg: any) => {
  return (
    <footer className="pb-[50px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-[108px]">
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] text-center font-medium ">
                396 mi
              </h4>
              <p className="text-white text-[12px] text-center font-medium ">
                Range (EPA est.)
              </p>
            </div>
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] text-center font-medium ">
                1.99s
              </h4>
              <p className="text-white text-[12px] text-center font-medium ">
                0-60 mph*
              </p>
            </div>
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] text-center font-medium ">
                200mph
              </h4>
              <p className="text-white text-[12px] text-center font-medium ">
                Top Speed†
              </p>
            </div>
            <div className="w-[120px]">
              <h4 className="text-white text-[24px] text-center font-medium ">
                1,020hp
              </h4>
              <p className="text-white text-[12px] text-center font-medium ">
                Peak Power
              </p>
            </div>
          </div>

          <div className="orderBtn">
            <button
              className={
                bcg.bcg + " flex items-center justify-center gap-3 px-[20px] py-[10px] relative"
              }
            >
              Order Now 
              <span>
              <i className="fa-solid fa-angles-right"></i>
             
              </span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default index;
