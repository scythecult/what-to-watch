type TMessageProps = {
  message?: string;
};

const Message = ({ message }: TMessageProps) => (
  <div>{message ?? 'No favorite films found...'}</div>
);

export { Message };
