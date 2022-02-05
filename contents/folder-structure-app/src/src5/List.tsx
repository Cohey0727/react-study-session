import React from "react";

type ListItem = {
  id: string;
  firstname: string;
  lastname: string;
  year: number;
};

type ListProps = {
  list: ListItem[];
};

const List = ({ list }: ListProps) => (
  <ul>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);

type ListItemProps = {
  item: ListItem;
};

const ListItem = ({ item }: ListItemProps) => (
  <li>
    <div>{item.id}</div>
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>
  </li>
);

export default List;
