import * as components from '../../vendor/gluestack-ui/input-accessory-view';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(
  'inputAccessoryView',
  components
);

export const InputAccessoryView = customComponents.InputAccessoryView;
