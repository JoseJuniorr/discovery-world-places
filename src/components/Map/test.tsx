import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without marker', () => {
    render(<Map />);

    screen.logTestingPlaygroundURL();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Maringá',
      slug: 'maringa',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    const placeTwo = {
      id: '2',
      name: 'Ahueaiu',
      slug: 'ahueaiu',
      location: {
        latitude: 658452,
        longitude: -365245
      }
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/maringa/i)).toBeInTheDocument();
    expect(screen.getByTitle(/ahueaiu/i)).toBeInTheDocument();
  });
});
