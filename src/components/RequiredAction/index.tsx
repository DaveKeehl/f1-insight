"use client";

import CardsTrigger from "@/components/CardsTrigger";

interface IRequiredAction {
  message: string;
}

export default function RequiredAction({ message }: IRequiredAction) {
  return (
    <div className="relative flex flex-auto flex-col items-center justify-center bg-brand-blue-400 text-brand-white-100">
      <CardsTrigger />
      <h1 className="text-3xl font-medium">{message}</h1>
    </div>
  );
}
