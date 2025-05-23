import { useState } from "react";

interface ToDoListItemDef {
  isComplete: boolean;
  description: string;
}

interface ToDoListPropsDef {
  title: string;
  initialItems: ToDoListItemDef[];
}

export const ToDoList = (props: ToDoListPropsDef) => {
  const { title, initialItems: initialItems } = props;
  const [toDoListItems, setToDoListItems] =
    useState<ToDoListItemDef[]>(initialItems);
  return (
    <div>
      <h1>{title}</h1>
      {toDoListItems.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              value={item.description}
              onChange={(event) => {
                const value = event.target.value;
                setToDoListItems((prevToDoListItems) => {
                  prevToDoListItems.map((item, prevIndex) => {
                    if (index === prevIndex) {
                      const updatedItem: ToDoListItemDef = { ...item };
                    }
                  });
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
