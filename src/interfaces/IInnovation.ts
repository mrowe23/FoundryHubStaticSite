import { ReactNode } from "react";

export interface IInnovation {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  infoLink: string;
  githubLink: string;
  icon: ReactNode; // Since the icon is a JSX element
}