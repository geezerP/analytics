// Config
const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY.replace(new RegExp('\\\\n'), '\n');
const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

// API's
const { google } = require('googleapis');
const analytics = google.analytics('v3');
const viewId = process.env.VIEW_ID;
const jwt = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes,
});

//Retrieve data
async function getMetric(metric, startDate, endDate) {
    await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
      Math.trunc(1000 * Math.random()),
    ); // 3 sec
  
    const result = await analytics.data.ga.get({
      auth: jwt,
      ids: `ga:${viewId}`,
      'start-date': startDate,
      'end-date': endDate,
      metrics: metric,
    });
  
    const res = {};
    res[metric] = {
      value: parseInt(result.data.totalsForAllResults[metric], 10),
      start: startDate,
      end: endDate,
    };
    return res;
  }