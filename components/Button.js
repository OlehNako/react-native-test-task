import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

// check theme of buttons to set their styles

export default ({ onPress, text, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (theme === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimension of calculator
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;


// button styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
    },
    
  text: {
    color: "#fff",
    fontSize: 32,
  },
  textSecondary: {
    color: "#fff",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "orange",
    },
  buttonZero: {
    alignItems: "flex-start",
    flex: 0,
    width: screen.width / 2 - 10
  }
});
