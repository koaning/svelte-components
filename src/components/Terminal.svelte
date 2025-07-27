<svelte:options customElement="my-terminal" />

<script lang="ts">
	import { onMount } from 'svelte';
	
	export let title = 'Terminal';
	export let theme: 'dark' | 'light' = 'dark';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let showHeader = true;
	export let showButtons = true;
	export let readonly = false;
	
	let contentElement: HTMLElement;
	
	onMount(() => {
		// Use a small delay to ensure the content is fully rendered
		setTimeout(() => {
			if (contentElement) {
				// Try to find slot content in different ways
				const slot = contentElement.querySelector('slot');
				
				if (slot) {
					// Try to get assigned nodes (web component slot content)
					const htmlSlot = slot as HTMLSlotElement;
					if (htmlSlot.assignedNodes) {
						const assignedNodes = htmlSlot.assignedNodes();
						
						// Get text from assigned nodes
						let assignedContent = '';
						assignedNodes.forEach(node => {
							if (node.nodeType === Node.TEXT_NODE) {
								assignedContent += node.textContent || '';
							}
						});
						
						if (assignedContent) {
							const trimmedContent = assignedContent.trim();
							
							if (trimmedContent !== assignedContent) {
								// Update the assigned text nodes
								assignedNodes.forEach(node => {
									if (node.nodeType === Node.TEXT_NODE) {
										const originalText = node.textContent || '';
										const trimmedText = originalText.trim();
										if (trimmedText !== originalText) {
											node.textContent = trimmedText;
										}
									}
								});
							}
							
							// Apply syntax highlighting after trimming
							applySyntaxHighlighting(trimmedContent);
						}
					}
					
					// Also try the slot's own content as fallback
					const slotContent = slot.textContent || slot.innerHTML;
					if (slotContent && !assignedContent) {
						const trimmedContent = slotContent.trim();
						if (trimmedContent !== slotContent) {
							slot.textContent = trimmedContent;
						}
						applySyntaxHighlighting(trimmedContent);
					}
				}
			}
		}, 10);
	});
	
	function applySyntaxHighlighting(text: string) {
		if (!contentElement) return;
		
		const lines = text.split('\n');
		const highlightedLines: string[] = [];
		
		lines.forEach((line) => {
			// Preserve indentation for each line
			const leadingWhitespace = line.match(/^(\s*)/)?.[1] || '';
			const trimmedLine = line.trim();
			
			if (!trimmedLine) {
				// Empty line
				highlightedLines.push('');
			} else if (trimmedLine.startsWith('$') || trimmedLine.startsWith('#')) {
				// Command line
				const spaceIndex = trimmedLine.indexOf(' ');
				if (spaceIndex > 0) {
					const prompt = trimmedLine.substring(0, spaceIndex);
					const command = trimmedLine.substring(spaceIndex + 1);
					highlightedLines.push(
						`${leadingWhitespace}<span class="prompt">${prompt}</span> <span class="command">${command}</span>`
					);
				} else {
					highlightedLines.push(`${leadingWhitespace}<span class="prompt">${trimmedLine}</span>`);
				}
			} else if (trimmedLine.startsWith('+')) {
				// Addition in diff or positive output
				highlightedLines.push(`${leadingWhitespace}<span class="diff-add">${trimmedLine}</span>`);
			} else if (trimmedLine.startsWith('-')) {
				// Deletion in diff or negative output  
				highlightedLines.push(`${leadingWhitespace}<span class="diff-remove">${trimmedLine}</span>`);
			} else if (trimmedLine.toLowerCase().includes('error') || trimmedLine.includes('Error') || trimmedLine.includes('✗')) {
				// Error output
				highlightedLines.push(`${leadingWhitespace}<span class="error">${trimmedLine}</span>`);
			} else if (trimmedLine.startsWith('✓') || trimmedLine.toLowerCase().includes('success') || trimmedLine.toLowerCase().includes('built')) {
				// Success output
				highlightedLines.push(`${leadingWhitespace}<span class="success">${trimmedLine}</span>`);
			} else if (trimmedLine.startsWith('#!/') || trimmedLine.startsWith('def ') || trimmedLine.startsWith('if ') || trimmedLine.startsWith('import ')) {
				// Code syntax
				highlightedLines.push(`${leadingWhitespace}<span class="code">${trimmedLine}</span>`);
			} else {
				// Regular output
				highlightedLines.push(`${leadingWhitespace}<span class="output">${trimmedLine}</span>`);
			}
		});
		
		// Create or update the highlighted content container
		let highlightedContainer = contentElement.querySelector('.highlighted-content') as HTMLDivElement;
		if (!highlightedContainer) {
			highlightedContainer = document.createElement('div');
			highlightedContainer.className = 'highlighted-content';
			highlightedContainer.style.whiteSpace = 'pre-wrap';
			highlightedContainer.style.wordBreak = 'break-word';
			highlightedContainer.style.lineHeight = 'inherit';
			contentElement.appendChild(highlightedContainer);
		}
		
		highlightedContainer.innerHTML = highlightedLines.join('\n');
		
		// Hide the original slot content
		const slot = contentElement.querySelector('slot');
		if (slot) {
			slot.style.display = 'none';
		}
	}
	
	function handleCopy() {
		// Get the original text from the slot and extract only commands
		let content = '';
		if (contentElement) {
			const slot = contentElement.querySelector('slot');
			if (slot) {
				const htmlSlot = slot as HTMLSlotElement;
				if (htmlSlot.assignedNodes) {
					const assignedNodes = htmlSlot.assignedNodes();
					assignedNodes.forEach(node => {
						if (node.nodeType === Node.TEXT_NODE) {
							content += node.textContent || '';
						}
					});
				}
			}
		}
		
		// Extract only command lines (starting with $ or #) and get the command part
		const lines = content.trim().split('\n');
		const commands: string[] = [];
		
		lines.forEach(line => {
			const trimmedLine = line.trim();
			if (trimmedLine.startsWith('$ ')) {
				// Extract command after "$ "
				commands.push(trimmedLine.substring(2));
			} else if (trimmedLine.startsWith('# ')) {
				// Extract command after "# "
				commands.push(trimmedLine.substring(2));
			}
		});
		
		const commandsText = commands.join('\n');
		navigator.clipboard?.writeText(commandsText);
		
		const customEvent = new CustomEvent('terminalCopy', {
			detail: { content: commandsText, commandCount: commands.length },
			bubbles: true
		});
		
		document.dispatchEvent(customEvent);
	}
	
</script>

<div class="terminal {theme} {size}">
	{#if showHeader}
		<div class="terminal-header">
			{#if showButtons}
				<div class="terminal-buttons">
					<span class="btn red"></span>
					<span class="btn yellow"></span>
					<span class="btn green"></span>
				</div>
			{/if}
			<div class="terminal-title">{title}</div>
			<div class="terminal-actions">
				<button class="action-btn" on:click={handleCopy} title="Copy Commands">📋</button>
			</div>
		</div>
	{/if}
	
	<div class="terminal-content" class:readonly bind:this={contentElement}>
		<slot>$ echo "Hello, World!"</slot>
	</div>
</div>

<style>
	.terminal {
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'DejaVu Sans Mono', monospace;
		max-width: 100%;
	}
	
	/* Themes */
	.dark {
		background-color: #1e1e1e;
		color: #d4d4d4;
		border: 1px solid #333;
	}
	
	.light {
		background-color: #ffffff;
		color: #333333;
		border: 1px solid #e1e1e1;
	}
	
	/* Header */
	.terminal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 12px;
		border-bottom: 1px solid;
	}
	
	.dark .terminal-header {
		background-color: #2d2d2d;
		border-bottom-color: #404040;
	}
	
	.light .terminal-header {
		background-color: #f5f5f5;
		border-bottom-color: #e1e1e1;
	}
	
	.terminal-buttons {
		display: flex;
		gap: 6px;
	}
	
	.btn {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: block;
	}
	
	.btn.red {
		background-color: #ff5f57;
	}
	
	.btn.yellow {
		background-color: #ffbd2e;
	}
	
	.btn.green {
		background-color: #28ca42;
	}
	
	.terminal-title {
		font-size: 12px;
		font-weight: 500;
		opacity: 0.8;
		flex: 1;
		text-align: center;
	}
	
	.terminal-actions {
		display: flex;
		gap: 4px;
	}
	
	.action-btn {
		background: none;
		border: none;
		font-size: 12px;
		cursor: pointer;
		padding: 2px 4px;
		border-radius: 3px;
		opacity: 0.7;
		transition: opacity 0.2s;
	}
	
	.action-btn:hover {
		opacity: 1;
	}
	
	.dark .action-btn:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	
	.light .action-btn:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
	
	/* Content */
	.terminal-content {
		padding: 12px;
		min-height: 100px;
		white-space: pre-wrap;
		word-break: break-word;
		line-height: 1.4;
		overflow-x: auto;
	}
	
	.terminal-content.readonly {
		user-select: text;
	}
	
	/* Sizes */
	.small {
		font-size: 12px;
	}
	
	.small .terminal-content {
		padding: 8px;
		min-height: 60px;
	}
	
	.medium {
		font-size: 14px;
	}
	
	.large {
		font-size: 16px;
	}
	
	.large .terminal-content {
		padding: 16px;
		min-height: 120px;
	}
	
	/* Scrollbar styling for dark theme */
	.dark .terminal-content::-webkit-scrollbar {
		height: 8px;
	}
	
	.dark .terminal-content::-webkit-scrollbar-track {
		background: #2d2d2d;
	}
	
	.dark .terminal-content::-webkit-scrollbar-thumb {
		background: #555;
		border-radius: 4px;
	}
	
	.dark .terminal-content::-webkit-scrollbar-thumb:hover {
		background: #666;
	}
	
	/* Scrollbar styling for light theme */
	.light .terminal-content::-webkit-scrollbar {
		height: 8px;
	}
	
	.light .terminal-content::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	
	.light .terminal-content::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 4px;
	}
	
	.light .terminal-content::-webkit-scrollbar-thumb:hover {
		background: #a1a1a1;
	}
	
	/* Syntax highlighting styles */
	.terminal-content :global(.highlighted-content) {
		white-space: pre-wrap;
		word-break: break-word;
		line-height: inherit;
	}
	
	.terminal-content :global(.prompt) {
		color: #569cd6;
		font-weight: bold;
	}
	
	.terminal-content :global(.command) {
		color: #dcdcaa;
	}
	
	.terminal-content :global(.output) {
		color: inherit;
		opacity: 0.9;
	}
	
	.terminal-content :global(.diff-add) {
		color: #608b4e;
	}
	
	.terminal-content :global(.diff-remove) {
		color: #f44747;
	}
	
	.terminal-content :global(.error) {
		color: #f44747;
	}
	
	.terminal-content :global(.success) {
		color: #608b4e;
	}
	
	.terminal-content :global(.code) {
		color: #9cdcfe;
		font-style: italic;
	}
	
	/* Light theme syntax highlighting */
	.light .terminal-content :global(.prompt) {
		color: #0066cc;
	}
	
	.light .terminal-content :global(.command) {
		color: #333333;
		font-weight: 500;
	}
	
	.light .terminal-content :global(.diff-add) {
		color: #22863a;
	}
	
	.light .terminal-content :global(.diff-remove) {
		color: #d73a49;
	}
	
	.light .terminal-content :global(.error) {
		color: #d73a49;
	}
	
	.light .terminal-content :global(.success) {
		color: #22863a;
	}
	
	.light .terminal-content :global(.code) {
		color: #6f42c1;
		font-style: italic;
	}
</style>