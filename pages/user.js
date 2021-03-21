import { getPortfolios } from '../apiHandler/BrApi';

const Index = (props) => {
  console.log('==props====>>>', props);

  return (
    <div>
      {props.portfolio &&
        props.portfolio.map((user) => {
          return (
            <ul key={user.id}>
              <li>{user.title}</li>
            </ul>
          );
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

export default Index;
