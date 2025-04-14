import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
};

export default nextConfig;

// async headers() {
// 	return [
// 		{
// 			source: "/:path*",
// 			headers: [
// 				{
// 					key: "Content-Security-Policy",
// 					value: `
// 						default-src 'self';
// 						connect-src 'self' https://*.checkout.com https://checkout.com https://*.crossmint.com https://crossmint.com;
// 						frame-src 'self' https://*.checkout.com https://checkout.com https://*.crossmint.com https://crossmint.com;
// 						script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.checkout.com https://checkout.com https://*.crossmint.com https://crossmint.com;
// 						img-src 'self' https://*.checkout.com https://checkout.com data:;
// 						style-src 'self' 'unsafe-inline';
// 						form-action 'self' https://*.checkout.com https://checkout.com;
// 					`
// 						.replace(/\s+/g, " ")
// 						.trim(),
// 				},
// 			],
// 		},
// 	];
// },
