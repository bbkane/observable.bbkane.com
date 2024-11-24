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