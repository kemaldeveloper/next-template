import { SourceHTMLAttributes, VideoHTMLAttributes } from 'react';
import { makeStyles } from 'tss-react/mui';

type UiVideoProps = {
  src: string;
  videoProps?: VideoHTMLAttributes<HTMLVideoElement>;
  sourceProps?: SourceHTMLAttributes<HTMLSourceElement>;
};

export const UiVideo = (props: UiVideoProps) => {
  const { classes, cx } = useStyles();

  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      preload="auto"
      width="100%"
      height="100%"
      controls={false}
      {...props.videoProps}
      className={cx(classes.video, props.videoProps?.className)}
    >
      <source src={props.src} type="video/mp4" {...props.sourceProps} />
      Your browser does not support the video tag.
    </video>
  );
};

const useStyles = makeStyles()(theme => ({
  video: {
    width: '100%',
    height: '100%',
    '&:focus': {
      outline: 'none',
    },
  },
}));
