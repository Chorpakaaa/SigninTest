"use client";
import { Button } from "@/components/ui/button";
import CustomerStore from "@/stores/customer";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
const NavbarComponents = () => {
  const Customer = CustomerStore((state) => state.customer);
  console.log("this cu", Customer);
  return (
    <>
      <div className="h-[80px] flex justify-around items-center bg-white drop-shadow-md">
        <Link href="/">
          <div className="size-16 rounded-full bg-black text-white font-semibold flex justify-center items-center">
            LOGO
          </div>
        </Link>
        <Link href="/">
          <div className="text-[20px] underline font-semibold text-[#2A4B6A]">
            HOME
          </div>
        </Link>
        {Customer.isLogin ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex flex-row justify-center items-center space-x-2">
                  {!!Customer.image && (
                    <div className="h-[64px] w-[64px] rounded-full relative">
                      <Image
                        src={URL.createObjectURL(Customer.image)}
                        alt="avatar"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  )}
                  <ChevronDown/>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex justify-center flex-col items-center">
                {!!Customer.image && (
                  <div className="h-[64px] w-[64px] rounded-full relative">
                    <Image
                      src={URL.createObjectURL(Customer.image)}
                      alt="avatar"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                <DropdownMenuLabel>{Customer.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="border-t-[1px] border-black w-full my-2"></div>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link href={"/signin"}>
              <Button
                variant="outline"
                className="rounded-full bg-[#2A4B6A] text-white font-semibold text-[16px] w-[141px] h-[48px] drop-shadow-md"
              >
                Sign in
              </Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
export default NavbarComponents;
