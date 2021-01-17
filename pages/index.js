import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import Layout from '../common/Layout';

const { publicRuntimeConfig } = getConfig();

const Index = (props) => {
  console.log('==props====>>>', props);

  return (
    <Layout>
      <div>
        {props.data.map((user) => {
          return (
            <ul key={user.id}>
              <li>{user.name}</li>
            </ul>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${publicRuntimeConfig.baseUrl}/users`);
  const data = await res.json();
  return { props: { data } };
}

export default Index;
