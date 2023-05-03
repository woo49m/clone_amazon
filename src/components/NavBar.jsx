import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";

function NavBar() {
  return (
    <div>
      <header className="min-w-[1000px]">
        <div className="flex bg-amazonclone text-white h-[60px]">
          {/*left*/}
          <div className="flex items-center m-4">
            <img
              className="h-[35px] w-[100px] m-2"
              src="../images/amazon.png"
            ></img>
            <div className=" pr-4 pl-4">
              <div className=" text-xs xl:text-sm">Deliver to</div>
              <div className=" text-sm xl:text-base font-bold">
                United Kingdom
              </div>
            </div>
          </div>

          {/*middle*/}
          <div className="flex grow items-center relative">
            <Search />
          </div>

          {/*right*/}
          <div className="flex items-center m-4">
            <div className=" pr-4 pl-4">
              <div className=" text-xs xl:text-sm">Hello, sign in</div>
              <div className=" text-sm xl:text-base font-bold">
                Accounts & Lists
              </div>
            </div>
            <div className=" pr-4 pl-4">
              <div className=" text-xs xl:text-sm">Returns</div>
              <div className=" text-sm xl:text-base font-bold">& Orders</div>
            </div>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </div>
        </div>
        <div className="flex bg-amazonclone-light_blue text-white text-xs xl:text-sm space-x-3 p-2 pl-6">
          <div>Today's Deals</div>
          <div>Customer Service</div>
          <div>Register</div>
          <div>Gift Cards</div>
          <div>Sell</div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
