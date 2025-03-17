import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        fileParallelism: false,
        // transform: {
        //     '^.+.tsx?$': ['ts-jest', {}],
        // },
        // setupFiles: ['test/setup.ts'],
        globalSetup: 'tests/globalsetup.ts',
        setupFiles: 'tests/setup.ts',
        // setupFiles: ['tests/setupEach.ts'],
    },
});
