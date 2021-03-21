import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../redux/Actions/Action/UserAction';

const About = (props) => {
  useEffect(() => {
    props.UserDataActions();
  }, []);

  const clickFunction = () => {
    const myName = 'I am anmol';
    props.UserActions(myName);
  };

  return (
    <div>
      <button type="button" onClick={clickFunction}>
        Click Me
      </button>
      <div>{`Hi ${props.userStateData} !`}</div>
      {props.userses.map((data) => {
        return <div key={data.id}>{data.name}</div>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const userDatas = state.userData.users;
  const userList = state.userData.userArr;
  return {
    userStateData: userDatas,
    userses: userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserActions: (name) => dispatch(actionCreator.UserActions(name)),
    UserDataActions: () => dispatch(actionCreator.UserDataActions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
