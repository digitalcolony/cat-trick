# 😻 Cat Trick

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Netlify Status](https://api.netlify.com/api/v1/badges/342a08c1-b93e-405f-8c0f-f259f8c0aed2/deploy-status)](https://app.netlify.com/sites/cat-trick/deploys)

A web application that tracks and displays encounters with cats in the Ballard neighborhood of Seattle. When you meet 3 cats in a single day, it's considered a "Cat Trick" - similar to a hat trick in hockey! 🏆

## 🐱 About

In the charming Seattle neighborhood of Ballard, friendly cats often approach for a greeting. This project began as a simple way to track these encounters using a Google Sheet and has evolved into a web application that celebrates our feline friends.

### Key Features

- **Cat Encounter Tracking**: Records daily cat meetings with photos and statistics
- **Cat Leaderboard**: Shows the most frequently encountered cats
- **Daily Statistics**: Displays cat encounters by date and frequency
- **Cat Trick Detection**: Highlights rare days when 3+ cats are met
- **Responsive Design**: Modern interface that works on all devices

## 🚀 Technology Stack

- **Frontend**: [Astro](https://astro.build) with React components
- **Styling**: Custom CSS with modern responsive design
- **Data Source**: Google Sheets via Google Apps Script API
- **Deployment**: Netlify with automated builds
- **Automation**: Zapier integration for real-time updates

## 🏗️ Architecture

The application uses a hybrid approach combining static site generation with dynamic data:

1. **Data Collection**: Cat encounters are logged via Google Forms
2. **Data Processing**: Google Apps Script processes the sheet data into JSON
3. **Build Trigger**: Zapier monitors form submissions and triggers Netlify builds
4. **Static Generation**: Astro generates a fast, static site with the latest data
5. **Deployment**: Netlify serves the optimized static site

## 📊 Features

### Cat Statistics

- Total cat encounters
- Encounters by date
- Monthly/yearly breakdowns
- Cat trick frequency analysis

### Cat Profiles

- Individual cat photos and names
- Encounter frequency rankings
- Meeting history timeline

### Responsive Design

- Mobile-first approach
- Optimized images with lazy loading
- Fast loading times with static generation

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cat-trick.git
cd cat-trick

# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
cat-trick/
├── src/
│   ├── components/        # Astro and React components
│   │   ├── CatLeaderboard.astro
│   │   ├── CatStats.astro
│   │   ├── CatWrapper.astro
│   │   └── ...
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── assets/           # Cat images and media
│   └── styles/           # Global styles
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
└── package.json
```

## 🔧 Configuration

### Google Sheets Integration

The project uses a Google Apps Script to serve cat data as JSON:

1. Set up a Google Form for cat encounter logging
2. Configure Google Apps Script with the provided code
3. Deploy as a web app with public access
4. Update the data source URL in your Astro components

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables if needed

### Zapier Automation

1. Create a Zapier trigger for Google Form submissions
2. Set up a Netlify build webhook action
3. Enable automatic builds on new cat encounters

## 🎨 Customization

- **Cat Images**: Add new cat photos to `src/assets/`
- **Styling**: Modify `src/styles/global.css` for visual changes
- **Components**: Extend functionality by editing Astro components
- **Data Processing**: Customize statistics in `CatStats.astro`

## 🚧 Performance Optimization

- Static site generation for fast loading
- Optimized images with proper sizing
- Minimal JavaScript bundle
- CDN delivery via Netlify

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All the friendly cats of Ballard who make this project possible
- The Astro team for creating an amazing framework
- The open-source community for inspiration and tools
  🐾\_
