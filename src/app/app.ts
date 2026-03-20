import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conversation, Message, AgentMetadata } from './interfaces';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewChecked {
  @ViewChild('chatHistory') chatHistory!: ElementRef;

  conversations: Conversation[] = [];
  selectedConversation: Conversation | null = null;
  newMessage: string = '';
  agentMetadata: AgentMetadata = {
    model: 'gpt-4.1',
    latency: '1.2s',
    tokensUsed: 532,
    temperature: 0.7,
    maxTokens: 2048
  };

  private shouldScrollToBottom = false;

  constructor() {
    this.initializeMockData();
    this.selectedConversation = this.conversations[0];
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  private initializeMockData() {
    this.conversations = [
      {
        id: '1',
        title: 'Customer Support Bot',
        status: 'Active',
        lastUpdated: 'Updated 2 min ago',
        systemPrompt: 'You are a helpful customer support assistant. Be polite, professional, and provide accurate information to help customers with their inquiries.',
        messages: [
          {
            id: '1',
            sender: 'User',
            text: 'Hello, I need help with my account',
            timestamp: '10:30 AM'
          },
          {
            id: '2',
            sender: 'Agent',
            text: 'Hello! I\'d be happy to help you with your account. Could you please provide me with more details about the specific issue you\'re experiencing?',
            timestamp: '10:30 AM'
          },
          {
            id: '3',
            sender: 'User',
            text: 'I can\'t log in to my account. It says my password is incorrect.',
            timestamp: '10:31 AM'
          },
          {
            id: '4',
            sender: 'Agent',
            text: 'I understand how frustrating that can be. Let me help you reset your password. First, can you confirm the email address associated with your account?',
            timestamp: '10:31 AM'
          },
          {
            id: '5',
            sender: 'User',
            text: 'Yes, it\'s john.doe@email.com',
            timestamp: '10:32 AM'
          },
          {
            id: '6',
            sender: 'Agent',
            text: 'Perfect! I\'ve sent a password reset link to john.doe@email.com. Please check your email and follow the instructions. The link will expire in 24 hours.',
            timestamp: '10:32 AM'
          },
          {
            id: '7',
            sender: 'User',
            text: 'Great, I received the email. Thank you for your help!',
            timestamp: '10:33 AM'
          },
          {
            id: '8',
            sender: 'Agent',
            text: 'You\'re welcome! Is there anything else I can help you with today?',
            timestamp: '10:33 AM'
          },
          {
            id: '9',
            sender: 'User',
            text: 'No, that\'s all. Thanks again!',
            timestamp: '10:34 AM'
          },
          {
            id: '10',
            sender: 'Agent',
            text: 'My pleasure! Have a great day and don\'t hesitate to reach out if you need any further assistance.',
            timestamp: '10:34 AM'
          }
        ]
      },
      {
        id: '2',
        title: 'Code Review Assistant',
        status: 'Idle',
        lastUpdated: 'Updated 15 min ago',
        systemPrompt: 'You are an expert code reviewer. Analyze code for best practices, potential bugs, performance issues, and suggest improvements.',
        messages: [
          {
            id: '1',
            sender: 'User',
            text: 'Can you review this JavaScript function for me?',
            timestamp: '9:45 AM'
          },
          {
            id: '2',
            sender: 'Agent',
            text: 'Of course! Please share the JavaScript function you\'d like me to review, and I\'ll analyze it for best practices, potential issues, and improvements.',
            timestamp: '9:45 AM'
          },
          {
            id: '3',
            sender: 'User',
            text: 'function calculateTotal(items) {\n  var total = 0;\n  for (var i = 0; i < items.length; i++) {\n    total += items[i].price;\n  }\n  return total;\n}',
            timestamp: '9:46 AM'
          },
          {
            id: '4',
            sender: 'Agent',
            text: 'Good function! Here are some suggestions:\n\n1. Use const/let instead of var\n2. Consider using array methods like reduce()\n3. Add input validation\n\nImproved version:\n\nconst calculateTotal = (items) => {\n  if (!Array.isArray(items)) return 0;\n  return items.reduce((total, item) => total + (item?.price || 0), 0);\n}',
            timestamp: '9:46 AM'
          }
        ]
      },
      {
        id: '3',
        title: 'Data Analysis Bot',
        status: 'Active',
        lastUpdated: 'Updated 5 min ago',
        systemPrompt: 'You are a data analysis expert. Help users understand their data, create visualizations, and derive meaningful insights.',
        messages: [
          {
            id: '1',
            sender: 'User',
            text: 'I have sales data for the last quarter. Can you help me analyze it?',
            timestamp: '10:15 AM'
          },
          {
            id: '2',
            sender: 'Agent',
            text: 'Absolutely! I\'d be happy to help you analyze your sales data. Could you please share the data or describe what specific aspects you\'d like to analyze?',
            timestamp: '10:15 AM'
          },
          {
            id: '3',
            sender: 'User',
            text: 'I want to identify trends and top-performing products.',
            timestamp: '10:16 AM'
          }
        ]
      },
      {
        id: '4',
        title: 'API Documentation Helper',
        status: 'Error',
        lastUpdated: 'Updated 1 hour ago',
        systemPrompt: 'You help developers understand and implement APIs. Provide clear examples, explain endpoints, and troubleshoot integration issues.',
        messages: [
          {
            id: '1',
            sender: 'User',
            text: 'I\'m getting a 401 error when calling your API',
            timestamp: '9:20 AM'
          },
          {
            id: '2',
            sender: 'Agent',
            text: 'A 401 error indicates an authentication issue. Let me help you troubleshoot this. Are you including the API key in your request headers?',
            timestamp: '9:20 AM'
          }
        ]
      },
      {
        id: '5',
        title: 'Learning Assistant',
        status: 'Idle',
        lastUpdated: 'Updated 30 min ago',
        systemPrompt: 'You are an educational assistant. Help users learn new concepts by breaking them down into digestible parts and providing examples.',
        messages: [
          {
            id: '1',
            sender: 'User',
            text: 'Can you explain machine learning in simple terms?',
            timestamp: '9:50 AM'
          },
          {
            id: '2',
            sender: 'Agent',
            text: 'Sure! Think of machine learning like teaching a computer to recognize patterns, just like how you learned to recognize faces or handwriting. The computer looks at lots of examples and learns to make predictions or decisions based on what it has seen before.',
            timestamp: '9:50 AM'
          }
        ]
      }
    ];
  }

  onEnterKey(event: KeyboardEvent) {
    if (event.ctrlKey) {
      this.sendMessage();
    }
  }

  selectConversation(conversation: Conversation) {
    this.selectedConversation = conversation;
    this.shouldScrollToBottom = true;
  }

  sendMessage() {
    if (!this.newMessage.trim() || !this.selectedConversation) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'User',
      text: this.newMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.selectedConversation.messages.push(userMessage);
    this.newMessage = '';
    this.shouldScrollToBottom = true;

    // Simulate agent response after 1 second
    setTimeout(() => {
      this.simulateAgentResponse();
    }, 1000);
  }

  private simulateAgentResponse() {
    if (!this.selectedConversation) return;

    const responses = [
      "Thank you for your message. I'm processing your request and will provide a detailed response shortly.",
      "I understand your question. Let me analyze this and provide you with the most accurate information.",
      "That's a great point! Based on the context, here's what I recommend...",
      "I can help you with that. Let me break this down into manageable steps for you.",
      "Excellent question! This is a common scenario, and I have some best practices to share.",
      "I see what you're trying to accomplish. Here's the most efficient approach to solve this problem."
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const agentMessage: Message = {
      id: Date.now().toString(),
      sender: 'Agent',
      text: randomResponse,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.selectedConversation.messages.push(agentMessage);
    this.shouldScrollToBottom = true;

    // Update conversation timestamp
    this.selectedConversation.lastUpdated = 'Updated just now';
  }

  private scrollToBottom() {
    if (this.chatHistory) {
      const element = this.chatHistory.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }
}
