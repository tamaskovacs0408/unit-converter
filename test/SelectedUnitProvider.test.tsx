// import { render, screen, act } from '@testing-library/react';
// import { describe, it, expect, afterEach } from 'bun:test';
// import { SelectedUnitProvider, SelectedUnitContext } from '../src/store/selectedUnitContext';
// import { useContext } from 'react';

// const TestComponent = () => {
//   const { selectedUnitState, handleUnitSelect } = useContext(SelectedUnitContext);
//   return (
//     <div>
//       <span data-testid="selected-unit">{selectedUnitState}</span>
//       <button onClick={() => handleUnitSelect('mass')}>Select Mass</button>
//     </div>
//   );
// };

// describe('SelectedUnitProvider', () => {
//   afterEach(() => {
//     document.body.innerHTML = '';
//   });

//   it('provides the correct initial state', () => {
//     render(
//       <SelectedUnitProvider>
//         <TestComponent />
//       </SelectedUnitProvider>
//     );
    
//     expect(screen.getByTestId('selected-unit').textContent).toBe('length');
//   });

//   it('updates the state when handleUnitSelect is called', async () => {
//     render(
//       <SelectedUnitProvider>
//         <TestComponent />
//       </SelectedUnitProvider>
//     );
    
//     const button = screen.getByRole('button', { name: 'Select Mass' });
    
//     await act(async () => {
//       button.click();
//     });
    
//     expect(screen.getByTestId('selected-unit').textContent).toBe('mass');
//   });
// });