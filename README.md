# Marvel Character Explorer

This project is a Marvel Character Explorer built with React and TypeScript. It allows users to search for Marvel characters, view character details, and sort characters by name.

## Usage

### Search Characters

Enter a character name in the search bar to filter characters.

### View Character Details

Click on a character in the table to view more details.

### Sorting

Characters can be sorted by name in ascending or descending order.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/TomFCarrion/marvel-app.git
   cd marvel-app
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Marvel API credentials:
   ```env
   REACT_APP_API_URL=https://gateway.marvel.com/v1/public/characters
   REACT_APP_API_KEY=your_marvel_api_key
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
