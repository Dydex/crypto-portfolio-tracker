import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div></div>
      <main className="min-h-screen">{children}</main>
    </>
  );
};
export default Layout;
