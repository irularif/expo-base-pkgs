import { merge } from 'lodash';
import type { ZodSchema, ParseParams } from 'zod';

/**
 * Allows you to easily use Zod schemas with the <Formik /> component `validate`
 * prop.
 *
 * ```js
 * <Formik {...} validate={withZodSchema(yourSchema)}>
 * ```
 */
export const withZodSchema =
  <T>(schema: ZodSchema<T>, params?: Partial<ParseParams>) =>
  (values: T): Partial<T> => {
    const result = schema.safeParse(values, params);

    if (result.success) return {};

    return result.error.issues.reduce((acc, curr) => {
      return merge(
        acc,
        curr.path.reduceRight(
          (errors, pathSegment) => ({
            [pathSegment]: !Object.keys(errors).length ? curr.message : errors,
          }),
          {}
        )
      );
    }, {});
  };
