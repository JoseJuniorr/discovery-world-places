import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without marker', () => {
    render(<Map />);

    screen.logTestingPlaygroundURL();
  });
  //   it('should render with the marker in corret place ', () => {});
});
