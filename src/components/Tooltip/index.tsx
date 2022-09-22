import * as T from "@radix-ui/react-tooltip";

interface ITooltip {
  children: React.ReactNode;
  text: string;
}

export const Tooltip = ({ text, children }: ITooltip) => {
  return (
    <T.Provider delayDuration={200}>
      <T.Root>
        <T.Trigger>{children}</T.Trigger>
        <T.Portal>
          <T.Content
            side="right"
            sideOffset={16}
            className="relative z-50 rounded-[6px] border border-brand-blue-100/5 bg-brand-blue-200 px-2 py-1 text-sm text-brand-white-100 shadow-lg"
          >
            {text}
            <T.Arrow className="fill-brand-blue-200 " height={7} />
          </T.Content>
        </T.Portal>
      </T.Root>
    </T.Provider>
  );
};
