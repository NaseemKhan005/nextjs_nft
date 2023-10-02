"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { RiMoonLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

export default function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<button className="text-white dark:text-black w-fit text-xl">
			{theme === "light" ? (
				<BiSun onClick={() => setTheme("dark")} />
			) : (
				<RiMoonLine onClick={() => setTheme("light")} />
			)}
		</button>
	);
}
