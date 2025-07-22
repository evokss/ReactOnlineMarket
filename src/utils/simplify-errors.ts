/**
 * Utility to transform an array of API validation errors into an object,
 * where the key is the field name and the value is an array of error messages for that field.
 * General errors are grouped under the "other" key.
 * @param issues An array of objects containing path and message for each error
 * @returns An object mapping field names to arrays of error messages
 */
export default function simplifyErrors(
  issues: Array<{ path: string[]; message: string }> = []
): Record<string, string[]> {
  const result: Record<string, string[]> = {};

  for (const issue of issues) {
    const key = issue.path.length > 0 ? issue.path.join('.') : 'other';
    result[key] = result[key] ? [...result[key], issue.message] : [issue.message];
  }

  return result;
}
