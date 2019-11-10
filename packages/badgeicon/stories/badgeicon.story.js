/* eslint-disable import/no-extraneous-dependencies, no-alert */
/* global alert */
import { StatusSuccess, Inbound } from '../../common';

const React = require('react');
const { storiesOf } = require('@storybook/react');
const { withKnobs, select } = require('@storybook/addon-knobs');
const BadgeIcon = require('../');

require('./badgeicon.story.scss');

const groupId = 'GROUP-ID3';
const sizeLabel = 'Size';
const sizeOptions = {
  '40px': '40px',
  '82px': '82px',
  '150px': '150px',
  '400px': '400px',
};
const sizeDefaultValue = '150px';

storiesOf('Badge Icon', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BadgeIcon
      icon={Inbound}
      statusIcon={StatusSuccess}
      square={select(sizeLabel, sizeOptions, sizeDefaultValue, groupId)}
      className={'badgeicon-example'}
    />
  ));
