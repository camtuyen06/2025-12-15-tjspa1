import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

interface IHeaderProps {
  children?: React.ReactNode;
}

interface IHeaderState {
  value?: undefined;
}

const Header: React.FC<IHeaderProps> = ({
  children = "Header Component",
}) => {
  const [state, setstate] = useState<IHeaderState>({});
  useEffect(() => {
    //mount

    return () => {
      //dismount
    };
  }, []);

  return (
    <div className={styles.Header} data-testid="Header">
      {children}
    </div>
  );
};

export default Header;
