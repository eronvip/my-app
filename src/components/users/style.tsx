import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  grid: {
    width: '100%',
    maxWidth: 1280,
    margin: theme.spacing(4, 'auto'),
    '& .rdt_TableCol, & .rdt_TableRow': {
      fontSize: 16,
    }
  }
}));

export default useStyles;