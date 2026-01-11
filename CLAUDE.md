# Project Guidelines

## Blog Article Format Guidelines

### Frontmatter (Required)

```yaml
---
title: 'Descriptive Title with Keywords'
date: 'YYYY-MM-DD'
tags: ['tag1', 'tag2', 'tag3', 'tag4'] # 3-7 relevant tags
draft: false
summary: 'One compelling sentence explaining what the reader will learn. Can be up to 200 characters for complex topics.'
---
```

Note: Use single quotes consistently in frontmatter.

---

### Article Types

Choose the appropriate structure based on your content:

#### Type A: Tutorial/Guide

Step-by-step technical walkthrough with code.

```
Hook (pain point)
↓
What We're Building (outcome)
↓
Prerequisites
↓
Step 1, Step 2, Step 3...
↓
Complete Example
↓
When to Use / When NOT to Use
↓
What's Next
↓
Resources
```

#### Type B: Listicle/Comparison

Tool reviews, alternatives, or ranked lists.

```
Hook (why this matters now)
↓
TL;DR (summary table with top picks)
↓
Why [Topic] Matters
↓
Category 1 (e.g., Terminal-Based Tools)
  └─ Tool 1: Key Features, Pros, Cons
  └─ Tool 2: Key Features, Pros, Cons
↓
Category 2 (e.g., GUI Tools)
  └─ Tool 3...
↓
Comparison Table (all tools)
↓
Making the Right Choice
↓
My Personal Setup
↓
Final Thoughts
```

#### Type C: Case Study

Real-world implementation with results.

```
Disclaimer (if sensitive)
↓
Hook (the context)
↓
The Challenge (problem statement)
↓
Implementation
  └─ Section 1 with code
  └─ Section 2 with code
↓
The Results (metrics, outcomes)
↓
Lessons Learned / Best Practices
↓
Conclusion
```

#### Type D: Analysis/Opinion

Cost comparisons, trend analysis, recommendations.

```
Hook (the insight)
↓
TL;DR (key numbers in table)
↓
Why Consider This
↓
Detailed Comparison (tables, numbers)
↓
Real-World Example
↓
When Each Makes Sense
↓
My Current Setup
↓
Final Thoughts
↓
Resources
```

---

### Article Structure (Universal Elements)

#### 1. Hook (First 2-3 sentences)

- Start with a pain point, provocative statement, or relatable frustration
- Make the reader think "yes, I've experienced this!"
- Examples:
  - "I hate maintaining Puppeteer scripts."
  - "Last month, I was spending $20/month on Claude Pro..."
  - "If you've been using OpenLens, I have bad news..."

#### 2. Disclaimer (When needed)

Place at the start using blockquote for sensitive topics:

```markdown
> **Disclaimer**: This is an educational deep-dive into... Don't be evil—respect ToS and rate limits.
```

#### 3. TL;DR Section (For long articles)

Summary table with key recommendations:

```markdown
## TL;DR: My Top Picks

| Use Case        | Tool     | Why                     |
| --------------- | -------- | ----------------------- |
| **Power users** | K9s      | Fastest, works over SSH |
| **Teams**       | Headlamp | CNCF-backed, modern UI  |
```

#### 4. Body Content

- Use H1 (`#`) sparingly for major thematic breaks (e.g., "# The Challenge", "# Implementation")
- Use H2 (`##`) for main sections
- Use H3 (`###`) for subsections within H2
- Number steps sequentially: "## Step 1:", "## Step 2:"
- Each section should be self-contained and scannable

#### 5. Tool/Feature Descriptions (For reviews)

```markdown
### Tool Name: One-Line Description

[Tool Name](url) brief explanation of what it does.

**Key Features:**

- Feature 1
- Feature 2
- Feature 3

**Pros:**

- Pro 1
- Pro 2

**Cons:**

- Con 1
- Con 2
```

#### 6. Comparison Tables

Use for feature matrices:

```markdown
| Feature        | Tool A | Tool B  | Tool C |
| -------------- | ------ | ------- | ------ |
| Open Source    | Yes    | Partial | Yes    |
| Multi-cluster  | Yes    | No      | Yes    |
| Learning Curve | Steep  | Low     | Medium |
```

#### 7. Code Examples

- Use triple backticks with language: `typescript, `bash, ```nginx
- Keep snippets focused—one concept per block
- Add inline comments for non-obvious lines
- Use `>` blockquotes for important notes:
  ```markdown
  > **Note**: Multilogin uses HTTP API authentication rather than a dedicated npm SDK.
  ```

#### 8. Visual Aids

**IMPORTANT: Do NOT use ASCII art diagrams.** They break on mobile devices and narrow screens.

Instead, use these mobile-friendly alternatives:

1. **Markdown Tables** - For comparisons and structured data
2. **Ordered/Unordered Lists** - For flows and hierarchies
3. **Blockquotes with nested content** - For callouts
4. **Mermaid diagrams** (if supported) - For flowcharts
5. **Plain text descriptions** - When visuals aren't essential

**Bad (ASCII art - breaks on mobile):**

```
┌─────────────┐     ┌─────────────┐
│   Step 1    │────▶│   Step 2    │
└─────────────┘     └─────────────┘
```

**Good (Markdown list):**

```markdown
**Flow:**

1. **Step 1** → Process input
2. **Step 2** → Validate data
3. **Step 3** → Return result
```

**Good (Nested list for hierarchy):**

```markdown
- **Application Layer**
  - LangChain Agent
  - Browser Tools
- **Automation Layer**
  - Puppeteer/Playwright
- **Target**
  - Website via CDP
```

**Good (Table for architecture):**

```markdown
| Layer     | Component       | Purpose            |
| --------- | --------------- | ------------------ |
| 1. Input  | User Prompt     | Define task        |
| 2. Agent  | LangGraph ReAct | Reasoning loop     |
| 3. Tools  | Browser actions | Execute commands   |
| 4. Output | Website         | Target interaction |
```

#### 9. Personal Experience Section

Near the end, add authenticity:

```markdown
## My Personal Setup

After months of testing, here's what I actually use:

1. **Tool A** — My daily driver for X
2. **Tool B** — Reserved for Y situations
3. **Tool C** — Backup when Z happens

Total monthly cost: **~$25** for effectively unlimited...
```

#### 10. Conclusion

- "## Final Thoughts" or "## What's Next?"
- Recap key insight
- Future possibilities
- Call to action: "Have you tried X? Let me know in the comments!"

#### 11. Resources Section

```markdown
---

## Resources

- [Tool Documentation](url)
- [Related Guide](url)
- [API Reference](url)
```

---

### Writing Style

#### Tone

- Conversational but technical
- First person ("I built", "Let's create", "Here's what I use")
- Direct and actionable
- Authentic—share real numbers and experiences

#### Formatting Rules

- Sentences: Keep under 25 words when possible
- Paragraphs: Max 3-4 sentences
- Lists: Bullets for unordered, numbers for sequential
- **Bold**: Key terms, tool names, important numbers
- _Italics_: Emphasis or technical terms on first use
- `Code`: filenames, functions(), variables, commands

#### Headers

- H1 (`#`): Major thematic sections (use sparingly, 0-3 per article)
- H2 (`##`): Main sections
- H3 (`###`): Subsections
- Keep headers under 60 characters
- Use sentence case, not Title Case

---

### MDX-Specific Rules

- Self-close tags: `<br />` not `<br>`
- No blank lines inside JSX components
- Blank line before/after markdown in JSX
- Escape special chars in JSX: `\{`, `\}`

---

### Content Guidelines

#### Scope

- Target one specific topic (not "Everything about React")
- Assume reader knows basics, explain advanced concepts
- Real numbers/metrics add credibility ("~$0.02 per task", "Zero security incidents")

#### Length Guidance

- **Short articles** (800-1500 words): Single concept, quick tutorial
- **Standard articles** (1500-3000 words): Most tutorials, case studies
- **Long-form** (3000+ words): Comprehensive guides, major comparisons

#### Credibility Builders

- "Real numbers from my setup:"
- "After three months of experimentation..."
- "Battle-tested in production, serving thousands of users"
- Specific metrics over vague claims

---

### Checklist Before Publishing

#### Content

- [ ] Hook grabs attention in first 2 sentences
- [ ] TL;DR table included (if article > 2000 words)
- [ ] Clear value proposition stated early
- [ ] Personal experience/setup section included
- [ ] Call to action at the end

#### Formatting

- [ ] Summary under 200 characters
- [ ] All code blocks have language identifiers
- [ ] Headers are hierarchical (H1 → H2 → H3)
- [ ] Comparison tables are readable
- [ ] Links work and resources are accurate

#### Quality

- [ ] No spelling/grammar errors
- [ ] Code examples are tested/working
- [ ] Real numbers cited where possible
- [ ] draft: false when ready to publish
