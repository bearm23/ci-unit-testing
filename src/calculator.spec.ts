
import * as calculator from './calculator';
import * as business from './business/calculator.business';

// mock
jest.mock('./business/calculator.business', () => {
  return {
    isLowerThan: jest.fn().mockImplementation(() => {
      console.log('Another implementation');
    }),
    max: 7,
  };
});

describe('Calculator specs', () => {
  describe('add', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toEqual(4);
    });

    it('should call isLowerThan when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      // spy
      // const isLowerThanFive = jest.fn();
      // stub
      // const isLowerThanFive = jest
      //   .spyOn(business, 'isLowerThan')
      //   .mockImplementation((result) => {
      //     console.log(`This is the result ${result}`);
      //   });

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(business.isLowerThan).toHaveBeenCalled();
      expect(business.isLowerThan).toHaveBeenCalledWith(4, 7);
    });

    it('should call to original implementation isLowerThan', () => {
      // Arrange
      const a = 1;
      const b = 2;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toEqual(3);
    });
  });
});