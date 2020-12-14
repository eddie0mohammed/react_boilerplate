module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
  },
};
