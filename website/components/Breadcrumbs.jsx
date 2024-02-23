import React from "react";
import Link from "next/link";

function Breadcrumbs({ currentPage }) {
	// Ensure currentPage is a string before processing
	if (typeof currentPage !== "string") {
		currentPage = "";
	}

	// Define a mapping of page routes to breadcrumb labels
	const breadcrumbMap = {
		"/home": "Home",
		"/home/currentjobs": "Current Jobs",
		"/home/joblisting": "Job Listing",
		"/home/employeelisting": "Employee Listing",
		"/home/nftlisting": "NFT Listing",
		"/home/currentemployees": "Current Employees",
		// Add more routes and corresponding breadcrumb labels as needed
	};

	// Generate breadcrumb elements based on the current page
	const breadcrumbs = currentPage
		.split("/")
		.filter(Boolean)
		.map((path, index, arr) => {
			const route = `/${arr.slice(0, index + 1).join("/")}`;
			return (
				<li key={route}>
					{index === arr.length - 1 ? (
						// Current page, no link
						<span>{breadcrumbMap[route]}</span>
					) : (
						// Other pages, render as link
						<Link href={route}>
							<a>{breadcrumbMap[route]}</a>
						</Link>
					)}
				</li>
			);
		});
console.log(breadcrumbs)
	return (
		<div className="text-sm breadcrumbs mx-10 -my-2">
			<ul>{breadcrumbs}</ul>
		</div>
	);
}

export default Breadcrumbs;
