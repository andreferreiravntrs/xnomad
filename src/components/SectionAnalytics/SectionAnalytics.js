import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import classNames from 'classnames';
import css from './SectionAnalytics.css';

import FemaleIcon from './images/female.svg';
import MaleIcon from './images/male.svg';

const SectionAnalytics = ({ className }) => {

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Foot Traffic',
        fill: false,
        lineTension: 0,
        borderColor: '#1069C7',
        borderJoinStyle: 'miter',
        pointBorderColor: '#1069C7',
        pointBackgroundColor: '#1069C7',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#1069C7',
        pointHoverBorderColor: '#1069C7',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [
          400,
          300,
          375,
          450,
          500,
          390,
          325,
        ],
      },
    ],
  };

  const lineOptions = {
    scales: {
      xAxes: [
        {
          offset: true,
          gridLines: {
            display: false,
            drawBorder: false,
            zeroLineWidth: false,
          },
          ticks: {
            beginAtZero: true,
            fontSize: 12,
            padding: 0,
            fontColor: "#242728",
            fontFamily: "'FiraSans', sans-serif",
          }
        },
      ],
      yAxes: [
        {
          offset: true,
          gridLines: {
            display: true,
            lineWidth: 1,
            borderDash: [5, 5],
            color: 'rgba(33, 33, 33, 0.25)',
            borderDashOffset: 0,
            drawBorder: false,
            zeroLineWidth: 1,
            zeroLineColor: 'rgba(33, 33, 33, 0.25)',
            zeroLineBorderDashOffset: 0,
            zeroLineBorderDash: [5, 5],
          },
          ticks: {
            beginAtZero: true,
            stepSize: 100,
            fontSize: 12,
            padding: 10,
            fontColor: "#242728",
            fontFamily: "'FiraSans', sans-serif",
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
    responsive: true,
    maintainAspectRatio: true,
  };

  const barData = {
    labels: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    datasets: [
      {
        label: 'Daily Foot Traffic',
        fill: false,
        lineTension: 0,
        maxBarThickness: 16,
        backgroundColor: '#1069C7',
        hoverBackgroundColor: '#1069C7',
        data: [
          10, 20, 35, 35, 20, 15, 20, 43, 30
        ],
      },
    ],
  };

  const barOptions = {
    scales: {
      xAxes: [
        {
          offset: true,
          gridLines: {
            display: false,
            drawBorder: false,
            zeroLineWidth: false,
          },
          ticks: {
            beginAtZero: true,
            fontSize: 12,
            padding: 0,
            fontColor: "#242728",
            fontFamily: "'FiraSans', sans-serif",
          }
        },
      ],
      yAxes: [
        {
          offset: true,
          gridLines: {
            display: true,
            lineWidth: 1,
            borderDash: [5, 5],
            color: 'rgba(33, 33, 33, 0.25)',
            borderDashOffset: 0,
            drawBorder: false,
            zeroLineWidth: 1,
            zeroLineColor: 'rgba(33, 33, 33, 0.25)',
            zeroLineBorderDashOffset: 0,
            zeroLineBorderDash: [5, 5],
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            fontSize: 12,
            padding: 10,
            fontColor: "#242728",
            fontFamily: "'FiraSans', sans-serif",
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
    responsive: true,
    maintainAspectRatio: true,
  };

  const doughnutData = {
    datasets: [{
      data: [47, 53],
      backgroundColor: ["#EB9D87", "#1069C7"],
      hoverBackgroundColor: ["#EB9D87", "#1069C7"],
      hoverBorderWidth: 0,
      hoverRadius: 0,
      borderWidth: 0,
    }],
    labels: [
      'Female',
      'Male',
    ],
  };

  const doughnutOptions = {
    rotation: 0,
    cutoutPercentage: 60,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <h4 className={css.h4}>
            <FormattedMessage id="SectionAnalytics.title" />
          </h4>
        </div>
        <div className={css.row}>
          <div className={css.item}>
            <div className={css.card}>
              <div className={css.graph}>
                <Line data={lineData} options={lineOptions} />
              </div>
              <div className={css.cardContent}>
                <h6 className={css.cardTitle}>
                  <FormattedMessage id="SectionAnalytics.item1Title" />
                </h6>
                <div className={css.cardDescription}>
                  <FormattedMessage id="SectionAnalytics.item1Description" />
                </div>
              </div>
            </div>
          </div>
          <div className={css.item}>
            <div className={css.card}>
              <div className={css.graph}>
                <Bar data={barData} options={barOptions} />
              </div>
              <div className={css.cardContent}>
                <h6 className={css.cardTitle}>
                  <FormattedMessage id="SectionAnalytics.item1Title" />
                </h6>
                <div className={css.cardDescription}>
                  <FormattedMessage id="SectionAnalytics.item1Description" />
                </div>
              </div>
            </div>
          </div>
          <div className={css.item}>
            <div className={css.card}>
              <div className={css.graph}>
                <div className={css.graphCol}>
                  <Doughnut height={200} width={200} data={doughnutData} options={doughnutOptions} />
                  <div className={css.graphTitle}>
                    <p className={css.body}><FormattedMessage id="SectionAnalytics.visitors" /></p>
                    <h5 className={css.h5}>35 000</h5>
                  </div>
                </div>
                <div className={css.graphCol}>
                  <div className={css.female}>
                    <img src={FemaleIcon} alt="" />
                    <div className={css.genderDetails}>
                      <p className={css.body}><FormattedMessage id="SectionAnalytics.female" /></p>
                      <h5 className={classNames(css.h5, css.femaleFont)}>47%</h5>
                    </div>
                  </div>
                  <div className={css.male}>
                    <img src={MaleIcon} alt="" />
                    <div className={css.genderDetails}>
                      <p className={css.body}><FormattedMessage id="SectionAnalytics.male" /></p>
                      <h5 className={classNames(css.h5, css.maleFont)}>53%</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.cardContent}>
                <h6 className={css.cardTitle}>
                  <FormattedMessage id="SectionAnalytics.item1Title" />
                </h6>
                <div className={css.cardDescription}>
                  <FormattedMessage id="SectionAnalytics.item1Description" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionAnalytics.defaultProps = {
  className: null,
};

SectionAnalytics.propTypes = {
  className: string,
};

export default SectionAnalytics;
