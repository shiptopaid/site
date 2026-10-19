import type { Post } from "@/lib/blog";
import { addPaymentsToAiBuiltApp } from "./add-payments-to-ai-built-app";
import { chargeForYourVibeCodedApp } from "./charge-for-your-vibe-coded-app";
import { customerPaidButNoAccess } from "./customer-paid-but-no-access";

export const posts: Post[] = [addPaymentsToAiBuiltApp, chargeForYourVibeCodedApp, customerPaidButNoAccess];
