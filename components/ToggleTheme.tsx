"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<Button size="icon" className="border-none bg-transparent text-black">
			{theme === "dark" ? (
				<Sun onClick={() => setTheme("light")} className="" />
			) : (
				<Moon onClick={() => setTheme("dark")} className="" />
			)}
		</Button>
	);
}
