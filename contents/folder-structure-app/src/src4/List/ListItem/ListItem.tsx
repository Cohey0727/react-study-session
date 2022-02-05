import React from "react";
import { Item } from "../types";

type ListItemProps = {
  item: Item;
};

const ListItem = ({ item }: ListItemProps) => (
  <li>
    <div>{item.id}</div>
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>
  </li>
);

export default ListItem;
