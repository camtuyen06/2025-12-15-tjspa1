import React, { useEffect, useState } from "react";
import styles from "./MemeSvgViewer.module.css";

interface IMemeSvgViewerProps {
  children?: React.ReactNode;
}

interface IMemeSvgViewerState {
  value?: undefined;
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = ({
  children = "MemeSvgViewer Component",
}) => {
  const [state, setstate] = useState<IMemeSvgViewerState>({});
  useEffect(() => {
    //mount

    return () => {
      //dismount
    };
  }, []);

  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      {children}
    </div>
  );
};

export default MemeSvgViewer;
