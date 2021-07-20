import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { connect } from 'react-redux';
import * as userActions from '../../action/userActions';
import { User } from '../../common';
import { State } from '../../reducers';
import useStyles from './style';
import { useHistory } from 'react-router-dom';

interface Props {
  userCollection: any;
  postCollection: any;
  onRequestUser: () => void;
}

const UserComponent: React.FunctionComponent<Props> = props => {
  const [firstLoading, setLoading] = useState(true);
  const columns = [
    {
      selector: 'name',
      name: 'Name',
      minWidth: '150px',
      sortable: false,
    },
    {
      selector: 'username',
      name: 'Username',
      align: 'center',
      headerAlign: 'center',
      minWidth: '150px',
      sortable: false,
    },
    {
      selector: 'email',
      name: 'Email',
      align: 'center',
      headerAlign: 'center',
      minWidth: '150px',
      sortable: false,
    },
    {
      selector: 'phone',
      name: 'Phone',
      minWidth: '150px',
      sortable: false,
    },
    {
      selector: 'website',
      name: 'Website',
      minWidth: '150px',
      sortable: false,
    },
    {
      name: '',
      minWidth: '150px',
      sortable: false,
      cell: (value: User) => <div><Button onClick={() => viewUser(value)}>View</Button></div>
    },
  ]
  const classes = useStyles();
  const history = useHistory();

  const viewUser = (value: User) => {
    if (value) history.push(`/posts/${value.id}`);
  }

  useEffect(() => {
    if (firstLoading) {
      setLoading(false);
      props.onRequestUser();
    }
  }, [firstLoading, props])
  return (
    <>
      <div className={classes.title}>List User</div>
      <div className={classes.grid}>
        <DataTable
          noHeader
          data={props.userCollection || []}
          columns={columns}
        />
      </div>
    </>
  )
};

const mapStateToProps = (state: State) => ({
  userCollection: state.userCollection.users,
  postCollection: state.postCollection.post,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequestUser: () => dispatch(userActions.getUserAction()),
});

export const UserViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);