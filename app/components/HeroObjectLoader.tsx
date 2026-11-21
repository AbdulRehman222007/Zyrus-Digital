"use client";

import dynamic from "next/dynamic";

const HeroObject = dynamic(() => import("./HeroObject"), {
  ssr: false,
  loading: () => null,
});

export default HeroObject;
