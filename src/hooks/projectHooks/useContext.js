import { useContext } from "react";
import { LayoutContext } from "~/layoutProvider/LayoutProvider";

export const useLayoutContext = () => useContext(LayoutContext);
