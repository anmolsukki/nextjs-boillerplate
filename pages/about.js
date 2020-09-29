import { useEffect } from 'react';
import { connect } from 'react-redux';
import { UserActions, UserDataActions } from '../redux/Actions/Action/UserAction';

const About = ({ UserActions, UserDataActions, userStateData, userses }) => {
  const clickFunction = () => {
    const myName = 'I am anmol';
    UserActions(myName);
  };

  useEffect(() => {
    UserDataActions();
  });

  return (
    <>
      <button type="button" onClick={clickFunction}>
        Click Me
      </button>
      <div>{`Hi ${userStateData} !`}</div>
      {userses.map((data) => {
        return <div key={data.id}>{data.name}</div>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  const userDatas = state.userData.users;
  const userList = state.userData.userArr;
  return {
    userStateData: userDatas,
    userses: userList
  };
};

export default connect(mapStateToProps, { UserActions, UserDataActions })(About);
