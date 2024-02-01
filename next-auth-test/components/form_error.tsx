import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
};

export const FormError = ({
  message,
}: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 bg-red-200 mt-3 w-full text-red-500 p-2 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      {<ExclamationTriangleIcon className="h-4 w-4" />}
      <p>{message}</p>
    </div>
  );
};