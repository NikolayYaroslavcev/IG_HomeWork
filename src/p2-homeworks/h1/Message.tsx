import React from "react";
import s from "./Message.module.css";

type MessagesPropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export const Message = (props: MessagesPropsType) => {
  return (
    <div className={s.project}>
      <img className={s.avatar} src={props.avatar} alt="avatar" />

      <div className={s.tail} />
      <div className={s.container}>
        <div className={s.name}>{props.name}</div>
        <div className={s.message}>{props.message}</div>
        <div className={s.time}>{props.time}</div>
      </div>
    </div>
  );
};
