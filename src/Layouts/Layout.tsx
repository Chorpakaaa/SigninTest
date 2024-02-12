import NavbarComponents from "./Navbar";

const LayoutComponents = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-sreen flex flex-col">
        <NavbarComponents />
        {children}
      </div>
    </>
  );
};
export default LayoutComponents;
