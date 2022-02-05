import React, { useMemo, useState } from "react";
import "./App.css";

function Component4() {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [birthday, setBirthday] = useState<Date>(new Date());

  const child1Customer = useMemo(() => {
    return { name, age };
  }, [name, age]);

  const child2Customer = useMemo(() => {
    return { age, birthday };
  }, [age, birthday]);

  return (
    <div className="App">
      <div>
        Name: <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Age:
        <input
          type="number"
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
      <div>
        birthday:
        <input
          type="datetime-local"
          onChange={(e) => setBirthday(new Date(e.target.value))}
        />
      </div>
      <div>
        <Child1 customer={child1Customer} />
        <Child2 customer={child2Customer} />
      </div>
    </div>
  );
}

type Child1Props = {
  customer: {
    name: string;
    age: number;
  };
};

const Child1 = React.memo((props: Child1Props) => {
  const { customer } = props;
  return (
    <p>
      name: {customer.name}, age: {customer.age}
    </p>
  );
});

type Child2Props = {
  customer: {
    birthday: Date;
    age: number;
  };
};

const Child2 = React.memo((props: Child2Props) => {
  const { customer } = props;
  return (
    <p>
      birthday: {customer.birthday.toISOString()}, age: {customer.age}
    </p>
  );
});

export default Component4;
