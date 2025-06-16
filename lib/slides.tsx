// presentationSlides.ts
import React from 'react';
import { TitleSlide } from '@/components/layouts/TitleSlide';
import { TextOnly } from '@/components/layouts/TextOnly';
import { TextWithImage } from '@/components/layouts/TextWithImage';
import { CodeBlock } from '@/components/layouts/CodeBlock';
import { ImageOnly } from '@/components/layouts/ImageOnly';
import { ChartSlide } from '@/components/layouts/ChartSlide';
import { DemoSlide } from '@/components/layouts/DemoSlide';
import { ReactNode } from 'react';

interface SlideContent {
  component: React.ComponentType<any>;
  props: Record<string, unknown> & {
    content?: ReactNode;
    text?: ReactNode;
  };
  transition?: 'slide-left' | 'slide-right' | 'fade';
  background?: string;
}

export const presentationSlides: SlideContent[] = [
  // Slide 1: Title Slide
  {
    component: TitleSlide,
    props: {
      title: 'Artificial Intelligence & LLMs Explained',
      subtitle: (
        <>
          🤖 A Journey into the World of Thinking Machines
          <br />
          <span className="text-lg mt-4 block">From Calculators to Creativity</span>
        </>
      ),
    },
    transition: 'fade',
    background: 'animated-gradient',
  },

  // Slide 2: Agenda
  {
    component: TextOnly,
    props: {
      title: '🎯 What We\'ll Cover Today',
      content: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🧠</span>
            <span className="text-xl">Demystifying AI Jargon</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">⚡</span>
            <span className="text-xl">How LLMs Actually Work</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🛠️</span>
            <span className="text-xl">Prompt Engineering Techniques</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🚀</span>
            <span className="text-xl">AI Tools for Developers</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">💡</span>
            <span className="text-xl">Real-World Applications</span>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Slide 3: Jargon Buster
  {
    component: TextOnly,
    props: {
      title: '🔍 Let\'s Demystify the Jargon',
      content: (
        <div className="space-y-4 text-left">
          <div className="border-l-4 border-electric-blue pl-4">
            <p><span className="text-electric-blue font-bold">🤖 Artificial Intelligence</span> – umbrella term for machines that mimic human cognitive functions</p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <p><span className="text-green-400 font-bold">📊 ML (Machine Learning)</span> – systems that learn from data without explicit programming</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <p><span className="text-purple-400 font-bold">🧠 LLM (Large Language Model)</span> – AI trained to understand and generate human language</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <p><span className="text-yellow-400 font-bold">⚡ GPT</span> – Generative Pre-trained Transformer (architecture used by ChatGPT)</p>
          </div>
          <div className="border-l-4 border-pink-400 pl-4">
            <p><span className="text-pink-400 font-bold">🧩 Neural Network</span> – brain-inspired system of mathematical "neurons"</p>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: '#0A0E2A',
  },

  // Slide 4: Evolution Timeline
  {
    component: TextOnly,
    props: {
      title: '📈 From Calculators to Creativity',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">THEN</h3>
            <div className="space-y-2">
              <p>🧮 Glorified calculators</p>
              <p>📏 Strictly rule-followers</p>
              <p>🔒 Limited to programmed tasks</p>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-600 pt-8">
            <h3 className="text-2xl font-bold text-electric-blue mb-4">NOW</h3>
            <div className="space-y-2">
              <p>🧠 They can learn, reason, and communicate</p>
              <p>🎨 Enter Generative AI era</p>
              <p>🚀 Create, not just calculate</p>
            </div>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient',
  },

  // Slide 5: How LLMs Work
  {
    component: TextWithImage,
    props: {
      title: '⚙️ How It Works: From Baby Talk to Brainstorming',
      text: (
        <div className="space-y-4">
          <p className="text-lg">The power of LLMs lies in their ability to identify patterns in data and replicate them in new, original ways.</p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-blue-400">📚</span>
              <div>
                <span className="font-bold text-blue-400">Training:</span>
                <span className="ml-2">Feeding massive text datasets → learns to predict next word</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-400">🔄</span>
              <div>
                <span className="font-bold text-green-400">Backpropagation:</span>
                <span className="ml-2">When wrong, it adjusts its neural weights</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-purple-400">👥</span>
              <div>
                <span className="font-bold text-purple-400">RLHF:</span>
                <span className="ml-2">Teaching it not just what's right, but what's good</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-red-400">🛡️</span>
              <div>
                <span className="font-bold text-red-400">Human Layer:</span>
                <span className="ml-2">"Don't teach users how to rob a bank, even if you could"</span>
              </div>
            </div>
          </div>
        </div>
      ),
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Neural network visualization',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: '#1A1C2C',
  },

  // Slide 6: Vector Embeddings Pipeline
  {
    component: TextOnly,
    props: {
      title: '🔢 The Vector Embeddings Pipeline',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-3xl font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prompt → Tokenization → Vector Arrays → Inference → Vector Arrays → Output
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-electric-blue">🎯 What are Vectors?</h3>
              <p>Numbers representing words in high-dimensional space</p>
              <p>Similar words cluster together</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">🧠 How Embeddings Work</h3>
              <p>Context adjusts word positions</p>
              <p>Semantic relationships emerge naturally</p>
            </div>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient',
  },

  // Slide 7: Model Varieties
  {
    component: TextOnly,
    props: {
      title: '🌍 Models, Models Everywhere',
      content: (
        <div className="space-y-6">
          <p className="text-xl text-center mb-8">Not just ChatGPT. It's a jungle of models out there! 🌴</p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-green-400">💰 Commercial</h3>
              <ul className="space-y-2">
                <li>• ChatGPT (OpenAI)</li>
                <li>• Claude (Anthropic)</li>
                <li>• Gemini (Google)</li>
                <li>• ElevenLabs (Voice)</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-400">🔓 Open Source</h3>
              <ul className="space-y-2">
                <li>• LLaMA (Meta)</li>
                <li>• Whisper (OpenAI)</li>
                <li>• Stable Diffusion</li>
                <li>• Ollama (Local)</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-yellow-400">💡 <strong>Pro Tip:</strong> Online APIs vs Local/Offline deployment</p>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: '#0A0E2A',
  },

  // Slide 8: Modalities
  {
    component: TextOnly,
    props: {
      title: '🎭 AI Modalities: Beyond Text',
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💬</span>
              <div>
                <span className="font-bold text-blue-400">Text → Text:</span>
                <p className="text-sm">GPT-4, Claude – answer questions, write code</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎨</span>
              <div>
                <span className="font-bold text-purple-400">Text → Image:</span>
                <p className="text-sm">DALL·E, Midjourney – "a cat DJ in space"</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🖼️</span>
              <div>
                <span className="font-bold text-green-400">Image → Image:</span>
                <p className="text-sm">Photoshop AI – edit, blend, remix</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👁️</span>
              <div>
                <span className="font-bold text-yellow-400">Image → Text:</span>
                <p className="text-sm">CLIP – describe what's in an image</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎤</span>
              <div>
                <span className="font-bold text-red-400">Speech → Text:</span>
                <p className="text-sm">Transcribe meetings, voice memos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔊</span>
              <div>
                <span className="font-bold text-pink-400">Text → Audio:</span>
                <p className="text-sm">Generate soundtracks, voice narration</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎬</span>
              <div>
                <span className="font-bold text-cyan-400">Text → Video:</span>
                <p className="text-sm">AI-generated films from prompts</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🧬</span>
              <div>
                <span className="font-bold text-orange-400">Multimodal:</span>
                <p className="text-sm">GPT-4V – see, hear, and respond</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Slide 9: Control Parameters
  {
    component: TextWithImage,
    props: {
      title: '🎛️ Control Parameters: Fine-Tuning AI Behavior',
      text: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-800 rounded">
              <span className="font-bold text-blue-400">📏 Parameter Size:</span>
              <p className="text-sm">LLaMA 3.2 has 1B, 3B, 7B models</p>
            </div>
            
            <div className="p-3 bg-gray-800 rounded">
              <span className="font-bold text-green-400">🗜️ Quantization:</span>
              <p className="text-sm">Smaller model sizes for efficiency</p>
            </div>
            
            <div className="p-3 bg-gray-800 rounded">
              <span className="font-bold text-red-400">🌡️ Temperature:</span>
              <p className="text-sm">Controls randomness/creativity (0.0-2.0)</p>
            </div>
            
            <div className="p-3 bg-gray-800 rounded">
              <span className="font-bold text-purple-400">📏 Context Window:</span>
              <p className="text-sm">Maximum prompt length (tokens)</p>
            </div>
            
            <div className="p-3 bg-gray-800 rounded">
              <span className="font-bold text-yellow-400">🎯 top_p:</span>
              <p className="text-sm">Diversity control in generation</p>
            </div>
          </div>
        </div>
      ),
      imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Control panel concept',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: '#1A1C2C',
  },

  // Slide 10: Prompt Engineering Intro
  {
    component: TextOnly,
    props: {
      title: '🛠️ Prompt Engineering: Getting LLMs to Do What You Want',
      content: (
        <div className="space-y-8">
          <p className="text-xl text-center">The art and science of communicating with AI 🎨🔬</p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-electric-blue">🎯 Core Techniques</h3>
              <ul className="space-y-2">
                <li>• Zero Shot vs Few Shot</li>
                <li>• Chain-of-Thought</li>
                <li>• Human in the Loop</li>
                <li>• Retrieval Augmented Generation</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-purple-400">📋 Popular Frameworks</h3>
              <ul className="space-y-2">
                <li>• R-T-F (Role-Task-Format)</li>
                <li>• T-A-G (Task-Action-Goal)</li>
                <li>• B-A-B (Before-Action-Bridge)</li>
                <li>• CLEAR (Context-Length-Examples-Audience-Role)</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <p className="font-bold">💡 Remember: One prompt = One task for clarity!</p>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient',
  },

  // Slide 11: Zero Shot vs Few Shot
  {
    component: TextOnly,
    props: {
      title: '🎯 Zero Shot vs Few Shot Prompting',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-blue-900 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🎪 Zero Shot</h3>
              <p className="mb-4">No examples given. The model figures it out.</p>
              <div className="bg-gray-800 p-3 rounded text-sm">
                <p className="text-green-400">"Summarize this article."</p>
              </div>
            </div>
            
            <div className="p-6 bg-purple-900 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🎭 Few Shot</h3>
              <p className="mb-4">Provide 1+ examples to guide behavior.</p>
              <div className="bg-gray-800 p-3 rounded text-sm">
                <p className="text-green-400">"Here's how I summarized Article A: [example]</p>
                <p className="text-green-400">Now summarize Article B."</p>
              </div>
            </div>
          </div>
          
          <div className="text-center p-4 bg-yellow-600 rounded-lg">
            <p className="font-bold text-black">⚡ Pro Tip: Few shot typically yields better, more consistent results!</p>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: '#0A0E2A',
  },

  // Slide 12: Chain of Thought
  {
    component: TextWithImage,
    props: {
      title: '🧠 Chain-of-Thought Prompting',
      text: (
        <div className="space-y-4">
          <p className="text-lg">Help AI "show its work" for better reasoning 📝</p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-blue-400">🔗</span>
              <span>Break complex tasks into step-by-step reasoning</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-green-400">👁️</span>
              <span>Make the AI's thinking process visible</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-purple-400">🎯</span>
              <span>Improve accuracy for analytical tasks</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400">🏗️</span>
              <span>Structure problem-solving for reliability</span>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <p className="text-sm text-green-400 font-mono">
              "Let's think step by step:<br/>
              1. First, identify the key variables...<br/>
              2. Then, calculate the intermediate values...<br/>
              3. Finally, combine for the answer..."
            </p>
          </div>
        </div>
      ),
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Chain of thought visualization',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Slide 13: RAG
  {
    component: TextWithImage,
    props: {
      title: '📚 Retrieval-Augmented Generation (RAG)',
      text: (
        <div className="space-y-4">
          <p className="text-lg">Supercharge AI with external knowledge! 🚀</p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-blue-400">🔍</span>
              <div>
                <span className="font-bold">Retrieve:</span>
                <span className="ml-2">Find relevant documents/data</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-400">➕</span>
              <div>
                <span className="font-bold">Augment:</span>
                <span className="ml-2">Add context to your prompt</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-purple-400">✨</span>
              <div>
                <span className="font-bold">Generate:</span>
                <span className="ml-2">AI responds with enriched knowledge</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg">
            <p className="font-bold">💡 Example: "Using our company policy docs, explain the vacation policy"</p>
          </div>
        </div>
      ),
      imageUrl: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Data retrieval concept',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: '#1A1C2C',
  },

  // Slide 14: Agentic Workflow
  {
    component: TextWithImage,
    props: {
      title: '🤖 Agentic Workflow: AI That Takes Action',
      text: (
        <div className="space-y-4">
          <p className="text-lg font-bold text-electric-blue">Agents = LLM + Tools + Memory + Planning</p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎭</span>
              <span>Have a persona or objective</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛠️</span>
              <span>Use tools and APIs to complete tasks</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📋</span>
              <span>Plan multi-step workflows</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🧠</span>
              <span>Maintain state and iterate</span>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-yellow-400">🌟 Think: Personal assistant that can actually DO things, not just talk about them!</p>
          </div>
        </div>
      ),
      imageUrl: 'https://images.pexels.com/photos/11030571/pexels-photo-11030571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Agentic workflow concept',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: 'animated-gradient',
  },

  // Slide 15: MCP
  {
    component: TextWithImage,
    props: {
      title: '🔌 Model Context Protocol (MCP)',
      text: (
        <div className="space-y-4">
          <p className="text-lg text-electric-blue font-bold">Think of it as USB for LLMs! 🔌</p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-blue-400">📡</span>
              <div>
                <span className="font-bold">Server advertises:</span>
                <span className="ml-2">Available capabilities & tools</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-green-400">📋</span>
              <div>
                <span className="font-bold">Agent sends:</span>
                <span className="ml-2">Natural language schemas</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-purple-400">🧠</span>
              <div>
                <span className="font-bold">LLM decides:</span>
                <span className="ml-2">What's useful for the task</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-lg">
            <p className="font-bold">🎯 Result: Agents understand tools via natural language, not code!</p>
          </div>
        </div>
      ),
      imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Network protocol diagram',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: '#0A0E2A',
  },

  // Slide 16: AI Tools for Developers
  {
    component: TextOnly,
    props: {
      title: '🛠️ AI Tools for Developers',
      content: (
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-400">💻 Coding Assistants</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">⭐</span>
                <span>Windsurf</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">🐙</span>
                <span>GitHub Copilot</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">🔮</span>
                <span>Cursor</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">⚡</span>
                <span>Codeium</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-400">🎨 Frontend Builders</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">🚀</span>
                <span>v0.dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">⚡</span>
                <span>bolt.new</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-pink-400">💖</span>
                <span>lovable.dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">🔥</span>
                <span>Claude Artifacts</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-purple-400">🔧 General Tools</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📚</span>
                <span>NotebookLLM</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">📁</span>
                <span>RepoPrompt</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">🖥️</span>
                <span>LMStudio</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">🍎</span>
                <span>MLX (Apple)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">🔌</span>
                <span>MCP Manager</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Slide 17: Windsurf Tips
  {
    component: TextOnly,
    props: {
      title: '💡 Windsurf Tips (and General AI Usage)',
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-electric-blue">✍️ Prompting Best Practices</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✅</span>
                <span>Write clear and detailed prompts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">1️⃣</span>
                <span>One prompt = one task</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-400">📋</span>
                <span>Plan first, code later</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-400">🎯</span>
                <span>Use autocomplete to help write prompts</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-400">⚙️ Workflow Optimization</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-red-400">📄</span>
                <span>Maintain a .windsurfrules file</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-400">🧠</span>
                <span>Update model memory often</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-400">🎤</span>
                <span>Use voice mode for dictation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400">🚀</span>
                <span>Start with base prompts (cursor.directory)</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient',
  },

  // Slide 18: Real-World Applications
  {
    component: TextOnly,
    props: {
      title: '🌍 AI Applications in the Workplace',
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-400">🏢 Business Operations</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">🤖</span>
                <span>Automating repetitive tasks (RPA)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-400">💬</span>
                <span>Customer service chatbots</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-400">📊</span>
                <span>Data analysis and insights</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-400">🔧</span>
                <span>Predictive maintenance</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-400">👥 Human Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-blue-400">🎓</span>
                <span>Personalized training programs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-400">📝</span>
                <span>Content generation & summarization</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-400">🔍</span>
                <span>Resume screening & matching</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-pink-400">💡</span>
                <span>Employee sentiment analysis</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: '#1A1C2C',
  },

  // Slide 19: Challenges
  {
    component: TextOnly,
    props: {
      title: '⚠️ Challenges and Considerations',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-red-400">🚨 Technical Challenges</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400">🔒</span>
                  <span>Data privacy and security</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">⚖️</span>
                  <span>Ethical implications and bias</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-purple-400">🔧</span>
                  <span>Integration with existing systems</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-400">👥 Human Factors</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-red-400">💼</span>
                  <span>Job displacement concerns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">🎓</span>
                  <span>Need for skilled workforce</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-400">🤝</span>
                  <span>Change management</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg">
            <p className="font-bold text-white">🎯 Key: Focus on augmentation, not replacement!</p>
          </div>
        </div>
      ),
    },
    transition: 'slide-left',
    background: '#0A0E2A',
  },

  // Slide 20: Future & CTA
  {
    component: TitleSlide,
    props: {
      title: 'The Future is Collaborative',
      subtitle: (
        <>
          🤝 AI as a Partner, Not a Replacement
          <br />
          <br />
          <div className="text-lg space-y-4">
            <p>🚀 Start experimenting today</p>
            <p>📚 Keep learning and adapting</p>
            <p>🌟 Focus on human-AI collaboration</p>
            <br />
            <p className="text-electric-blue">Questions? Let's discuss! 💬</p>
          </div>
        </>
      ),
    },
    transition: 'fade',
    background: 'animated-gradient',
  },
];