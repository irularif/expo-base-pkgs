import * as components from '../../vendor/gluestack-ui/section-list';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('sectionList', components);

export const SectionList = customComponents.SectionList;
