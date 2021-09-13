import React from "react";

class ListRender extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: "Leanne Graham",
      },
      {
        id: 2,
        name: "Erwin Howell",
      },
      {
        id: 3,
        name: "Clementine Bauch",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
      },
      {
        id: 5,
        name: "Karan Pandit",
      },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.list.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default ListRender;
