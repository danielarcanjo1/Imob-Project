
import logoCunha from '../../assets/images/logo-cunha.jpg'
import { GoLinkExternal } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";



function TopMenu() {
    return (
        <div className="fixed top-0 left-0 z-10 h-20 w-full bg-white border-none flex flex-row items-center justify-between">
            <div className="flex flex-row justify-center intems-center gap-[150px]">
                <img className="cursor-pointer w-40 h-12" src={logoCunha} alt="Logo Cunha" />
                <div className="bg-black w-100 h-100 flex items-center justify-center gap-[10] cursor-pointer text-white">
                    <span className="text-xl">Módulos</span>
                    <IoIosArrowDown/>
                </div>
                <div className="flex items-center gap-[10px] cursor-pointer">
                    <p>VISITE O SITE </p>
                    <GoLinkExternal />
                </div>
                {/* <div className="ModulesMenuContent ModulesMenuContentVisible" >
                    <div className="Site">
                        <i className="bi bi-browser-chrome"></i>
                        <span>Site</span>
                    </div>
                    <div className="Marketing">
                        <i className="bi bi-cash-coin"></i>
                        <span>Marketing</span>
                    </div>
                    <div className="Crm">
                        <i className="bi bi-cash-coin"></i>
                        <span>CRM de Vendas</span>
                    </div>
                    <div className="Financial">
                        <i className="bi bi-cash-coin"></i>
                        <span>Financeiro</span>
                    </div>
                </div> */}
            </div>

            <div className="flex w-150 h-100 items-center justify-center gap-[200px] mr-32">
                <div className="">
                    <FaUser className='text-xl cursor-pointer'/>
                    
                </div>

                <div className="flex items-center gap-[10px]">
                    <div className="bg-red-800 h-12 w-12 rounded-full cursor-pointer border-2 border-gray-700"></div>
                    <span className="SessionName">Daniel Arcanjo</span>
                </div>
            </div>
        </div>
    );
}

export default TopMenu;