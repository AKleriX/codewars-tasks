const generateMarkdowns = (markdown, text, urlOrLanguage) => {
  const dict = {
    link: () => `[${text}](${urlOrLanguage})`,
    img: () => `![${text}](${urlOrLanguage})`,
    code: () => `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``,
  };
  return dict[markdown]();
};
