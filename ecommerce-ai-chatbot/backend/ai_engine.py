import openai

openai.api_key = "YOUR_API_KEY"

def ask_openai(question, context=""):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": context},
            {"role": "user", "content": question}
        ]
    )
    return response['choices'][0]['message']['content']
