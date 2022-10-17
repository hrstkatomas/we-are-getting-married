import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html data-theme="valentine">
			<Head>
				<title>Tom a Zuzka se berou</title>
				<meta name="description" content="Tom a Zuzka se berou" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
