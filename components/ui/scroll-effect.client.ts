"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const onScroll = () => {
      // logic scrollY + activeSection (copy dari kode kamu)
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
