const markdownInput = document.getElementById("markdown-input");
  text = text.replace(
    /\*(.*?)\*/g,
    '<em>$1</em>'
  );

  text = text.replace(
    /_(.*?)_/g,
    '<em>$1</em>'
  );

  return text;
}

function convertMarkdown() {
  const markdownText = markdownInput.value;

  const lines = markdownText.split("\n");

  const convertedLines = lines.map((line) => {
    // h3
    if (/^\s*###\s+/.test(line)) {
      const content = line.replace(/^\s*###\s+/, "");
      return `<h3>${convertInlineMarkdown(content)}</h3>`;
    }

    // h2
    if (/^\s*##\s+/.test(line)) {
      const content = line.replace(/^\s*##\s+/, "");
      return `<h2>${convertInlineMarkdown(content)}</h2>`;
    }

    // h1
    if (/^\s*#\s+/.test(line)) {
      const content = line.replace(/^\s*#\s+/, "");
      return `<h1>${convertInlineMarkdown(content)}</h1>`;
    }

    // Blockquote
    if (/^\s*>\s+/.test(line)) {
      const content = line.replace(/^\s*>\s+/, "");
      return `<blockquote>${convertInlineMarkdown(content)}</blockquote>`;
    }

    // Normal inline markdown
    return convertInlineMarkdown(line);
  });

  return convertedLines.join("");
}

function updatePreview() {
  const convertedHTML = convertMarkdown();

  htmlOutput.textContent = convertedHTML;
  preview.innerHTML = convertedHTML;
}

markdownInput.addEventListener("input", updatePreview);

// Default example
markdownInput.value = `# Markdown Converter

## Features

**Bold text**

*Italic text*

![Sample Image](https://via.placeholder.com/150)

[OpenAI](https://openai.com)

> This is a quote`;

updatePreview();
