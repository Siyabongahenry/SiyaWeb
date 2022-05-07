const path = require("path");
const config = require("./webpack.config");
const {merge} = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(config, {
	mode:"production",
	output:{
		filename:"main.[contenthash].js",
		path:path.resolve(__dirname,"dist")
	},
	optimization:{
		minimizer:[
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin()
		] 
	}
});