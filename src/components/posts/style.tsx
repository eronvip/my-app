import { darken, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  block: {
    width: '100%',
    maxWidth: 1280,
    margin: theme.spacing(4, 'auto'),
    '& .row': {
      padding: theme.spacing(2),
      '& .post-title': {
        color: theme.palette.primary.main
      }
    }
  },
  btnAction: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: 1280,
    margin: theme.spacing(2, 'auto'),
    '& .btnBack': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: darken(theme.palette.primary.main, 0.25)
      }
    }
  },
  error: {
    width: '100%',
    maxWidth: 1280,
    margin: theme.spacing(4, 'auto'),
    color: 'red',
  }
}));

export default useStyles;