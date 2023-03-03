/**
 * @jest-environment jsdom
 */

import GeneratePassword from "../js/helpers/GeneratePassword.js";

const generatePassword = new GeneratePassword();

describe("Testing GeneratePassword method", () => {
  test("testing if the tesing return a password with correct length", () => {
    const password = generatePassword.generatePassword(
      6,
      true,
      true,
      true,
      true
    );
    expect(password.length).toEqual(6);
  });

  test("testing if the tesing return a password with correct length and only lowercase characters", () => {
    const password = generatePassword.generatePassword(
      6,
      true,
      false,
      false,
      false
    );

    expect(password.length).toEqual(6);
    expect(/^[a-z]{6}$/.test(password)).toBe(true);
  });

  test("testing if the tesing return a password with correct length and only uppercase characters", () => {
    const password = generatePassword.generatePassword(
      6,
      false,
      true,
      false,
      false
    );

    expect(password.length).toEqual(6);
    expect(/^[A-Z]{6}$/.test(password)).toBe(true);
  });

  test("testing if the tesing return a password with correct length and only number characters", () => {
    const password = generatePassword.generatePassword(
      6,
      false,
      false,
      true,
      false
    );

    expect(password.length).toEqual(6);
    expect(/^[0-9]{6}$/.test(password)).toBe(true);
  });

  test("testing if the tesing return a password with correct length and only symbol characters", () => {
    const password = generatePassword.generatePassword(
      6,
      false,
      false,
      false,
      true
    );

    expect(password.length).toEqual(6);
    expect(/^[^a-zA-Z0-9\s]{6}$/.test(password)).toBe(true);
  });
});
