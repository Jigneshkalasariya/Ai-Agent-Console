export interface Conversation {
  id: string;
  title: string;
  status: 'Active' | 'Idle' | 'Error';
  lastUpdated: string;
  systemPrompt: string;
  messages: Message[];
}

export interface Message {
  id: string;
  sender: 'User' | 'Agent';
  text: string;
  timestamp: string;
}

export interface AgentMetadata {
  model: string;
  latency: string;
  tokensUsed: number;
  temperature: number;
  maxTokens: number;
}