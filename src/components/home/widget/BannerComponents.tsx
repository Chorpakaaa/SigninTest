import Image from "next/image";
const BannerComponents = () => {
  return (
    <>
      <div className="h-[635px] relative flex flex-row justify-center items-center">
        <Image
          src={"/image/123.jpg"}
          alt="bannerHeadline"
          fill
          className="object-cover"
        />
        <span className="flex z-10 flex-col items-center">
          <span className="text-[48px] font-extrabold text-white drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[32px] font-bold text-white drop-shadow-md">
            One-stop Platform community for Agents and Operator in Thailand
          </span>
        </span>
      </div>
    </>
  );
};
export default BannerComponents;
