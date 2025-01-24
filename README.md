# Palindrome Checker

A palindrome is a word or phrase that reads the same forward and backward, ignoring punctuation, case, and spacing. This project is a web application that allows users to check if a given input is a palindrome.

## Features

- Input field to enter text for palindrome verification.
- A button to trigger the palindrome check.
- Displays the result indicating whether the input is a palindrome or not.
- Alerts users if no value is entered in the input field.

## User Stories

1. The app has an input element with an id of `text-input`.
2. There is a button element with an id of `check-btn`.
3. The result of the palindrome check is displayed in a `div`, `span`, or `p` element with an id of `result`.
4. An alert appears if the `check-btn` is clicked without entering a value in `text-input`.
5. Handles various test cases such as single letters, phrases with spaces and punctuation, and mixed case inputs.

## Example Inputs and Results

| Input                                 | Result                                 |
|---------------------------------------|----------------------------------------|
| A                                     | A is a palindrome                      |
| eye                                   | eye is a palindrome                    |
| _eye                                  | _eye is a palindrome                   |
| race car                              | race car is a palindrome               |
| not a palindrome                      | not a palindrome is not a palindrome   |
| A man, a plan, a canal. Panama        | A man, a plan, a canal. Panama is a palindrome |
| never odd or even                     | never odd or even is a palindrome      |
| nope                                  | nope is not a palindrome               |
| My age is 0, 0 si ega ym.             | My age is 0, 0 si ega ym. is a palindrome |
| 0_0 (: /-\ :) 0-0                     | 0_0 (: /-\ :) 0-0 is a palindrome      |
| five|\_/|four                         | five|\_/|four is not a palindrome       |

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/OthmanTabeche/Palindrome-Checker-FreeCodeCamp.git
   ```
2. Open `index.html` in your browser.
3. Enter text in the input field and click the "Check" button to see the result.

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

---

### Author

Developed with ❤️ by [Othman](https://github.com/OthmanTabeche).
