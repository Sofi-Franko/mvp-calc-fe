import "./globals.css"
import SideBar from "@/components/SideBar";

export const metadata = {
  title: 'Your Energy Calculator - MVP 1',
  description: 'Calculator of energy, that helps you to count potential incentives for the projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="paddings flex flex-1 gap-huge">
          <SideBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
