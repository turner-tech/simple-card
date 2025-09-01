from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
from urllib.parse import urlparse

class SPAHandler(SimpleHTTPRequestHandler):
    """Custom handler for Single Page Application routing"""
    
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # If it's a file request (has extension), serve normally
        if '.' in path.split('/')[-1]:
            return super().do_GET()
        
        # For routes like /, /verbs, /conjugations, serve index.html
        if path in ['/', '/verbs', '/conjugations']:
            self.path = '/index.html'
        
        return super().do_GET()

# Change to the public directory
os.chdir(os.path.join(os.path.dirname(__file__), 'public'))

# Create and start the server
def run(server_class=HTTPServer, handler_class=SPAHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    print(f'Open your browser and go to http://localhost:{port}')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
