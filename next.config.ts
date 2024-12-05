import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule: {test?: RegExp}) => rule.test instanceof RegExp && rule.test.test('.svg'));

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/]},
                use: ['@svgr/webpack'],
            }
        )
        return config;
    }
};

export default nextConfig;
