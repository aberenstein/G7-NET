// src/lib/translation.ts

import common from "./common.json"
import React from "react"

// Define the type for the translation JSON (inferred from common.json)
type TranslationKeys = typeof common

// Utility to get nested values from an object using dot notation
function getNestedValue(obj: unknown, key: string): unknown {
  return key.split(".").reduce((current, part) => {
    return current && typeof current === "object" && current !== null
      ? (current as Record<string, unknown>)[part]
      : undefined
  }, obj)
}

// Type for interpolation values (can be string, number, or React component)
type InterpolationValues = Record<string, string | number | React.ReactNode>

// Main translation function (returns React.ReactNode for flexibility)
export function t(
  key: keyof TranslationKeys | string,
  values: InterpolationValues = {}
): React.ReactNode {
  // Get the raw translation string
  const translation = getNestedValue(common, key) || key

  // If translation is an object, return the key as fallback (avoid returning objects)
  if (typeof translation === "object" && translation !== null) {
    return key
  }

  // If translation is not a string, return the key as fallback
  if (typeof translation !== "string") {
    return key
  }

  // If no interpolation, return the translation as-is
  if (Object.keys(values).length === 0) {
    return translation
  }

  // Split the translation string and handle interpolation
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  const regex = /{{(\w+)}}/g

  translation.replace(regex, (match, key, index) => {
    // Add text before the match
    if (index > lastIndex) {
      parts.push(translation.slice(lastIndex, index))
    }

    // Add the interpolated value
    const value = values[key]
    parts.push(value ?? match) // Fallback to original match if value is undefined

    lastIndex = index + match.length
    return "" // Return empty string as we're collecting parts manually
  })

  // Add remaining text after the last match
  if (lastIndex < translation.length) {
    parts.push(translation.slice(lastIndex))
  }

  // If any part is a React component, return as array (React will render it)
  if (
    parts.some((part) => React.isValidElement(part) || typeof part === "object")
  ) {
    return parts
  }

  // Otherwise, join parts as a string
  return parts.join("")
}

// String-only translation function (for props like placeholder)
export function tString(
  key: keyof TranslationKeys | string,
  values: Record<string, string | number> = {}
): string {
  // Get the raw translation string
  const translation = getNestedValue(common, key) || key

  // If translation is not a string, return the key as fallback
  if (typeof translation !== "string") {
    return key
  }

  // If no interpolation, return the translation
  if (Object.keys(values).length === 0) {
    return translation
  }

  // Handle string-only interpolation
  return translation.replace(/{{(\w+)}}/g, (_, k) => {
    const value = values[k]
    return value != null ? String(value) : `{{${k}}}`
  })
}

// Hook for client components
import { useCallback } from "react"

export function useTranslations() {
  return {
    t: useCallback(
      (key: keyof TranslationKeys | string, values?: InterpolationValues) => {
        return t(key, values)
      },
      []
    ),
    tString: useCallback(
      (
        key: keyof TranslationKeys | string,
        values?: Record<string, string | number>
      ) => {
        return tString(key, values)
      },
      []
    ),
  }
}
