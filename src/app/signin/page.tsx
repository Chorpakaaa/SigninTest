"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImagePlus } from "lucide-react";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { InputIcon } from "@/components/ui/InputWithIcon";
import { PasswordInput } from "@/components/ui/InputPassword";
import CustomerStore from "@/stores/customer";
import Image from "next/image";
import { Eye, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Signin() {
  const setValue = CustomerStore((state) => state.setValueCustomer);
  const Customer = CustomerStore((state) => state.customer);
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter()

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValue(name, value);
  };
  const handleValueSelect = (value: string, key: string) => {
    setValue(key, value);
  };
  const handleSubmit = () => {
    if (Customer.password !== Customer.cfpassword) {
      toast({
        title: "Error",
        description: "Password not match",
        variant: "destructive",
      });
      return;
    }
    if (!Customer.image) {
      toast({
        title: "Error",
        description: "Please upload image",
        variant: "destructive",
      });
      return;
    }
    if(Customer.email === ""){
      toast({
        title: "Error",
        description: "Email not empty",
        variant: "destructive",
      });
      return;
    }
    setValue("isLogin", true);
    router.push('/')
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
    }
  };
  console.log(Customer);
  return (
    <div className="flex justify-center items-center drop-shadow-lg my-[80px]">
      <Card className="w-[1128px]">
        <CardHeader>
          <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden  flex flex-col justify-center items-center size-[150px] rounded-full border-[1px] border-solid border-black my-[24px] relative">
              {!!Customer.image ? (
                <>
                  <Image
                    src={URL.createObjectURL(Customer.image)}
                    fill
                    className="object-cover"
                    alt="avatar"
                  />
                  <div className=" absolute hover:bg-black/30 w-full h-full flex justify-center items-center hover:opacity-100 opacity-0">
                    <span className="w-1/2 flex justify-center items-center">
                      <Eye color="white" onClick={() => setOpen(true)} />
                    </span>
                    <span className="w-1/2 flex justify-center items-center">
                      <Trash2
                        color="white"
                        onClick={() => setValue("image", undefined)}
                      />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <ImagePlus className="w-[45px] h-[45px] font-bold text-[#093264]" />
                  <input
                    type="file"
                    name="image"
                    className=" h-full w-full absolute opacity-0"
                    onChange={handleUploadImage}
                  />
                </>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center bg-white w-full">
            <form>
              <div className=" grid  grid-cols-3  gap-4 ">
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Email</Label>
                  <InputIcon
                    icon={Mail}
                    placeholder="Enter your Email"
                    name="email"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Password</Label>
                  <InputIcon
                    type="password"
                    name="password"
                    onChange={handleChangeValue}
                    icon={LockKeyhole}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Confirmed Password</Label>
                  <PasswordInput
                    name="cfpassword"
                    icon={LockKeyhole}
                    onChange={handleChangeValue}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="border-b-[1px] border-[#D9D9D9] my-[25px] col-span-3"></div>
                <Label className="text-[20px] text-[#255FA8] font-bold col-span-3">
                  Information
                </Label>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Company Name</Label>
                  <Input
                    id="company"
                    name="companyName"
                    placeholder="Enter company name"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Tax ID</Label>
                  <Input
                    id="name"
                    placeholder="Enter Tax ID"
                    name="taxId"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter Full name"
                    name="fullName"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Country</Label>
                  <Input
                    id="name"
                    placeholder="Enter country"
                    name="country"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Phone Number</Label>
                  <div className="flex flex-row justify-between items-center  space-x-2">
                    <div className="min-w-[83px]">
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="+66">+66</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col w-full">
                      <Input
                        id="name"
                        name="phoneNumber"
                        onChange={handleChangeValue}
                        placeholder="Enter Phone number"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Website</Label>
                  <Input
                    id="name"
                    placeholder="Enter website"
                    name="website"
                    onChange={handleChangeValue}
                  />
                </div>

                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Address</Label>
                  <Textarea
                    id="name"
                    placeholder="Enter Address"
                    name="address"
                    onChange={handleChangeValue}
                    className="resize-none h-full"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col col-span-2 space-y-1.5 ">
                    <Label htmlFor="name">State/Province</Label>
                    <Select
                      onValueChange={(e) => handleValueSelect(e, "province")}
                    >
                      <SelectTrigger id="framework">
                        <SelectValue
                          onChange={handleChangeValue}
                          placeholder="Choose Province"
                        />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="bangkok">กรุงเทพ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col col-span-2 space-y-1.5 ">
                    <Label htmlFor="name">City/District</Label>
                    <Select
                      onValueChange={(e) => handleValueSelect(e, "district")}
                    >
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Choose District" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="saphansung">สะพานสูง</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col col-span-2 space-y-1.5">
                    <Label htmlFor="name">Sub-District</Label>
                    <Select
                      onValueChange={(e) => handleValueSelect(e, "subDistrict")}
                    >
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Choose Sub-District" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="saphansung">สะพานสูง</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col row-span-2 col-span-2 space-y-1.5 ">
                    <Label htmlFor="name">Zip Code</Label>
                    <Input
                      id="name"
                      placeholder="Enter Zip Code"
                      name="zipCode"
                      onChange={handleChangeValue}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row w-full justify-between mx-[70px] my-[24px]">
            <Button
              variant="outline"
              className="flex rounded-full bg-[#021E42] text-white font-medium text-[20px] w-[139px] h-[48px] my-[16px] drop-shadow-md"
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              className="flex rounded-full bg-[#5FC198] text-white font-medium text-[20px] w-[139px] h-[48px] my-[16px] drop-shadow-md"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </CardFooter>
      </Card>
      {Customer.image && (
        <>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <div className="flex flex-col h-[224px] w-[224px]">
                    <Image
                      src={URL.createObjectURL(Customer.image)}
                      fill
                      className="object-cover"
                      alt="avatar"
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}
