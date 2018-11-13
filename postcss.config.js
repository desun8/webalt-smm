module.exports = {
  plugins: [
    require('postcss-partial-import'),
    require('postcss-apply'),
    require('postcss-preset-env')({ stage: 0 }),
    require('postcss-nested'),
    require('cssnano')({ preset: 'default' }),
  ],
};
