import classes from "./TodoItem.module.css";
import { BsTrash } from "react-icons/bs";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item}>
      {props.text}
      <BsTrash onClick={props.onRemoveTodo} className={classes.icon} />
    </li>
  );
};

export default TodoItem;
