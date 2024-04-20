import SiteHeader from "./_components/site-header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="h-full flex flex-col">
      <SiteHeader />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MainLayout;