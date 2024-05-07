/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname:"dependable-ferret-649.convex.cloud"},
            { hostname: "oaidalleapiprodscus.blob.core.windows.net" },
        ]
    }
};

export default nextConfig;
