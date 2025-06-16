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
  background?: string; // Add optional background property
}

export const presentationSlides: SlideContent[] = [
  {
    component: TitleSlide,
    props: {
      title: 'Generative AI for Everyone',
      subtitle: (
        <>
          Gaurav Ahuja
        </>
      ),
    },
    transition: 'fade',
    background: 'animated-gradient', // Apply animated background here
  },
  {
    component: TextOnly, // Using TextOnly as the content is a list of definitions
    props: {
      title: 'Let’s Demystify the Jargon',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li><b>Artificial Intelligence</b> – umbrella term for machines that mimic human cognitive functions</li>
          <li><b>ML</b> – systems that learn from data</li>
          <li><b>LLM</b> - a kind of AI trained to understand and generate human language</li>
          <li><b>GPT</b> - Generative Pre-trained Transformer – architecture used by models like ChatGPT</li>
          <li><b>Neural Network</b> - A system inspired by the brain, made up of layers of mathematical “neurons”</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    background: '#1A1C2C', // Example hex color background
  },
  {
    component: TextOnly, // Using TextOnly for the explanation text
    props: {
      title: 'How It Works: From Baby Talk to Brainstorming',
      content: (
        <>
          <p>
            The power of Large Language Models lies in their exceptional ability to identify patterns in data and replicate those patterns in new, original ways.
          </p>
          <p className="mt-4">
            <b>Training:</b> Feeding the model huge amounts of text → it learns to predict the next word.
          </p>
          <p className="mt-2">
            <b>Backpropagation:</b> When it's wrong, it adjusts.
          </p>
          <p className="mt-2">
            <b>RLHF:</b> Teaching it not just what’s right, but what’s good.
          </p>
          <p className="mt-2">
            <b>Human Layer:</b> “Don’t teach users how to rob a bank, even if you could.”
          </p>
        </>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  {
    component: TextOnly, // Using TextOnly for the short text
    props: {
      title: 'Models, Models Everywhere',
      content: (
        <>
          <p>Not just ChatGPT. It’s a jungle of models out there.</p>
        </>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextOnly, // Using TextOnly for the list of modalities
    props: {
      title: 'Modalities',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li><b>Text → Text:</b> GPT-4, Claude – answer questions, write code</li>
          <li><b>Text → Image:</b> DALL·E, Midjourney, Sogni – “a cat DJ in space”</li>
          <li><b>Image → Image:</b> Photoshop AI tools – edit, blend, remix</li>
          <li><b>Image → Text:</b> CLIP – Describe what’s in an image</li>
          <li><b>Speech → Text:</b> Transcribe meetings, voice memos</li>
          <li><b>Text → Audio:</b> Generate soundtracks, voice narration</li>
          <li><b>Text → Video:</b> AI-generated films from prompts</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    background: 'darkblue', // Example color name background
  },
  {
    component: TextOnly, // Using TextOnly for the list
    props: {
      title: 'Commercial vs Open Source',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li>ChatGPT vs LLaMA, ElevenLabs vs Whisper Models</li>
          <li><b>Online APIs vs Local/Offline:</b> ChatGPT vs Ollama, LMStudio, MLX</li>
          <li><b>Reasoning Models:</b> More transparent and accountable responses</li>
          <li><b>Chat vs Instruct:</b> Guided by templates</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextOnly, // Using TextOnly for the pipeline text
    props: {
      title: 'Vector Embeddings',
      content: (
        <p className="text-2xl font-mono">
          Prompt → Tokenization → Vector Arrays → Inference → Vector Arrays → Output
        </p>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  {
    component: TextOnly, // Using TextOnly for the explanation text
    props: {
      title: 'Understanding Vector Embeddings',
      content: (
        <>
          <p>
            Vectors represent words numerically in high-dimensional space.
          </p>
          <p className="mt-4">
            Embeddings adjust word positions based on context to reflect relationships.
          </p>
          <p className="mt-4">
            Words that appear together often are placed closer together.
          </p>
          <p className="mt-4">
            Models use these semantic networks to predict what comes next in a prompt.
          </p>
        </>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextOnly, // Using TextOnly for the list of parameters
    props: {
      title: 'Control Parameters',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li><b>Parameter Size</b> – LLaMA 3.2 has 1B, 3B, 7B models</li>
          <li><b>Quantization</b> – Smaller model sizes</li>
          <li><b>Temperature</b> – Controls randomness/creativity</li>
          <li><b>Context Window</b> – Max prompt length</li>
          <li><b>top_p</b> – Diversity control in generation</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    background: 'linear-gradient(to bottom right, #f472b6, #9E7FFF)', // Example gradient
  },
  {
    component: TextOnly, // Using TextOnly for the list of techniques
    props: {
      title: 'Prompt Engineering',
      content: (
        <>
          <p>Getting LLMs to do what you want</p>
          <p className="mt-4">Techniques:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>Zero Shot vs Few Shot Prompting</li>
            <li>Chain-of-Thought Prompting</li>
            <li>Human in the Loop</li>
            <li>Retrieval Augmented Generation (RAG)</li>
          </ul>
        </>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextOnly, // Using TextOnly for the comparison
    props: {
      title: 'Zero Shot vs Few Shot Prompting',
      content: (
        <>
          <p><b>Zero Shot:</b> No examples are given.</p>
          <p className="mt-2"><b>Few Shot:</b> Prompt contains 1 or more examples.</p>
          <p className="mt-4">Example:</p>
          <p className="mt-2"><b>Zero Shot:</b> "Summarize this article."</p>
          <p className="mt-2"><b>Few Shot:</b> "Here’s how I summarized Article A. Now summarize Article B."</p>
        </>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  {
    component: TextOnly, // Using TextOnly for the list
    props: {
      title: 'Chain-of-Thought Prompting',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li>Break complex tasks into step-by-step reasoning.</li>
          <li>Help the AI "show its work."</li>
          <li>Improve accuracy for analytical tasks.</li>
          <li>Structure problem-solving for better reliability.</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextWithImage, // Using TextWithImage for text and suggested infographic
    props: {
      title: 'Human-in-the-Loop',
      text: (
        <>
          <p>Use human feedback to guide and validate AI output.</p>
          <p className="mt-4">Example: A QA tester reviews an AI-generated test case and corrects logic flaws.</p>
        </>
      ),
      imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder for infographic
      imageAlt: 'Human feedback loop diagram',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    background: '#0A0E2A', // Example hex color
  },
  {
    component: TextWithImage, // Using TextWithImage for text and suggested animation
    props: {
      title: 'Retrieval-Augmented Generation (RAG)',
      text: (
        <>
          <p>- Leverage external data sources.</p>
          <p className="mt-2">- Augment prompt with contextual knowledge.</p>
          <p className="mt-2">- Improve reliability and accuracy.</p>
          <p className="mt-4">Example: Feed relevant internal documents when asking AI to summarize a company policy.</p>
        </>
      ),
      imageUrl: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder for animation
      imageAlt: 'Data retrieval concept',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextOnly, // Using TextOnly for the list
    props: {
      title: 'Prompt Frameworks',
      content: (
        <>
          <p>Popular Templates:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>R-T-F (Role - Task - Format)</li>
            <li>T-A-G (Task - Action - Goal)</li>
            <li>B-A-B (Before - Action - Bridge)</li>
          </ul>
          <p className="mt-4">Pro Tips:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>Wrap sections of prompts in instructions tags.</li>
            <li>Use one prompt per task for clarity.</li>
            <li>Iterate and refine prompts based on model output.</li>
          </ul>
        </>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  {
    component: TextWithImage, // Using TextWithImage for text and suggested interactive
    props: {
      title: 'Agentic Workflow',
      text: (
        <>
          <p>Agents = LLM + tools + memory + planning</p>
          <p className="mt-4">Agents:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>Have a persona or objective</li>
            <li>Use tools and APIs to complete tasks</li>
            <li>Plan multi-step workflows</li>
            <li>Maintain state and iterate</li>
          </ul>
        </>
      ),
      imageUrl: 'https://images.pexels.com/photos/11030571/pexels-photo-11030571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder for interactive
      imageAlt: 'Agentic workflow concept',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextWithImage, // Using TextWithImage for text and suggested diagram
    props: {
      title: 'Model Context Protocol (MCP)',
      text: (
        <>
          <p>- Think of it as USB for LLMs</p>
          <p className="mt-2">- Server advertises capabilities</p>
          <p className="mt-2">- Agent sends schemas</p>
          <p className="mt-2">- LLM decides what’s useful</p>
          <p className="mt-4">Helps agents understand tools available to them via natural language schemas</p>
        </>
      ),
    },
    transition: 'slide-left',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder for diagram
    imageAlt: 'Network or protocol diagram',
    imagePosition: 'right',
    background: 'linear-gradient(to top left, #38bdf8, #00B2FF)', // Example gradient
  },
  {
    component: TextOnly, // Using TextOnly for the list of tools
    props: {
      title: 'AI Tools for Developers',
      content: (
        <>
          <p>Coding Assistants:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>Windsurf</li>
            <li>GitHub Copilot</li>
          </ul>
          <p className="mt-4">Frontend Builders:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>v0.dev</li>
            <li>bolt.new</li>
            <li>lovable.dev</li>
          </ul>
          <p className="mt-4">General Tools:</p>
          <ul className="list-disc list-inside text-left mx-auto mt-2">
            <li>NotebookLLM</li>
            <li>RepoPrompt</li>
            <li>LMStudio</li>
            <li>MLX</li>
            <li>MCP Manager</li>
          </ul>
        </>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TextOnly, // Using TextOnly for the list of tips
    props: {
      title: 'Windsurf Tips (and general AI usage tips)',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li>Write clear and detailed prompts</li>
          <li>One prompt = one task</li>
          <li>Maintain a .windsurfrules file</li>
          <li>Update model memory often</li>
          <li>Use voice mode for dictation</li>
          <li>Start with a base prompt (e.g., from cursor.directory)</li>
          <li>Plan first, code later</li>
          <li>Use autocomplete to help write prompts</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  // Placeholder slides for future content
   {
    component: TextWithImage,
    props: {
      title: 'Machine Learning Basics',
      text: (
        <>
          <p>
            Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data
            without being explicitly programmed.
          </p>
          <p className="mt-4">
            It uses algorithms to parse data, learn from it, and then make a determination or prediction.
          </p>
        </>
      ),
      imageUrl:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Machine learning diagram',
      imagePosition: 'right',
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: CodeBlock,
    props: {
      title: 'Simple ML Example (Python)',
      code: String.raw`
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load data
data = {'hours_studied': [1, 2, 3, 4, 5], 'score': [10, 25, 40, 55, 70]}
df = pd.DataFrame(data)

# Prepare data
X = df[['hours_studied']]
y = df['score']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
prediction = model.predict([[6]])
print(f"Predicted score for 6 hours: {prediction[0]:.2f}")
      `,
      language: 'python',
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  {
    component: ImageOnly,
    props: {
      imageUrl:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Neural network diagram',
      caption: 'Deep Learning: A complex subset of Machine Learning.',
    },
    transition: 'fade',
    // No background specified, will use default
  },
  {
    component: TextOnly,
    props: {
      title: 'AI Applications in the Workplace',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li>Automating repetitive tasks (RPA)</li>
          <li>Enhancing customer service (Chatbots, AI assistants)</li>
          <li>Improving data analysis and insights</li>
          <li>Personalizing employee training and development</li>
          <li>Predictive maintenance and resource allocation</li>
          <li>Content generation and summarization</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    background: 'linear-gradient(to right, #f472b6, #38bdf8)', // Example gradient
  },
  {
    component: ChartSlide,
    props: {
      title: 'Projected AI Adoption Growth',
      data: [
        { year: 2020, adoption: 20 },
        { year: 2021, adoption: 30 },
        { year: 2022, adoption: 45 },
        { year: 2023, adoption: 60 },
        { year: 2024, adoption: 75 },
      ],
      xKey: 'year',
      yKey: 'adoption',
      label: 'Adoption Rate (%)',
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: DemoSlide,
    props: {
      title: 'Example: AI Chatbot Demo',
      demoUrl: 'https://example.com/your-chatbot-demo',
    },
    transition: 'slide-left',
    background: 'animated-gradient', // Special value for animated background
  },
  {
    component: TextOnly,
    props: {
      title: 'Challenges and Considerations',
      content: (
        <ul className="list-disc list-inside text-left mx-auto">
          <li>Data privacy and security</li>
          <li>Ethical implications and bias</li>
          <li>Job displacement concerns</li>
          <li>Integration with existing systems</li>
          <li>Need for skilled workforce</li>
        </ul>
      ),
    },
    transition: 'slide-left',
    // No background specified, will use default
  },
  {
    component: TitleSlide,
    props: {
      title: 'The Future is Collaborative',
      subtitle: 'AI as a Partner, Not a Replacement',
    },
    transition: 'fade',
    background: 'linear-gradient(to right, #9E7FFF, #00B2FF)', // Example gradient
  },
];
