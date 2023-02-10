import { render } from '@testing-library/react';

import StorageReader from './storage';

describe('Storage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorageReader />);
    expect(baseElement).toBeTruthy();
  });
});
