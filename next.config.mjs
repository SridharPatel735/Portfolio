/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist', // GitHub Pages serves from the 'docs' directory by default
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
};

export default nextConfig;