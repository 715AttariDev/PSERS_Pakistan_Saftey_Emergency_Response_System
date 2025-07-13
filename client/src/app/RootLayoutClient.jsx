// components/RootLayoutClient.jsx
"use client";

import Header from "@/MyComponents/Header";

export default function RootLayoutClient({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
