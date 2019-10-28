import { Notification } from "rsuite";

export default class Message {
  public static open = (
    funcName: NotificationTypes,
    title: string,
    placement: NotificationPlacement,
    description: JSX.Element,
    duration: number,
    onClose: (() => void) | undefined
  ) => {
    Notification[funcName]({
      title,
      placement,
      description,
      duration,
      onClose
    });
  };
}

type NotificationTypes = "error" | "success" | "info" | "warning";
type NotificationPlacement =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";
