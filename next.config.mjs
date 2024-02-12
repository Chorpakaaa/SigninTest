/** @type {import('next').NextConfig} */
import { join } from 'path';
import path from 'path';
const __dirname = path.resolve();
const nextConfig = {
    webpack(config, options) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@app': join(__dirname, 'src/app'),
            '@layouts': join(__dirname, 'src/layouts'),
            '@components': join(__dirname, 'src/components'),
            '@models': join(__dirname, 'src/models'),
            '@stores': join(__dirname, 'src/stores'),
            '@': __dirname
        }

        return config
    },
};

export default nextConfig;
