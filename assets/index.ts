import { StaticImageData } from "next/image";

import etherLogo from "./eth-logo.png";

export interface Images {
  [key: string]: StaticImageData;
}

export const images: Images = {
  etherLogo,
};
