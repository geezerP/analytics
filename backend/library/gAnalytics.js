//loads all our variables into process.env for later use
require('dotenv').config();

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

async function getMetric(metric, startDate, endDate) {
  await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
    Math.trunc(1000 * Math.random()),
  );

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

function parseMetric(metric) {
  let cleanMetric = metric;
  return cleanMetric.startsWith('ga:') ? cleanMetric : `ga:${cleanMetric}`;
}

function getData(metrics = ['ga:users'], startDate = '30daysAgo', endDate = 'today') {
  return metrics.map(x => getMetric(parseMetric(x), startDate, endDate));
}

module.exports = { getData };