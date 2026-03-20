/**
 * A mapping of all quiz ranges to their pre-calculated deterministic slugs.
 * Removed crypto dependency for browser compatibility.
 */
export const quizSlugMap = {
  'q01-25': 'cfd4cf',
  'q26-50': '53db04',
  'q51-75': 'c24948',
  'q76-100': '00192e',
  'q101-125': '750697',
  'q126-150': 'e79b94',
  'q151-175': '3a0053',
  'q176-200': '29388a',
  'q201-225': '9211c4',
  'q226-250': 'f9ccef',
  'q251-275': 'd61848',
  'q276-300': '35c437',
  'q301-325': 'e04832',
  'q326-350': 'a40f80',
  'q351-375': '3cc948',
  'q376-400': '170154',
  'q401-425': '197960',
  'q426-450': '371804',
  'q451-475': '20645c',
  'q476-500': 'fb39d4',
  'q501-525': 'e6259c',
  'q526-550': '796071',
  'q551-575': '90a40f',
  'q576-600': 'f781ea',
  'q601-625': '979602',
  'q626-650': '831d10',
  'q651-675': '03b71f',
  'q676-700': '01659a',
  'q701-725': '408a1c'
};

/**
 * Reverse mapping for lookup when handling routes by slug
 */
export const quizRangeMap = Object.fromEntries(
  Object.entries(quizSlugMap).map(([range, slug]) => [slug, range])
);
