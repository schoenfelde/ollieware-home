"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const THEMES = [
  { value: "system", label: "System", icon: Laptop },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const currentTheme = React.useMemo(() => {
    if (!mounted) return "system";
    if (theme === "system") return systemTheme ?? "system";
    return theme ?? "system";
  }, [mounted, theme, systemTheme]);

  const Icon = React.useMemo(() => {
    if (currentTheme === "dark") return Moon;
    if (currentTheme === "light") return Sun;
    return Laptop;
  }, [currentTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full"
          aria-label="Toggle theme"
        >
          <Icon className="h-5 w-5" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        {THEMES.map(({ value, label, icon: OptionIcon }) => (
          <DropdownMenuItem
            key={value}
            className="flex items-center gap-2"
            onClick={() => setTheme(value)}
          >
            <OptionIcon className="h-4 w-4" aria-hidden />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
