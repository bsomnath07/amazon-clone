import React, { useState} from "react";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Search } from "./";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserContext } from "../context/UserContext";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  const { user, logout } = useUserContext();
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="min-w-[1000px] w-full sticky top-0 z-50">
      <div className="flex bg-amazonclone text-white md:h-[60px]">
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon Logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">India</div>
          </div>
        </div>

        <div className="flex-grow relative items-center mt-2">
          <Search />
        </div>

        <div className="flex items-center m-4">
          <Link to={user ? "/" : "/login"}>
            <div className="pr-4 pl-4 relative">
              <div className="text-xs xl:text-sm">
                {user ? `Hello, ${user}` : "Hello, Sign-In"}
              </div>
              <div className="text-sm xl:text-base font-bold">
                Accounts & Lists
                <span>
                  <ChevronDownIcon
                    className="h-4 w-4 inline ml-1 text-white"
                    onClick={() => setShowLogoutMenu(!showLogoutMenu)}
                  />
                  {user && showLogoutMenu && (
                    <div className="absolute top-10 right-0 mt-2 bg-white border border-gray-200 shadow-md">
                      <button
                        onClick={handleLogout}
                        className="w-[100px] h-[36px] py-2 text-white bg-black hover:bg-gray-800 px-4"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </Link>
          <Link to="/returnandorder">
            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Returns</div>
              <div className="text-sm xl:text-base font-bold">& Orders</div>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="flex pr-3 pl-4">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
