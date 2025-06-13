import * as components from '../../vendor/gluestack-ui/safe-area-view';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('safeAreaView', components);

export const SafeAreaView = customComponents.SafeAreaView;
