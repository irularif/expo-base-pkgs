import * as components from '../../vendor/gluestack-ui/scroll-view';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('scrollView', components);

export const ScrollView = customComponents.ScrollView;
