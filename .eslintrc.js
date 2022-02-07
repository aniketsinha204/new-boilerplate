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
        'react/jsx-fragments': ['off'],
        'no-console': 'off',
        'react/destructuring-assignment': 'off',
        'no-param-reassign': 'off',
        'no-restricted-globals': 'off',
        'react/no-array-index-key': 'off',
        'import/prefer-default-export': 'off',
        'global-require': 'off',
        'no-nested-ternary': 'off',
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
