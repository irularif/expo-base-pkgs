import * as components from '../../vendor/gluestack-ui/keyboard-avoiding-view';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport(
  'keyboardAvoidingView',
  components
);

export const KeyboardAvoidingView = customComponents.KeyboardAvoidingView;
