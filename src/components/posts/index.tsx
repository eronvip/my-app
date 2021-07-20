import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../action/userActions';
import * as postActions from '../../action/postActions';
import { State } from '../../reducers';
import { useHistory, useParams } from 'react-router-dom';
import { Post } from '../../common';
import useStyles from './style';
import { Button } from '@material-ui/core';

interface Props {
  userCollection: any;
  postCollection: any;
  errors: any;
  getUserById: (id: number) => void;
  getPostById: (id: number) => void;
}

const PostComponent: React.FunctionComponent<Props> = props => {
  const [firstLoading, setLoading] = useState(true);
  const params: any = useParams() || {};
  const classes = useStyles();
  const history = useHistory();

  const backToUsers = () => {
    history.push('/');
  }

  useEffect(() => {
    if (firstLoading) {
      setLoading(false);
      if (params.userId) {
        props.getPostById(params.userId as number);
        props.getUserById(params.userId as number);
      }
    }
  }, [firstLoading, params.userId, props])
  if (props.errors) return <div className={classes.error}>Error User ID</div>;
  return (
    <>
      <div className={classes.title}>User {(props.userCollection || {}).name}</div>
      <div className={classes.block}>
        {
          (props.postCollection || []).map((post: Post) => <div key={post.id} className="row">Post <b className="post-title">{post.title}</b><br/>Content: {post.body}</div>)
        }
      </div>
      <div className={classes.btnAction}>
        <Button className="btnBack" onClick={backToUsers}>Back To User List</Button>
      </div>
    </>
  )
};

const mapStateToProps = (state: State) => ({
  userCollection: state.userCollection.user,
  errors: state.userCollection.errors,
  postCollection: state.postCollection.post,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserById: (id: number) => dispatch(userActions.getUserByIdAction(id)),
  getPostById: (id: number) => dispatch(postActions.getPostByUserAction(id))
});

export const PostViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent);