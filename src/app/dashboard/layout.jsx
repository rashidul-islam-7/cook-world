import Sidebar from "@/components/DashboardPage/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="lg:flex">
      <Sidebar />

      <main className="lg:flex-1 p-5 md:p-8">{children}</main>
    </div>
  );
}
