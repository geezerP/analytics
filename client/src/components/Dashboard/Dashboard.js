import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DashboardItem from './DashboardItem/DashboardItem';
import { isMobile } from '../../utils';

const styles = () => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container direction={isMobile ? 'column' : 'row'} spacing={3} justify="center" alignItems="center">
        <DashboardItem priority="quinary" metric="Real Time" />
        <DashboardItem priority="quinary" metric="Sessions"/>
        <DashboardItem priority="quinary" metric="Page Views"/>
        <DashboardItem size={10} priority="secondary" metric="Users" visual="chart" type="line" />
        <DashboardItem size={12} priority="secondary" metric="Total Events" visual="chart" type="line"/>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);