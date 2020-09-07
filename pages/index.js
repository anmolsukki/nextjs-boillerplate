import React from 'react';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/index';

const index = (props) => {
  React.useEffect(() => {
    props.userActionData();
  }, []);

  index.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/anmolsukki');
    const data = await res.json();
    return { user: data };
  };

  index.getInitialProps = async () => {
    const data = props.userStateData;
    return { data };
  };

  console.log('==safsdfsdf', props);

  return (
    <div>
      <p>{props.user?.name}</p>
      <img src={props.user?.avatar_url} alt="me" height="200px" />
      {props.userStateData.reUserData.map((data, i) => {
        return <p key={i}>{data.name}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const ctrUserData = state.CtrUser;
  return {
    userStateData: ctrUserData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionData: () => dispatch(actionCreator.UserAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);

// export default index;
