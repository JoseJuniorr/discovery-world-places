import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without marker', () => {
    render(<Map />);

    screen.logTestingPlaygroundURL();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '2',
      name: 'Campo Mourão',
      slug: 'campo-mourao',
      location: {
        latitude: 658452,
        longitude: -365245
      }
    };

    render(<Map places={[place]} />);

    expect(screen.getByTitle(/Campo Mourão/i)).toBeInTheDocument();
  });
});
