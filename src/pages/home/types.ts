import { StaticImageData } from 'next/image';

export type ActivitesData = {
  id: number;
  title: string;
  desc?: string;
  subDesc?: string;
  artObject: StaticImageData;
  img: StaticImageData;
  mobileImg: StaticImageData;
  link: string;
};
