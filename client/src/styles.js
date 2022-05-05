import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
      appBar: {
        borderRadius: 7,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        marginLeft: '30px'
      },
      [theme.breakpoints.down('xs')]: {
        mainGrid: {
          flexDirection: 'column-reverse'
        }
      }
}))