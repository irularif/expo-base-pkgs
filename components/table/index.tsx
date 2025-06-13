import * as components from '../../vendor/gluestack-ui/table';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('table', components);

export const Table = customComponents.Table;
export const TableHeader = customComponents.TableHeader;
export const TableBody = customComponents.TableBody;
export const TableFooter = customComponents.TableFooter;
export const TableHead = customComponents.TableHead;
export const TableRow = customComponents.TableRow;
export const TableData = customComponents.TableData;
export const TableCaption = customComponents.TableCaption;
