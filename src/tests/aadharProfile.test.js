// AadharProfile.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import AadharProfile from '../components/aadharProfile';

describe('AadharProfile Snapshot', () => {
  it('renders correctly with initial props', () => {
    const tree = renderer.create(
        <AadharProfile
          name="Indraja"
          aadharNumber="1234-5678-9012"
          dob="01-01-1990"
          gender="Female"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});