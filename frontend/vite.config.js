import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

/**
 * The base URL for the API endpoints.
 *
 * This variable holds the base API URL that the application will use to send HTTP requests
 * to the backend server. The default value points to a local server running on IP address
 * 127.0.0.1 with port 5000. This is the default for a Flask development server.
 *
 * After you have changed the settings in the `main.py` file, replace the address in the following line:.
 */
const apiUrl = 'http://127.0.0.1:5000';

/**
 * After this step, the instructions change, compared to the ReadMe.md file.
 * Now, the command to host to your private network is as follows:
 * `npm run dev -- --host`
 * After running this in the frontend folder, you should be able to access the webapp across all devices
 * in your network by following the second link in the terminal.
 */

const Authors = 'Vojtěch Bednárek & Anna Sušická'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.API_URL': JSON.stringify(apiUrl),
        'process.env.AUTHORS': JSON.stringify(Authors)
    }
})
