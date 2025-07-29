// file: lib/utils.js

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names and merges Tailwind conflicting classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
