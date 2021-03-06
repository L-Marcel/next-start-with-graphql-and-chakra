module.exports = {
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    "@babel/plugin-transform-modules-commonjs",
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
	presets: [
		'next/babel'
	] 
};