import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="v-screen h-screen flex justify-center p-4">
        <div className="grow flex items-center justify-center border">
          {children}
        </div>
      </body>
    </html>
  );
}
