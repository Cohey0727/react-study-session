import React from "react";
import ListItem from "./ListItem";
import { Item } from "./types";

type ListProps = {
  list: Item[];
};

const List = ({ list }: ListProps) => (
  <ul>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);

export default List;
