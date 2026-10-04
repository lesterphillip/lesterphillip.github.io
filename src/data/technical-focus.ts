export interface TechnicalFocus {
  category: string;
  details: string;
}

export const technicalFocusData: TechnicalFocus[] = [
  {
    category: "ML Frameworks",
    details: "PyTorch, Megatron-Bridge, NeMo AutoModel, verl, TRL, vLLM",
  },
  {
    category: "Research Areas",
    details: "SFT, RL post-training (GRPO, DPO, KTO), reward design",
  },
  {
    category: "Infrastructure",
    details:
      "Multi-node GPU training (FSDP, expert parallelism, context parallelism)",
  },
  {
    category: "Languages",
    details: "English (native), Tagalog (native), Japanese (upper intermediate)",
  },
];
