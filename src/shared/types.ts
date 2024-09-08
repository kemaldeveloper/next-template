import * as yup from 'yup';

export type WPFile = {
  url: string | null;
  id: string | null;
  height: string | null;
  width: string | null;
  thumbnail: string | null;
};

type RenderedContent = { rendered: string | null };

type WPImageWithMeta = {
  src: string;
  width: number | null;
  height: number | null;
};

export type Post = {
  id: number | null;
  date: string | null;
  slug: string | null;
  type: string | null;
  title: RenderedContent | null;
  content: RenderedContent | null;
  image: WPImageWithMeta | null;
};

export type WPCategory = {
  id: number;
  name: string | null;
  slug: string | null;
};

export type YupObjectBaseSchema<T extends {}> = yup.ObjectSchema<T, yup.AnyObject, Record<keyof T, undefined>, ''>;

