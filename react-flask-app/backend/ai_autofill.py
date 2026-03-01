import os
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

# 1. Initialize the client with the stable 'v1' API version
client = genai.Client(
    api_key=os.getenv("GOOGLE_KEY"),
    http_options={'api_version': 'v1'}
)

plant_type = "Monstera"

# 2. Use the standard prompt for JSON
prompt = f"Give ideal temperature (F and int), humidity (Percentage but only int), light (Full Sun, Partial Sun, Indirect Light, Low Light in str), moisture level (0-500) for {plant_type} in JSON. The variables should be rec_temp, rec_humidity, rec_moisture, rec_light, rec_type (flower, succulent, or leafy)."

try:
    # 3. Use 'gemini-1.5-flash' (stable name)
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    print(response.text)

except Exception as e:
    print(f"An error occurred: {e}")