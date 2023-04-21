import INavLinks from "../interfaces/INavLinks";
import navLinksEnum from "../enums/navLinksEnums";

const navLinks: INavLinks[] = [
  {
    id: navLinksEnum.Home,
    title: "Home",
  },
  {
    id: navLinksEnum.About,
    title: "About",
  },
  {
    id: navLinksEnum.Projects,
    title: "Projects",
  },
  {
    id: navLinksEnum.Contact,
    title: "Contact",
  },
];

export default navLinks;
