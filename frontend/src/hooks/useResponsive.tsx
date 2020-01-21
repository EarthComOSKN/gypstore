import { useResponsive as DeafultUseResponsive } from "react-hooks-responsive";
import { BREAKPOINTS } from "../const";

export const useResponsive = () => {
  if (!process.browser) return { isDesktop: false, isMobile: false };
  const {
    size,
    orientation,
    screenIsAtLeast,
    screenIsAtMost
  } = DeafultUseResponsive(BREAKPOINTS);

  return {
    isDesktop: screenIsAtLeast("md"),
    isMobile: screenIsAtLeast("sm") && screenIsAtMost("md")
  };
};
