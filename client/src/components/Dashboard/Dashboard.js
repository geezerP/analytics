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
        <DashboardItem size={6} priority="quinary" metric="Real Time" />
        <DashboardItem size={10} priority="secondary" metric="Users" visual="chart" type="line" />
        <DashboardItem size={12} priority="secondary" metric="Total Events" visual="chart" type="line"/>
        <DashboardItem size={6} priority="primary" metric="Sessions"/>
        <DashboardItem size={6} priority="primary" metric="Page Views"/>
      </Grid>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);