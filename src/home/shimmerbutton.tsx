import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";

const shimmerbutton = () => {
  return (
    <div className="z-10 flex min-h-[rem] items-center justify-center">
      <ShimmerButton className="shadow-lg">
        <span className="whitespace-pre-wrap text-center text-xs font-normal 
        leading-none tracking-tight text-white dark:from-white
         dark:to-slate-900/10 lg:text-lg">
         <Link href="/secondscreen">Start Conversation</Link>
        </span>
      </ShimmerButton>
    </div>
  );
}

export default shimmerbutton;
