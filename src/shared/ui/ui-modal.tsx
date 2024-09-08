import { Dialog, IconButton, alpha, dialogClasses } from '@mui/material';
import { forwardRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import { UiModalProps } from './types/types';

export const UiModal = forwardRef<HTMLDivElement, UiModalProps>((props, ref) => {
  const {
    children,
    className,
    whiteCloseBtn,
    iconButtonProps,
    modalClassName,
    modalMaxWidthValue,
    minHeight,
    disableCloseBtn,
    onHandleCloseBtn,
    ...rest
  } = props;
  const { classes, cx } = useStyles({ modalMaxWidthValue, minHeight });

  const handleClose = (e: any, r: any) => {
    e.stopPropagation();

    if (props.onClose) {
      props.onClose(e, r);
    }
  };

  const handleCloseBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onHandleCloseBtn?.();
  };

  return (
    <Dialog
      onClose={handleClose}
      scroll="body"
      disableRestoreFocus
      className={className}
      {...rest}
      PaperProps={{ elevation: 4, ...rest.PaperProps, className: cx(classes.modal, modalClassName) }}
      ref={ref}
    >
      {!disableCloseBtn && (
        <IconButton
          size="large"
          {...iconButtonProps}
          onClick={e => {
            handleClose(e, null);
            handleCloseBtn(e);
          }}
          className={cx(iconButtonProps?.className, classes.closeButton, 'close-button', { white: whiteCloseBtn })}
        >
          <i className="custom-icon-close" />
        </IconButton>
      )}

      {children}
    </Dialog>
  );
});

const useStyles = makeStyles<{ modalMaxWidthValue?: string | number; minHeight?: string | number }>()((
  theme,
  props,
) => {
  return {
    modal: {
      padding: theme.spacing(4, 3),
      [theme.breakpoints.up('xxs')]: {
        [`&.${dialogClasses.paperScrollBody}`]: {
          maxWidth: props.modalMaxWidthValue || 330,
          minHeight: props.minHeight || 216,
        },
      },
      [theme.breakpoints.up('sm')]: {
        [`&.${dialogClasses.paperScrollBody}`]: {
          maxWidth: props.modalMaxWidthValue || 520,
          minHeight: props.minHeight || 236,
        },
      },
      [theme.breakpoints.up('xl')]: {
        [`&.${dialogClasses.paperScrollBody}`]: {
          maxWidth: props.modalMaxWidthValue || 520,
          minHeight: props.minHeight || 256,
        },
      },
    },
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1.5),
      right: theme.spacing(1.5),
      zIndex: 1,
      '&.white': {
        color: theme.palette.custom.general.white,
        '&:not([disabled])': {
          '&:hover': {
            color: alpha(theme.palette.custom.general.white, 0.8),
            background: 'transparent',
          },
          '&:focus': {
            color: alpha(theme.palette.custom.general.white, 1),
            background: 'transparent',
          },
        },
      },
    },
  };
});
