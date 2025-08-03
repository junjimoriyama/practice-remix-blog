import { Image, RexponseDate, RichText } from "../types";

export type Article = {
  id: string;
  title: string;
  body: RichText;
  image: Image;
  endDate?: string;
  // isShow: boolean;
  // visibleUntil?: string;
} & RexponseDate;
