import React from 'react';
import fetch from 'isomorphic-unfetch';

const index = (props) => {
  console.log('==safsdfsdf', props);

  return (
    <div>
      {props.data.map((data) => {
        return <p key={data.id}>{data.name}</p>;
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { props: { data } };
}

export default index;
