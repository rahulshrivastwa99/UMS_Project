import { Header } from "@/components/layout/header"
import { MainNav } from "@/components/layout/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-4 p-4">
            <MainNav />
          </div>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
