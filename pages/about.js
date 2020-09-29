import { connect } from 'react-redux';
import { UserActions } from '../redux/Actions/Action/UserAction';

const About = ({ UserActions, userStateData }) => {
  const clickFunction = () => {
    const myName = 'I am anmol';
    UserActions(myName);
  };

  return (
    <>
      <button type="button" onClick={clickFunction}>
        Click Me
      </button>
      <div>{`Hi ${userStateData} !`}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  const userDatas = state.userData.users;
  return {
    userStateData: userDatas
  };
};

export default connect(mapStateToProps, { UserActions })(About);
