# GitHub User Search Application

A React-based web application for searching GitHub users and viewing their profiles using the GitHub API.

## Features

- Search for GitHub users by username
- Display user profile information
- View user repositories
- Responsive design
- Clean and intuitive UI

## Tech Stack

- **React 18** - Frontend library
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API requests
- **GitHub API** - Data source for user information

## Project Structure

```
github-user-search/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── SearchBar.jsx
│   │   └── UserCard.jsx
│   ├── services/        # API service layer
│   │   └── githubService.js
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-user-search
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your GitHub Personal Access Token if needed:
     ```
     VITE_APP_GITHUB_API_KEY=your_token_here
     ```
   - Note: The GitHub API allows 60 requests per hour without authentication

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## GitHub API

This application uses the GitHub REST API v3. 

- **Rate Limits**: 
  - Unauthenticated: 60 requests/hour
  - Authenticated: 5,000 requests/hour

- **Endpoints Used**:
  - `/search/users` - Search for users
  - `/users/{username}` - Get user details
  - `/users/{username}/repos` - Get user repositories

## Environment Variables

- `VITE_APP_GITHUB_API_KEY` - (Optional) GitHub Personal Access Token for higher rate limits

## Future Enhancements

- [ ] Implement pagination for search results
- [ ] Add filters (location, followers, repositories)
- [ ] Display user statistics and activity
- [ ] Add dark/light theme toggle
- [ ] Implement user favorites/bookmarks
- [ ] Add error handling and loading states
- [ ] Include user repository details
- [ ] Add tests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- GitHub API for providing user data
- React and Vite communities for excellent documentation