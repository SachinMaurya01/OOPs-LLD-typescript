import { describe, expect, test } from '@jest/globals';
import { parseCronString } from '../parser';
import { parseMinutes } from '../parser';

describe('Crontab parser', () => {
  test('should parse a crontab entry 1 1 1 1 1', () => {
    const parsedCrontab = parseCronString('1 1 1 1 1');
    expect(parsedCrontab).toEqual({
      minute: [1],
      hour: [1],
      dayOfMonth: [1],
      month: [1],
      dayOfWeek: [1],
    });
  });
  test('should not parse a crontab entry 1 1 1 1', () => {
    const parsedCrontab = parseCronString('1 1 1 1');
    expect(parsedCrontab).toEqual({
      minute: [1],
      hour: [1],
      dayOfMonth: [1],
      month: [1],
      dayOfWeek: [1],
    });
  });

  describe('parseMinutes', () => {
    test('should parse *', () => {
      const parsedMinutes = parseMinutes('*');
      expect(parsedMinutes).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]);
    });

    test('should parse 1', () => {
      const parsedMinutes = parseMinutes('1');
      expect(parsedMinutes).toEqual([1]);
    });

    test('should parse 1-5', () => {
      const parsedMinutes = parseMinutes('1-5');
      expect(parsedMinutes).toEqual([1,2,3,4,5]);
    });

    test('should parse 1-5/2', () => {
      const parsedMinutes = parseMinutes('1,5');
      expect(parsedMinutes).toEqual([1,3,5]);
    });

    test("should parse 1,5,10-15,20/2", () => {
      const parsedMinutes = parseMinutes('1,5,10-15,20/2');
      expect(parsedMinutes).toEqual([1,5,10,12,14,20]);
    });
  }
});