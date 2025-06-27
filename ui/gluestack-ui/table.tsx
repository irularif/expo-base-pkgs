import * as components from '../../vendor/gluestack-ui/table';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(components);

export const {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableData,
  TableCaption,
} = customComponents satisfies typeof customComponents;
