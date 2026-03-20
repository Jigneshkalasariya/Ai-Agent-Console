# AI Agent Console

A simple Angular 17+ application featuring a chat-style interface for AI agent interactions.

## Features

- **Fixed Header**: "AI Agent Console" title with subtle box-shadow
- **Two-Column Layout**: 30% conversations list, 70% active chat area
- **Conversations List**: 5 mock conversations with status badges and timestamps
- **Interactive Chat**: Click conversations to view details and chat history
- **System Prompt Display**: Readonly text area showing conversation context
- **Chat History**: Scrollable area with 10+ mock messages per conversation
- **Message Styling**: Different styling for User vs Agent messages
- **Agent Metadata**: Key-value pairs showing model info, latency, tokens, etc.
- **Live Messaging**: Send messages with automatic agent responses (1-second delay)
- **Responsive Design**: Mobile-friendly layout

## Technology Stack

- Angular 17+ (Standalone Components)
- TypeScript with strongly typed interfaces
- Pure CSS (no external frameworks)
- No routing, no external dependencies
- In-memory data storage

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation & Running

1. **Navigate to project directory:**
   ```bash
   cd ai-agent-console
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   ng serve
   ```

4. **Open browser:**
   Navigate to `http://localhost:4200`

The application will automatically reload when you make changes to the source files.

## Usage

1. **Select Conversation**: Click any conversation in the left panel to view its details
2. **View Chat History**: Scroll through existing messages in the chat area
3. **Send Messages**: Type in the textarea and click "Send" or press Ctrl+Enter
4. **Agent Responses**: Automatic responses appear after 1 second
5. **View Metadata**: Check agent run information below the chat area

## Project Structure

```
src/app/
├── interfaces.ts      # TypeScript interfaces (Conversation, Message, AgentMetadata)
├── app.ts            # Main component with all logic
├── app.html          # Template with chat interface
├── app.css           # Component-specific styles
└── ...
```

## Key Interfaces

- **Conversation**: id, title, status, lastUpdated, systemPrompt, messages[]
- **Message**: id, sender, text, timestamp
- **AgentMetadata**: model, latency, tokensUsed, temperature, maxTokens

## Build for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Additional Commands

- **Run tests**: `ng test`
- **Run linting**: `ng lint`
- **Generate component**: `ng generate component component-name`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)