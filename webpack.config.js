const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:"./src/index.js",
	plugins:[
		new HtmlWebpackPlugin(
			{
				template:"./src/template.html",
				filename:"../index.html",
				favicon:"./favicon.ico"
			}
		),
		new MiniCssExtractPlugin(
			{
				filename:"[name].[contenthash].css"
			}
		),
		new CleanWebpackPlugin()
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[MiniCssExtractPlugin.loader,"css-loader"]
			},
			{
				test:/\.scss$/,
				use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
			},
			{
				test:/\.html$/,
				use:["html-loader"]
			},
			{
				test:/\.(jpg|jpeg|svg|png|gif|ico)$/,
				type:"asset/resource"
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				type:"asset/resource"
			}
		]
	},
};