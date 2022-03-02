const isBrowswer = typeof window !== "undefined";

let CurrentNavTitle;

export const CurrentPage = () => {
  if (isBrowswer) {
    if (location.pathname === "/") {
      CurrentNavTitle = "Home";
      return CurrentNavTitle;
    } else if (location.pathname === "/about") {
      CurrentNavTitle = "About";
      return CurrentNavTitle;
    } else if (location.pathname === "/browsearchives") {
      CurrentNavTitle = "Browse Archives";
      return CurrentNavTitle;
    } else if (location.pathname === "/glossary") {
      CurrentNavTitle = "Glossary";
      return CurrentNavTitle;
    } else if (location.pathname === "/eventlist") {
      CurrentNavTitle = "Workshops";
      return CurrentNavTitle;
    } else if (location.pathname === "/contribute") {
      CurrentNavTitle = "Contact Us";
      return CurrentNavTitle;
    } else {
      CurrentNavTitle = "RCW-Asia";
      return CurrentNavTitle;
    }
  } else {
    CurrentNavTitle = "RCW-Asia";
    return CurrentNavTitle;
  }
};
