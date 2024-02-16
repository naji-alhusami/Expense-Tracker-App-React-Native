import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) {
  //route provided by react navigation
  const editedExpenseId = route.params?.expenseId; // expenseId from expenseId component
  const isEditing = !!editedExpenseId; // !! convert this to Boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;
