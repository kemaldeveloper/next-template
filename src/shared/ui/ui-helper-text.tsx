import { Box } from '@mui/material';

type UiHelperTextProps = {
  content?: string | string[];
};

export const UiHelperText: React.FC<UiHelperTextProps> = props => {
  if (!props?.content) {
    return <></>;
  }

  if (Array.isArray(props?.content)) {
    return (
      <>
        {props?.content.map((item, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              display: 'block',
              mb: 0.5,
            }}
          >
            {item}
          </Box>
        ))}
      </>
    );
  }

  return <>{props?.content}</>;
};
