module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        overrides: [
            {
                files: ['**/*.ts', '**/*.tsx'],
                plugins: ['@typescript-eslint'],
                extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
                parser: '@typescript-eslint/parser',
                parserOptions: {
                    project: ['./tsconfig.json'],
                },
            },
        ],
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': [0],
        'import/extensions': [0],
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
