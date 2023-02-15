module.exports = {
    parserOptions: {
        project: './tsconfig.json',
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
    overrides: [],
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/jsx-no-undef': 'error',
        'react/prop-types': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        "react/display-name": 'off'
    },
};
