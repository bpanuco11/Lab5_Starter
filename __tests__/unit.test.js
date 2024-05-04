// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


//isPhoneNumber tests
test('invalid phone number', () => {
  // TODO
  const number = 1234567894;
  expect(isPhoneNumber(number)).toBe(false);
});

test('invalid phone number', () => {
  // TODO
  const number = 1234;
  expect(isPhoneNumber(number)).toBe(false);
});

test('valid phone number', () => {
  // TODO
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number', () => {
  // TODO
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

//isEmail test

test('valid email', () => {
  // TODO
  expect(isEmail('person@ucsd.edu')).toBe(true);
});

test('valid email', () => {
  // TODO
  expect(isEmail('anotherperson@gmail.com')).toBe(true);
});

test('invalid email', () => {
  // TODO
  expect(isEmail('thisisawebsite.com')).toBe(false);
});

test('invalid email', () => {
  // TODO
  expect(isEmail('Random@@@@somethingthinst.lol')).toBe(false);
});

//isStrongPassword tests

test('valid strong password', () => {
  // TODO
  expect(isStrongPassword('Thisisapassword')).toBe(true);
});

test('valid strong password', () => {
  // TODO
  expect(isStrongPassword('anotherone1')).toBe(true);
});

test('invalid strong password', () => {
  // TODO
  expect(isStrongPassword('A')).toBe(false);
});

test('invalid strong password', () => {
  // TODO
  expect(isStrongPassword('1234567890abcdef')).toBe(false);
});

//isDate tests

test('valid date', () => {
  // TODO
  expect(isDate('01/01/2003')).toBe(true);
});

test('valid date', () => {
  // TODO
  expect(isDate('12/12/2009')).toBe(true);
});

test('invalid date', () => {
  // TODO
  expect(isDate('letters')).toBe(false);
});

test('invalid date', () => {
  // TODO
  expect(isDate('01012003')).toBe(false);
});

//isHexColor tests

test('valid hexcolor', () => {
  // TODO
  expect(isHexColor('AAAFFF')).toBe(true);
});

test('valid hexcolor', () => {
  // TODO
  expect(isHexColor('ABC')).toBe(true);
});

test('invalid hexcolor', () => {
  // TODO
  expect(isHexColor('apple')).toBe(false);
});

test('invalid hexcolor', () => {
  // TODO
  expect(isHexColor(':)')).toBe(false);
});
