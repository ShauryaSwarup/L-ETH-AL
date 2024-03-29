"use client";

import * as React from "react";
import {
	RainbowKitProvider,
	getDefaultWallets,
	getDefaultConfig,
	darkTheme,
} from "@rainbow-me/rainbowkit";
import {
	argentWallet,
	trustWallet,
	ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
	arbitrum,
	base,
	mainnet,
	optimism,
	polygon,
	polygonMumbai,
	sepolia,
	zora,
	localhost,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
	appName: "RainbowKit demo",
	projectId: "3fbb6bba6f1de962d911bb5b5c9dba88",
	wallets: [
		...wallets,
		{
			groupName: "Other",
			wallets: [argentWallet, trustWallet, ledgerWallet],
		},
	],
	chains: [
		mainnet,
		polygon,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
			? [sepolia, polygonMumbai]
			: []),
		optimism,
		arbitrum,
		base,
		zora,
		localhost,
	],
	ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
