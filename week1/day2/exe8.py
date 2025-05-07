#🌟 Exercise 8 : Star Wars Quiz
#Instructions
#This project allows users to take a quiz to test their Star Wars knowledge.
#The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

#Here is an array of dictionaries, containing those questions and answers

#data = [
    #{
    #    "question": "What is Baby Yoda's real name?",
    #    "answer": "Grogu"
    #},
    #{
     #   "question": "Where did Obi-Wan take Luke after his birth?",
      #  "answer": "Tatooine"
    #"},
    #{
    #"   "question": "What year did the first Star Wars movie come out?",
    #    "answer": "1977"
    #},
    #{
     #   "question": "Who built C-3PO?",
    #    "answer": "Anakin Skywalker"
    #},
    #{
     #   "question": "Anakin Skywalker grew up to be who?",
      #  "answer": "Darth Vader"
    #},
    #{
     #   "question": "What species is Chewbacca?",
      #  "answer": "Wookiee"
    #}
#]


#Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
#Create a function that informs the user of his number of correct/incorrect answers.
#Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
#If he had more then 3 wrong answers, ask him to play again.



data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def ask_questions():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for question in data:
        user_answer = input(question["question"] + " ")
        
        if user_answer.lower() == question["answer"].lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": question["question"],
                "your_answer": user_answer,
                "correct_answer": question["answer"]
            })

    return correct_answers, incorrect_answers, wrong_answers

def show_score(correct_answers, incorrect_answers, wrong_answers):
    print(f"\nYou got {correct_answers} correct answers and {incorrect_answers} incorrect answers.")

    if incorrect_answers > 0:
        print("\nHere are the questions you got wrong:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}")
            print()

def play_quiz():
    correct_answers, incorrect_answers, wrong_answers = ask_questions()
    show_score(correct_answers, incorrect_answers, wrong_answers)

    if incorrect_answers > 3:
        print("You got more than 3 incorrect answers. Try playing again!")
    else:
        print("Well done! Thanks for playing.")

play_quiz()
