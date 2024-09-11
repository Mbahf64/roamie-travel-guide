

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const shineBorder = () => {
  return (
    <div className="z-10 flex min-h-[rem] items-center justify-center ">
      <AnimatedGradientText>
        <span
          className={cn(
            `inline text-center text-[#646d80] text-sm font-normal font-sf-pro `
          )}
        >
          I wish I was coming with you though but that's fine 😉.
        </span>
      </AnimatedGradientText>
    </div>
  );
};

export default shineBorder;
