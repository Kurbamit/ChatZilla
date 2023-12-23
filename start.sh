# Runs the client project
cd client
npm start &

# Wait for a moment to ensure the client has started
sleep 5

# Runs the server
cd ../server
npm start
