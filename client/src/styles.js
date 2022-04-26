import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      heading: {
        color: 'rgb(220, 20, 60)'
      },
      image: {
        marginLeft: '15px'
      }
}))