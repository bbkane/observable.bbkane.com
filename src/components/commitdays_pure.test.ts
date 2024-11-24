// myTest.test.ts
import assert from 'node:assert';
import path from 'node:path';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
test('daysToCells()', { skip: false }, async (t) => {
    // Define test cases inside the main test
    const testCases = [
        { name: 'simple', days: [] },

    ];
    const updateTests = process.env.OBC_UPDATE_TESTS === 'true';

    // Run each test case as a subtest
    for (const { name, days } of testCases) {

        const goldenFile = path.resolve(__filename + "_testdata", `${name}.golden.json`);

        await t.test(`${name}`, () => {
            const actual = daysToCells(days);
            if (updateTests) {
                writeFileSync(goldenFile, JSON.stringify(actual, null, 2));
                console.log(`Updated ${goldenFile}`);
            }

            if (!existsSync(goldenFile)) {
                throw new Error(`Golden file not found: ${goldenFile}`);
            }

            const expected = JSON.parse(readFileSync(goldenFile, 'utf-8'));
            assert.deepStrictEqual(actual, expected);
        });
    }
});