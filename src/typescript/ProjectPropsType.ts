import { TechnosType } from "./TechnosType";
import { ImagesType } from "./ImagesType";

export type ProjectPropsType = {
   indexIsEven: boolean;
   date: string;
   title: string;
   story: string;
   technos: TechnosType[];
   picture: ImagesType;
};
