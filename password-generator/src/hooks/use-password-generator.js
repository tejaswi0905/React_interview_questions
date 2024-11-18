import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * array.length);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generatePassword = (checkoxData, length) => {
    const newPassword = [];
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    let allChars = "";

    const selectedOptions = checkoxData.filter((boxData) => {
      return boxData.state;
    });

    if (selectedOptions.length === 0) {
      setErrorMessage("Select atlest one option");
      setPassword([]);
      return;
    }
    selectedOptions.forEach((data) => {
      if (data.title === "Include UpperCase Letters") {
        newPassword.push(
          upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
        );
        allChars += upperCaseLetters;
      }
      if (data.title === "Include LowerCase Letters") {
        newPassword.push(
          lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
        );
        allChars += lowerCaseLetters;
      }
      if (data.title === "Include Numbers") {
        newPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
        allChars += numbers;
      }
      if (data.title === "Include Symbols") {
        newPassword.push(symbols[Math.floor(Math.random() * symbols.length)]);
        allChars += symbols;
      }
    });

    for (let i = newPassword.length; i < length; i++) {
      const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      newPassword.push(randomChar);
    }

    const shufflePassword = shuffleArray(newPassword);

    setPassword(shufflePassword);
    setErrorMessage("");
  };
  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
