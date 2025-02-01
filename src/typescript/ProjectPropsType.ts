import { TechnosType } from "./TechnosType";
import { ImagesType } from "./ImagesType";

export type ProjectPropsType = {
   indexIsEven: boolean;
   date: string;
   title: string;
   href: string;
   story: string;
   technos: TechnosType[];
   picture: ImagesType;
};
