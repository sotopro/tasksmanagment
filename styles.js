import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#212121",
    fontSize: 14,
  },
  listContainer: {
    marginTop: 25,
  },
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#D4D7ED",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#212121",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  listItem: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212121",
  },
  list: {
    gap: 15,
    paddingBottom: 20,
  },
  icon: {
    color: "red",
    fontSize: 16,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: "#212121",
  },
  selectedTask: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
