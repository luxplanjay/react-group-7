import React from 'react';
// import { compose } from 'recompose';
// import withHOC from './hoc/withHOC';
// import withLog from './hoc/withLog';
// import withBorder from './hoc/withBorder';
// import withToggle from './hoc/withToggle';

const styles = {
  container: {
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
    padding: 8,
  },
};

const Profile = ({ avatar, name }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="128" />
    <p>{name}</p>
  </div>
);

export default Profile;

// export default compose(
//   withHOC,
//   withLog,
//   withBorder,
//   withToggle,
// )(Profile);

// export default withToggle(withBorder(Profile));
