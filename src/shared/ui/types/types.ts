import { DialogProps, IconButtonProps, TextFieldProps } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

export type UiTextFieldProps = TextFieldProps & {
  errors?: string | string[];
};

export type HookFormProps = Partial<UseFormReturn>;
export type CustomControllerProps = {
  name: string;
  hookFormProps: Omit<HookFormProps, 'control'> & { control: any };
};

export type UiModalProps = DialogProps & {
  modalClassName?: string;
  disableCloseBtn?: boolean;
  modalMaxWidthValue?: string | number;
  minHeight?: string | number;
  iconButtonProps?: IconButtonProps;
  whiteCloseBtn?: boolean;
  onHandleCloseBtn?: () => void;
};
