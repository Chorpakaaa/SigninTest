import { create } from "zustand";

interface Customertype {
  email: string;
  password: string;
  companyName: string;
  cfpassword: string;
  taxId: string;
  fullName: string;
  country: string;
  phoneNumber: string;
  website: string;
  address: string;
  province: string;
  subDistrict: string;
  district: string;
  zipCode: string;
  image:File | undefined;
  isLogin:boolean
}

const CustomerStore = create<{
  customer: Customertype;
  setCustomer: (customer: Customertype) => void;
  setValueCustomer: (key: string, value: string | File | undefined  | boolean) => void;
}>((set) => ({
  customer: {
    email: "",
    password: "",
    cfpassword:"",
    companyName: "",
    taxId: "",
    fullName: "",
    country: "",
    phoneNumber: "",
    website: "",
    address: "",
    province: "",
    subDistrict: "",
    district: "",
    zipCode:"" ,
    image: undefined,
    isLogin:false
  },
  setCustomer: (customer) => set({ customer }),
  setValueCustomer: (key: string, value: string | File | undefined | boolean) =>
    set((state) => ({
      customer: {
        ...state.customer,
        [key]: value,
      },
    })),
}));

export default CustomerStore;
