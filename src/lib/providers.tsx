"use client";
import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute={"class"} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
