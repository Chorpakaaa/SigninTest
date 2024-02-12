import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TravelList = [
  {
    imageName: "/image/121.jpg",
  },
  {
    imageName: "/image/256.jpg",
  },
  {
    imageName: "/image/956.jpg",
  },
  {
    imageName: "/image/745.jpg",
  },
];

const ContentComponents = () => {
  return (
    <>
      <div className=" max-w-[1592px] w-full mx-auto my-[30px] flex flex-col space-y-[30px]">
        <div className=" flex flex-col text-[32px] font-bold text-[#142B41] justify-center items-center">
          Lorem ipsum
        </div>
        <div className="grid grid-cols-4 gap-4">
          {TravelList.map((name, index) => {
            return (
              <Card className="w-full" key={index}>
                <div className="flex flex-col bg-white rounded-lg drop-shadow-md">
                  <div className="flex flex-col w-full relative  h-[272px]">
                    <Image
                      src={name.imageName}
                      alt="bannerHeadline"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex flex-col h-1/4 justify-center items-center">
                    <div className="my-[16px] text-[18px] font-bold text-[#142B41]">
                      Lorem ipsum
                    </div>
                    <div className="text-[18px] text-[#142B41]">
                      One-stop Platform community for
                    </div>
                    <div className="text-[18px] text-[#142B41]">
                      Agents and Operator in Thailand.
                    </div>
                    <Button
                      variant="outline"
                      className="flex rounded-full bg-[#2A4B6A] text-white font-semibold text-[16px] w-[139px] h-[48px] my-[16px] drop-shadow-md"
                    >
                      Buy package
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ContentComponents;
