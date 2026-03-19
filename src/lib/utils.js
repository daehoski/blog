import crypto from 'crypto';

/**
 * Generates a short, deterministic hash for a given string.
 * Used for creating "mysterious" but persistent slugs for quiz ranges.
 * @param {string} input - The input string (e.g., 'q01-25')
 * @returns {string} - A 6-character deterministic hash
 */
export function generateSlug(input) {
  return crypto
    .createHash('sha256')
    .update(input)
    .digest('hex')
    .substring(0, 6);
}

/**
 * A mapping of all quiz ranges to their deterministic slugs.
 * This ensures consistency across the site.
 */
export const quizSlugMap = {
  'q01-25': generateSlug('q01-25'),
  'q26-50': generateSlug('q26-50'),
  'q51-75': generateSlug('q51-75'),
  'q76-100': generateSlug('q76-100'),
  'q101-125': generateSlug('q101-125'),
  'q126-150': generateSlug('q126-150'),
  'q151-175': generateSlug('q151-175'),
  'q176-200': generateSlug('q176-200'),
  'q201-225': generateSlug('q201-225'),
  'q226-250': generateSlug('q226-250'),
  'q251-275': generateSlug('q251-275'),
  'q276-300': generateSlug('q276-300'),
  'q301-325': generateSlug('q301-325'),
  'q326-350': generateSlug('q326-350'),
  'q351-375': generateSlug('q351-375'),
  'q376-400': generateSlug('q376-400'),
  'q401-425': generateSlug('q401-425'),
  'q426-450': generateSlug('q426-450'),
  'q451-475': generateSlug('q451-475'),
  'q476-500': generateSlug('q476-500'),
  'q501-525': generateSlug('q501-525'),
  'q526-550': generateSlug('q526-550'),
  'q551-575': generateSlug('q551-575'),
  'q576-600': generateSlug('q576-600'),
  'q601-625': generateSlug('q601-625'),
  'q626-650': generateSlug('q626-650'),
  'q651-675': generateSlug('q651-675'),
  'q676-700': generateSlug('q676-700'),
  'q701-725': generateSlug('q701-725')
};

/**
 * Reverse mapping for lookup when handling routes by slug
 */
export const quizRangeMap = Object.fromEntries(
  Object.entries(quizSlugMap).map(([range, slug]) => [slug, range])
);
