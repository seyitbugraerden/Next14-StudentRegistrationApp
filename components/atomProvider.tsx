"use client";
import React from "react";
import { Provider } from "jotai";

interface Props {
  children: React.ReactNode;
}

export const AtomProvider: React.FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>;
};