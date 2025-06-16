import * as React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string; // e.g., 'javascript', 'python', 'typescript'
  className?: string;
}

export function CodeBlock({ title, code, language = 'plaintext', className }: CodeBlockProps) {
  // Basic syntax highlighting - can be enhanced with a library
  const highlightCode = (code: string, lang: string) => {
    // This is a very basic example. A real implementation would use a library like 'highlight.js' or 'prismjs'.
    // For demonstration, we'll just wrap some common patterns.
    let highlighted = code;
    if (lang === 'python') {
      highlighted = highlighted
        .replace(/\b(import|from|as|def|class|return|if|else|for|while|in|is|not|and|or|True|False|None)\b/g, '<span class="code-keyword">$&</span>')
        .replace(/('.*?'|".*?")/g, '<span class="code-string">$&</span>')
        .replace(/(#.*)/g, '<span class="code-comment">$&</span>')
        .replace(/\b(\d+)\b/g, '<span class="code-number">$&</span>');
    } else if (lang === 'javascript' || lang === 'typescript') {
       highlighted = highlighted
        .replace(/\b(import|from|export|default|const|let|var|function|class|return|if|else|for|while|in|of|true|false|null|undefined|new|this|await|async)\b/g, '<span class="code-keyword">$&</span>')
        .replace(/('.*?'|".*?"|`.*?`)/g, '<span class="code-string">$&</span>')
        .replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="code-comment">$&</span>')
        .replace(/\b(\d+)\b/g, '<span class="code-number">$&</span>');
    }
    // Add more languages as needed

    return <div dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };


  return (
    <div className={cn('slide-container bg-deep-navy text-white py-16 px-6 md:px-24 justify-start items-start', className)}>
       <div className="max-w-6xl mx-auto w-full h-full flex flex-col"> {/* Center content and limit width */}
        {title && <h2 className="text-3xl md:text-4xl font-bold text-electric-blue mb-6 text-left">{title}</h2>}
        <pre className="bg-dark-panel rounded-xl p-6 overflow-auto text-sm md:text-base font-mono text-white shadow-inner flex-grow"> {/* Use flex-grow to fill space */}
          <code className={`language-${language}`}>
            {/* Render highlighted code */}
            {highlightCode(code, language)}
          </code>
        </pre>
       </div>
    </div>
  );
}
