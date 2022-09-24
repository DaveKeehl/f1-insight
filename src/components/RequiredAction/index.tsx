interface IRequiredAction {
  message: string;
}

export const RequiredAction = ({ message }: IRequiredAction) => {
  return (
    <div className="flex flex-auto flex-col items-center justify-center bg-brand-blue-400 text-brand-white-100">
      <h1 className="text-3xl font-medium">{message}</h1>
    </div>
  );
};
