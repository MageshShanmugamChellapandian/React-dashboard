import { FunctionComponent } from "react";
import styles from "./Logo.scss";
import PwCLogo from "../assets/images/pwc.svg";

interface ILogoProps {
  size?: "small" | "medium" | "large";
}
export default (function LogoProps({ size = "small" }) {
  let className: string;
  if (size === "small") className = styles.small;
  else if (size === "large") className = styles.large;
  else className = styles.medium;

  className += ` ${styles.logo}`;

  return (
    <img
      className={className}
      src={PwCLogo}
      alt="PwC"
      style={{ width: "3rem" }}
    />
  );
} as FunctionComponent<ILogoProps>);
