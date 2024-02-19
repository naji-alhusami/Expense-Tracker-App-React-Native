import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad", // supported by IOS and Android
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeHolder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none',  imp if the input used for emails
          // autoCorrect: false, imp if the input used for emails (default is true)
        }}
      />
    </View>
  );
}

export default ExpenseForm;
