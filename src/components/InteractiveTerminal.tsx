'use client';

import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    'help': 'show available commands',
    '/help': 'show available commands',
    'bio': 'view my bio',
    'experience': 'view work experience',
    'skills': 'view my skills',
    'projects': 'view my projects',
    'research': 'view research publications',
    'contact': 'get contact information',
    'clear': 'clear terminal history',
    'ls': 'list available sections',
    'whoami': 'show current user info'
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }
    
    if (trimmedCmd === 'help' || trimmedCmd === '/help') {
      const helpText = Object.entries(commands)
        .filter(([cmd]) => cmd !== '/help') // Don't show duplicate /help in the list
        .map(([cmd, desc]) => `  ${cmd.padEnd(12)} - ${desc}`)
        .join('\n');
      setHistory(prev => [...prev, `$ ${cmd}`, 'available commands:', helpText]);
      return;
    }
    
    if (trimmedCmd === 'ls') {
      setHistory(prev => [...prev, `$ ${cmd}`, 'bio  experience  skills  projects  research  contact']);
      return;
    }
    
    if (trimmedCmd === 'whoami') {
      setHistory(prev => [...prev, `$ ${cmd}`, 'guest@srinivas.dev']);
      return;
    }
    
    if (['bio', 'experience', 'skills', 'projects', 'research', 'contact'].includes(trimmedCmd)) {
      const element = document.getElementById(trimmedCmd === 'research' ? 'scholar' : trimmedCmd);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setHistory(prev => [...prev, `$ ${cmd}`, `navigating to ${trimmedCmd}...`]);
      }
      return;
    }
    
    if (trimmedCmd in commands) {
      setHistory(prev => [...prev, `$ ${cmd}`, commands[trimmedCmd as keyof typeof commands]]);
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, `command not found: ${trimmedCmd}. type 'help' for available commands.`]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    if (value.length > 0) {
      const filtered = Object.keys(commands).filter(cmd => 
        cmd.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
      setShowSuggestions(false);
    }
    
    if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    setHistory(['how do you exit vim? you don\'t, you just buy a new computer', '', 'welcome to srinivas.dev terminal', 'type "help" for available commands', '']);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto p-4">
        {isVisible && (
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <div className="bg-border px-3 py-1 flex justify-between items-center">
              <span className="text-xs font-mono text-muted">terminal</span>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-xs font-mono text-muted hover:text-text"
              >
                [hide]
              </button>
            </div>
          
            <div className="p-3 max-h-40 overflow-y-auto">
              {history.map((line, index) => (
                <div key={index} className="text-xs font-mono text-text whitespace-pre-wrap">
                  {line}
                </div>
              ))}
            </div>
          
            <div className="relative">
              <div className="flex items-center px-3 py-2 border-t border-border">
                <span className="text-xs font-mono text-muted mr-2">guest@srinivas.dev:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-xs font-mono text-text outline-none"
                  placeholder="type a command..."
                  autoComplete="off"
                />
              </div>
            
              {showSuggestions && (
                <div className="absolute bottom-full left-0 right-0 bg-background border-l border-r border-t border-border">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1 text-xs font-mono text-text hover:bg-border cursor-pointer"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {!isVisible && (
          <div className="text-center">
            <button 
              onClick={() => setIsVisible(true)}
              className="text-xs font-mono text-muted hover:text-text px-3 py-1 border border-border rounded"
            >
              [show terminal]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
