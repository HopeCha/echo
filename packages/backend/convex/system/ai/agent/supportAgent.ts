import { createDeepSeek, deepseek } from "@ai-sdk/deepseek";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

// const deepseek = createDeepSeek({
//   apiKey: process.env.DEEPSEEK_API_KEY ?? '',
// });

export const supportAgent = new Agent(components.agent, {
  name: "Basic Agent",
  chat: deepseek.chat('deepseek-chat'),
}); 


