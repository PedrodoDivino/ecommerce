"use client";
import { Fragment } from "react";

const isAdminView = false;
const isAuthUser = true;
const user = {
  role: "admin",
};
function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
          <ul className="flex flex-col p-4 md:0 mt-4 font-medium border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-spacing-0 bg-white">
            
      </ul>
    </div>
  );
}
export default function Navbar() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="text-black text-2xl font-semibold whitespace-nowrap">
              Ecommerce
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className="text-black">Conta</button>
                <button className="text-black">Carrinho</button>
              </Fragment>
            ) : null}
            {user.role === "admin" ? (
              isAdminView ? (
                <button>Visão do cliente</button>
              ) : (
                <button>Visão do admin</button>
              )
            ) : null}
            {isAuthUser ? <button>Sair</button> : <button>Entrar</button>}
          </div>
        </div>
      </nav>
    </>
  );
}
