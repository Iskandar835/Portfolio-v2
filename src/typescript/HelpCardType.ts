import { ImagesType } from "./ImagesType";

type BaseType = {
   title: string;
   story: string;
};

export type HelpCardType = ImagesType & BaseType;
