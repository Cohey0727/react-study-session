import React from "react";

type ListItemTitleProps = {
  title: string;
};

const ListItemTitle = ({ title }: ListItemTitleProps) => <h2>{title}</h2>;

export default ListItemTitle;
