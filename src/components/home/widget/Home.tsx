import BannerComponents from "./BannerComponents";
import ContentComponents from "./content";

const HomeComponents = () => {
  return (
    <>
      <div className="flex flex-col">
        <BannerComponents />
        <ContentComponents />
      </div>
    </>
  );
};
export default HomeComponents;