/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/ottawa",
                permanent: true,
            },
        ];
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

module.exports = nextConfig;
