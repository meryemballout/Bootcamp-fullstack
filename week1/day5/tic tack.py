# Step 1: Display the board
def display_board(board):
    print("\n")
    print(" | ".join(board[0:3]))
    print("---------")
    print(" | ".join(board[3:6]))
    print("---------")
    print(" | ".join(board[6:9]))
    print("\n")

# Step 2: Get player input
def player_input(player, board):
    while True:
        try:
            position = int(input(f"Player {player}, choose your position (1-9): ")) - 1
            if position >= 0 and position < 9 and board[position] == " ":
                return position
            else:
                print("Invalid position. Try again.")
        except ValueError:
            print("Please enter a number between 1 and 9.")

# Step 3: Check if someone won
def check_win(board, player):
    win_conditions = [
        [0,1,2], [3,4,5], [6,7,8], # rows
        [0,3,6], [1,4,7], [2,5,8], # columns
        [0,4,8], [2,4,6]           # diagonals
    ]
    for condition in win_conditions:
        if all(board[i] == player for i in condition):
            return True
    return False

# Step 4: Main game loop
def play():
    board = [" "] * 9
    current_player = "X"
    moves = 0

    while True:
        display_board(board)
        position = player_input(current_player, board)
        board[position] = current_player
        moves += 1

        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            break
        elif moves == 9:
            display_board(board)
            print("It's a tie! 🤝")
            break
        else:
            current_player = "O" if current_player == "X" else "X"

# Run the game
play()