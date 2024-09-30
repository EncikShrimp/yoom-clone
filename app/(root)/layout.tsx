import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default layout;
