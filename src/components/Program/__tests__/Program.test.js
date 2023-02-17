import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Program from '../Program';
import { sampleData } from '../../../../mockData/sampleData';
import { getFormattedDate } from '../../../utils/constants';

let program;
beforeAll(() => {
  program = sampleData.programs[0];
});

afterEach(() => {
  cleanup();
});

describe('Render the list of programs', () => {
  test('should render a program without crashing', () => {
    render(<Program key={program.id} program={program} />);
    const programImage = screen.getByTestId('program-image');
    expect(programImage).toBeInTheDocument();
  });
  test('should contain program name in the program card', () => {
    render(<Program key={program.id} program={program} />);
    const progName = screen.getByTestId('program-name');
    expect(progName).toBeInTheDocument();
    expect(progName).toHaveTextContent(program.name);
  });
  test('should contain program dimension in the program card', () => {
    render(<Program key={program.id} program={program} />);
    const progDimension = screen.getByTestId('program-dimension');
    expect(progDimension).toBeInTheDocument();
    expect(progDimension).toHaveTextContent(program.dimension);
  });
  test('should contain program date in the program card', () => {
    render(<Program key={program.id} program={program} />);
    const progDate = screen.getByTestId('program-date');
    expect(progDate).toBeInTheDocument();
    expect(progDate).toHaveTextContent(getFormattedDate(program.start));
  });
});
