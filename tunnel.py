from pyngrok import ngrok

# Create tunnel for port 5173
tunnel = ngrok.connect(5173)
print(f"Tunnel URL: {tunnel.public_url}")

# Keep running
input("Press Enter to stop...")
ngrok.kill()
