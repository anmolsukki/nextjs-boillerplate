import React from 'react';
import fetch from 'isomorphic-unfetch';
import { getPortfolios } from '../actions/BpApi';

const Index = (props) => {
  console.log('==safsdfsdf', props);

  return (
    <div>
      {props.data.map((data) => {
        return <p key={data.id}>{data.name}</p>;
      })}
    </div>
  );
};

Index.getInitialProps = async () => {
  let portfolio = {};
  try {
    portfolio = await getPortfolios();
  } catch (error) {
    console.error(error);
  }
  return { portfolio };
};

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { props: { data } };
}

export default Index;
