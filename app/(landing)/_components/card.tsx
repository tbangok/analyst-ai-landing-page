import React from "react";
import style from "./card.module.css";
import { cn } from "@/lib/utils";

const CardComponent = () => {
  return (
    <div className={cn(style["e-card"], style["playing"])}>
      <div className={style["image"]}></div>

      <div className={style["wave"]}></div>
      <div className={style["wave"]}></div>
      <div className={style["wave"]}></div>

      <div className={style["infotop"]}>
        
      </div>
    </div>
  );
};

export default CardComponent;
