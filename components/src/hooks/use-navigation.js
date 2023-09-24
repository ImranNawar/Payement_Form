import { useContext } from "react";
import NavigationContext from "../context/navigation";

const useNavigation = () => {
  return useContext(NavigationContext);
}

export default useNavigation;