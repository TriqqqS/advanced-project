import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const resourceAssets = {
    test: /\.(png|jpe?g|gif)$/i,
    type: "asset/resource",
  };

  // const sourceAssets = {
  //   test: /\.svg$/,
  //   type: "asset/source",
  // };

  const cssLoader = buildCssLoader(isDev);

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [resourceAssets, svgLoader, cssLoader, typeScriptLoader];
}
