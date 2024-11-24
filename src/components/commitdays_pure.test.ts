// myTest.test.ts
import { test } from 'node:test';
import assert from 'node:assert';

import { daysToCells } from "./commitdays_pure.ts";

test('adds two numbers', () => {
    const result = 1 + 2;
    assert.strictEqual(result, 3);
});


// A simple function to test
function add(a, b) {
    return a + b;
}

// Main test with subtests
test('add() function tests', async (t) => {
    // Define test cases inside the main test
    const testCases = [
        { name: 'both positives', a: 1, b: 2, expected: 3 },
        { name: 'positive and negative', a: 5, b: -3, expected: 2 },
        { name: 'both negatives', a: -1, b: -1, expected: -2 },
        { name: 'with zero', a: 0, b: 7, expected: 7 },
    ];

    // Run each test case as a subtest
    for (const { name, a, b, expected } of testCases) {
        await t.test(`should return ${expected} for ${name}`, () => {
            assert.strictEqual(add(a, b), expected);
        });
    }
});

// Main test with subtests
test('daysToCells()', { skip: true }, async (t) => {
    // Define test cases inside the main test
    const testCases = [
        { name: 'simple', days: [], expected: [] },

    ];

    // Run each test case as a subtest
    for (const { name, days, expected } of testCases) {
        await t.test(`${name}`, () => {
            assert.strictEqual(daysToCells(days), expected);
        });
    }
});