import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex h-screen w-screen flex-col">
        {/* <SideNav /> */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
