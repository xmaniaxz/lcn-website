import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
  Display: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ToolTip = ({ Display, children,className,onClick }: TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onClick} className={className}>{Display}</TooltipTrigger>
        <TooltipContent>
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTip;
