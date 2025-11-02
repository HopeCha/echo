import { createDeepSeek, deepseek } from "@ai-sdk/deepseek";
import { createOpenAI, openai } from "@ai-sdk/openai";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

const openaiProxy = createOpenAI({
  baseURL: "https://api.gpt.ge/v1/",
  apiKey: process.env.OPENAI_API_KEY ?? '',
})

export const supportAgent = new Agent(components.agent, {
  chat: openaiProxy.chat('gpt-4o-mini'),
  instructions: "You are a customer support agent"
});

// const deepseek = createDeepSeek({
//   apiKey: process.env.DEEPSEEK_API_KEY ?? '',
// });

// export const supportAgent = createOpenAI({
//   apiKey: process.env.OPENAI_API_KEY ?? '',
//   baseURL: process.env.OPENAI_BASE_URL ?? '',
// })

// export const supportAgent = new Agent(components.agent, {
//   name: "Basic Agent",
//   chat: deepseek.chat('deepseek-chat'),
// }); 


