import createMDX from '@next/mdx'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const githubPagesBasePath = '/velkostudio'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGithubPages ? `${githubPagesBasePath}/` : undefined,
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
