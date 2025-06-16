# Terminal Sharing Guide for Presenters

This guide explains how to use the terminal broadcasting feature in the presentation web UI.

## Overview

The presentation interface now includes a terminal sharing feature that allows you to broadcast your live terminal session to viewers. This is useful for live coding demonstrations, command-line tutorials, or any scenario where you want to share terminal output with your audience.

## Requirements

1. Install the `tty-share` tool on your machine:

```bash
# Using npm
npm install -g tty-share

# Using brew (on macOS)
brew install tty-share

# Or download the binary directly from GitHub
# Visit: https://github.com/elisescu/tty-share
```

## Using the Terminal Sharing Feature

### Step 1: Start a tty-share session

Open a terminal on your machine and start a tty-share session:

```bash
# Basic usage - shares your current terminal session
tty-share

# Share with specific command
tty-share <command> # e.g., tty-share bash or tty-share python

# Specify port (if needed)
tty-share --port 8080
```

When you run the command, tty-share will output a shareable URL, which will look something like:
```
https://tty-share.com/s/xxxxxxxxxx
```

### Step 2: Configure the presentation with your terminal URL

Before starting your presentation, you'll need to set the terminal URL. There are two ways to do this:

#### Option 1: Update the source code
1. Open `components/Presentation.tsx`
2. Look for the line with `setTerminalUrl` (around line 15)
3. Replace the default URL with your tty-share URL:
   ```typescript
   const [terminalUrl, setTerminalUrl] = useState('https://tty-share.com/s/your-session-id');
   ```
4. Rebuild and deploy your presentation

#### Option 2: Use URL parameters (If implemented)
When opening the presentation, add the `terminalUrl` query parameter:
```
https://your-presentation-url.com?terminalUrl=https://tty-share.com/s/your-session-id
```

### Step 3: Using the terminal during presentation

1. Click the terminal button (💻) in the top-left corner of the presentation to show/hide the terminal view.
2. The terminal session will appear as an overlay above the presentation.
3. To close the terminal view, click the X button or press the ESC key.

## Security Considerations

- Terminal sharing exposes your terminal session publicly. Be careful not to expose sensitive information.
- Consider using a restricted shell or specific command when using tty-share.
- For private presentations, consider running a self-hosted tty-share server.

## Troubleshooting

- If the terminal isn't visible, ensure your tty-share session is active and the URL is correct.
- Check browser console for any errors related to iframe or cross-origin issues.
- If your terminal appears blank, try refreshing the page or restarting the tty-share session.

## Advanced Configuration

For more advanced configurations, such as self-hosting the tty-share server or additional security options, refer to the [tty-share documentation](https://github.com/elisescu/tty-share).
