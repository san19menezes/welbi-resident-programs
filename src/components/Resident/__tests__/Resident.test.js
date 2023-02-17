import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Resident from '../Resident';
import { sampleData } from '../../../../mockData/sampleData';
import { getFormattedDate } from '../../../utils/constants';

let resident;
beforeAll(() => {
  resident = sampleData.residents[0];
});

afterEach(() => {
  cleanup();
});

describe('Render the list of residents', () => {
  test('should contain resident image in the resident card', () => {
    render(<Resident key={resident.id} resident={resident} />);
    const progName = screen.getByTestId('resident-image');
    expect(progName).toBeInTheDocument();
  });
  test('should render a resident care without crashing', () => {
    render(<Resident key={resident.id} resident={resident} />);
    const residentImage = screen.getByTestId('resident-care');
    expect(residentImage).toBeInTheDocument();
  });
  test('should contain resident name in the resident card', () => {
    render(<Resident key={resident.id} resident={resident} />);
    const progDimension = screen.getByTestId('resident-name');
    expect(progDimension).toBeInTheDocument();
    expect(progDimension).toHaveTextContent(resident.name);
  });
  test('should contain resident room in the resident card', () => {
    render(<Resident key={resident.id} resident={resident} />);
    const progDate = screen.getByTestId('resident-room');
    expect(progDate).toBeInTheDocument();
    expect(progDate).toHaveTextContent(resident.room);
  });
});
