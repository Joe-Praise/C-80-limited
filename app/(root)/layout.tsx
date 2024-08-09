export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="max-w-[758px] mx-auto mb-[70px]">{children}</main>
}
