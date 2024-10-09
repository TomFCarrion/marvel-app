type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="text-red-500">{message}</div>;
};

export default ErrorMessage;
