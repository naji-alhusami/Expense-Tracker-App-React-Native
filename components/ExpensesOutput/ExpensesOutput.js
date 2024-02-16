import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpnsesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "book",
    amount: 19.99,
    date: new Date("2022-01-09"),
  },
  {
    id: "e2",
    description: "shoes",
    amount: 69.99,
    date: new Date("2022-01-05"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      {/* Summary includes period of expnses, the total sum */}
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      {/* List of Expenses */}
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
