import * as components from '../../vendor/gluestack-ui/modal';
import { groupWithComponentImport } from '../../hoc/customCmponent';

const customComponents = groupWithComponentImport('modal', components);

export const Modal = customComponents.Modal;
export const ModalBackdrop = customComponents.ModalBackdrop;
export const ModalContent = customComponents.ModalContent;
export const ModalCloseButton = customComponents.ModalCloseButton;
export const ModalHeader = customComponents.ModalHeader;
export const ModalBody = customComponents.ModalBody;
export const ModalFooter = customComponents.ModalFooter;
