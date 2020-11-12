import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'react-chartjs-2';
import { calcFootfallAvg } from '../../util/xnomad';
import css from './ListingPage.css';

const SectionFootfall = props => {
  const { listing } = props;

  if (!listing.attributes.publicData.footfall) {
    return null;
  }

  const footfall = listing.attributes.publicData.footfall;

  const footfallAvg = calcFootfallAvg(footfall);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Footfall dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#b2b2b2',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#000000',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#000000',
        pointHoverBorderColor: 'rgba(178,178,178,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [
          footfall.Monday,
          footfall.Tuesday,
          footfall.Wednesday,
          footfall.Thursday,
          footfall.Friday,
          footfall.Saturday,
          footfall.Sunday,
        ],
      },
    ],
  };

  const lineOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          // stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            // Return an empty string to draw the tick line but hide the tick label
            // Return `null` or `undefined` to hide the tick line entirely
            userCallback(value) {
              // Convert the number to a string and splite the string every 3 charaters from the end
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);

              // Convert the array to a string and format the output
              value = value.join(' ');
              return `${value}`;
            },
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    responsive: false,
    layout: {
      width: 400,
      height: 400,
    },
  };

  return (
    <div className={css.sectionFootfall}>
      <p className={css.sectionFootfallTitle}>
        <FormattedMessage id="SectionFootfall.heading" />
      </p>
      <div className={css.sectionFootfallData}>
        <FormattedMessage id="SectionFootfall.data" values={{ footTraffic: footfallAvg }} />
      </div>
      <div className={css.sectionFootfallGraph}>
        <Line data={data} options={lineOptions} />
      </div>
    </div>
  );
};

export default SectionFootfall;
