import { createContext } from "react";

export const ToDoItemsListContext = createContext({
  toDoList: [],
  onNewItem: () => {},
  onDeleteItem: () => {},
});
