import "./style.scss";
import { Container } from "@containers";
import LOGO from "@images/Frame.svg";
import { NavLink, Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
        <header className="bg-black py-[73px] ">
      <Container>
       <div className=" flex gap-[98px] items-center">
       <img src={LOGO} alt="img" />
        <ul className="gap-[33px]">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]"
                : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            }
            to={"/"}
          >
            Model S
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeModel3 text-white font-medium text-[16px] py-[4px] px-[16px]"
                : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            }
            to={"/model_3"}
          >
            Model 3
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activemodel_x text-white font-medium text-[16px] py-[4px] px-[16px]"
                : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            }
            to={"/model_x"}
          >
            Model X
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activemodel_y text-white font-medium text-[16px] py-[4px] px-[16px]"
                : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            }
            to={"/model_y"}
          >
            Model Y
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]"
                : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            }
            to={"/solar_roof"}
          >
            Solar Roof
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeHome text-white font-medium text-[16px] py-[4px] px-[16px]"
                : "text-white font-medium text-[16px] py-[4px] px-[16px]"
            }
            to={"/solar_panels"}
          >
            Solar Panel
          </NavLink>
        </ul>
        <div className="flex gap-[28px]">
        <div className="icons">
        <i className="bx bx-search-alt-2 text-white"></i>
        <h1 className=" text-white">Search</h1>
        </div>
        <div className="flex gap-[30px]">


          
        <i className='bx bxs-user text-white bg-[#F4FBFF1A] rounded-full p-[15px]'></i>
        <i className='bx bx-menu text-white bg-[#F4FBFF1A] rounded-full p-[15px]'></i>
        </div>
        </div>
       </div>
      </Container>
        </header>
    <Outlet/>
    </>
  );
};

export default index;
